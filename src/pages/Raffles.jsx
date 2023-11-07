import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../css/raffles.css"
import Footer from "../components/Footer";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { getJoinedZones, getLinkedEvent } from "../services/Zones";

const Raffles = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setisAuthenticated] = useState(false);
    const [currentraffles, setCurrentRaffles] = useState([]);//temporary hardcoded data
    const [email, setEmail] = useState("");
    const [event, setEvent] = useState([]);

    useEffect(() => {
        handleShowRaffle();
    }, [isAuthenticated]);

    const handleShowRaffle = () => {
        //Get email from token
        const token = localStorage.getItem("token");
        const user = jwtDecode(token);
        setEmail(user.sub);
        console.log(email);

        // Check if authenticated:
        localStorage.getItem("token") ? setisAuthenticated(true) : setisAuthenticated(false);

        //API call to get joined zones
        if(isAuthenticated) {
            getJoinedZones(email).then((response) => {
                console.log(response.data);
                setCurrentRaffles(response.data);
            }).catch((error) => {
                if(error.response.status === 401){
                    alert("Your session has expired. Please login again.");
                    localStorage.removeItem("token");
                    setisAuthenticated(false);
                    navigate("/login");
                }
                console.log(error.response);
            })
        }
    }

    const handleGetEvent = (zoneId) => {
        if(isAuthenticated) {
            // API call:
            getLinkedEvent(zoneId).then((response) => {
                console.log(response.data);
                setEvent(response.data);
                console.log(event.eventName);
                alert("You have joined the raffle for " + event.eventName + "!");
            }).catch((error) => {
                if(error.response.status === 401){
                    alert("Your session has expired. Please login again.");
                    localStorage.removeItem("token");
                    setisAuthenticated(false);
                    navigate("/login");
                }
                console.log(error.response);
            })
        }
    }

    return (
        <div className="raffles">
            <Header />
            <div className="row heading">
                <h3>Current Raffles</h3>
            </div>
            <div className="row">
                {currentraffles.map((raffle, index) => (
                    <div className="raffle-container" key={index} onClick={() => handleGetEvent(raffle.zoneId)}>
                        <img src='https://res.klook.com/image/upload/x_0,y_32,w_420,h_588,c_crop/c_scale,w_360/v1698305850/events_admin/vedhrre7fvupnnq2m8wd.jpg' className='raffle-image' alt="raffle" />
                        <div className="raffle-info"> {/*this is the info that will be displayed on the raffle card when hovering*/}
                            <h3>{raffle.zoneName}</h3>
                            <p>Users registered: {raffle.user_count}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />   
        </div>
    );
};

export default Raffles;
