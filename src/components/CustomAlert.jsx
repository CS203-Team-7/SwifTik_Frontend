import React, { useEffect } from "react";
import { useState } from "react";
import { preRegister } from "../services/Zones";
import { useNavigate } from "react-router";
import jwtDecode from "jwt-decode";

const CustomAlert = ({ eventId, zone, onClose }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setisAuthenticated] = useState(false)
    const [email, setemail] = useState('')

    useEffect(() => {
        localStorage.getItem("token") ? setisAuthenticated(true) : setisAuthenticated(false);
        console.log(isAuthenticated);
        // Get the user's email from the token:
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        console.log(decodedToken.sub);    
        setemail(decodedToken.sub);

    }, [isAuthenticated]);

    const handleJoinRaffle = () => {
        if(isAuthenticated) {
            console.log("Joining raffle");
            // API call to join raffle
            preRegister(email, eventId, zone.zoneId).then((response) => {
                console.log(response.data);
                alert(response.data);
            }).catch((error) => {
                if(error.response.status === 401){
                    alert("Your session has expired. Please login again.");
                    localStorage.removeItem("token");
                    setisAuthenticated(false);
                    navigate("/login");
                }
                console.log(error.response.data);
                alert(error.response.data);
            })
        }
        onClose();
    }


    return (
        <div className="custom-alert-overlay">
            <div className="custom-alert">
                <h2>You selected:</h2>
                <p><strong>Zone: </strong> {zone.zoneName}</p>
                <p><strong>Price:</strong> {zone.ticket_price}</p>
                <br></br>
                <br></br>
                <text>Proceed?</text>
                <br></br>
                <div className="button-container">
                    <button onClick={handleJoinRaffle} className="proceed-button">Enter Raffle</button> {/*We need to add a handleProceedAlert in SeatMap.jsx for when we click the proceed button*/}
                    <button onClick={onClose} className="close-button">Close</button>
                </div>
            </div>
        </div>
    );
};

export default CustomAlert;
