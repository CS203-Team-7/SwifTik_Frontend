import React, { useState } from "react";
import Header from "../components/Header";
import CustomAlert from "../components/CustomAlert";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import { getZonesForEvent } from "../services/Zones";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getEvent } from "../services/Events";
import { purchaseTicket } from "../services/Tickets";
import jwtDecode from "jwt-decode";

const SeatMap = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [zones, setZones] = useState([]);
    const [event, setEvent] = useState([]);

    // API call to get event
    useEffect(() => {
        localStorage.getItem("token") ? setIsAuthenticated(true) : setIsAuthenticated(false);
        console.log(isAuthenticated);
        if(isAuthenticated) {
            getEvent(id).then((response) => {
                console.log(response.data);
                setEvent(response.data);
            }).catch((error) => {
                if(error.response.status === 401){
                    alert("Your session has expired. Please login again.");
                    localStorage.removeItem("token");
                    setIsAuthenticated(false);
                    navigate("/login");
                }
                console.log(error.response.data);
            })
        }
    }, [isAuthenticated, navigate, id]);

    // API call to get zones
    useEffect(() => {
        localStorage.getItem("token") ? setIsAuthenticated(true) : setIsAuthenticated(false);
        if(isAuthenticated) {
            getZonesForEvent(id).then((response) => {
                console.log(response.data);
                setZones(response.data);
            }).catch((error) => {
                if(error.response.status === 401){
                    alert("Your session has expired. Please login again.");
                    localStorage.removeItem("token");
                    setIsAuthenticated(false);
                    navigate("/login");
                }
                console.log(error.response.data);
            })
        }
    }, [isAuthenticated, navigate, id]);


    const [selectedZone, setSelectedZone] = useState(null);

    const handleZoneButtonClick = (zone) => {
        setSelectedZone(zone);
    };

    const handlePurchase = (zone) => {
        // Check if user is authenticated
        localStorage.getItem("token") ? setIsAuthenticated(true) : setIsAuthenticated(false);
        console.log(isAuthenticated);
        console.log(localStorage.getItem("token"));

        // Get email from token
        const token = localStorage.getItem("token");
        const decoded = jwtDecode(token);
        const email = decoded.sub;
        console.log(email);

        // Call API to purchase ticket
        if(isAuthenticated) {
            console.log("1 yep")
            purchaseTicket(email, id, zone.zoneId).then((response) => {
                console.log(response.data);
                setSelectedZone(null);
                alert("Ticket purchased successfully!");
            }).catch((error) => {
                console.log("2 yep")
                console.log(error.response);
                if(error.response.status === 401){
                    alert("Your session has expired. Please login again.");
                    localStorage.removeItem("token");
                    setIsAuthenticated(false);
                    navigate("/login");
                }
                console.log(error.response.data);
                alert(error.response.data);
            })
        }
    }

    const handleCloseAlert = () => {
        setSelectedZone(null);
    };

    return (
        <div className="seatmap">
            <Header />
            <div className="seatmap-heading">
                <h1>Seat Map - {event.eventName}</h1>
            </div>
            <div className="seatmap-container">
            <img style={{ width: 500, height: 600 }}src="https://www.sportshub.com.sg/sites/default/files/2023-07/NST-TS-seatmap-VIP-V4.jpg" alt="seatmap"/>
            </div>
            <div className="zone-buttons">
                {zones.map((zone) => (
                    <div>
                        <button
                            key={zone.zoneId}
                            className="zone-button"
                            onClick={() => handleZoneButtonClick(zone)}
                        >
                            <span className="zone-name">{zone.zoneName}</span>
                            <br></br><span className="price">{zone.ticket_price}</span>
                        </button>
                        <button className="purchase" onClick={() => handlePurchase(zone)}>
                            Purchase Ticket
                        </button>
                    </div>
                ))}
            </div>
            {selectedZone && (
                <CustomAlert eventId={id} zone={selectedZone} onClose={handleCloseAlert} />
            )}
            <Footer /> 
        </div>
    );
};

export default SeatMap;