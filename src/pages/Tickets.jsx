import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../css/tickets.css"
import Footer from "../components/Footer";
import jwtDecode from "jwt-decode";
import { getTicketByUser } from "../services/Tickets"
import { useNavigate } from "react-router";

const Tickets = () => {
    const navigate = useNavigate();
    const [currenttickets, setCurrenttickets] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // API call to get tickets
    useEffect(() => {
        // Check if user is authenticated
        localStorage.getItem("token") ? setIsAuthenticated(true) : setIsAuthenticated(false);
        // Get email from token
        const token = localStorage.getItem("token");
        const decoded = jwtDecode(token);
        const email = decoded.sub;
        console.log(email);
        console.log(isAuthenticated);

        // Get tickets for user
        if(isAuthenticated) {
            getTicketByUser(email).then((response) => {
                console.log(response.data);
                setCurrenttickets(response.data);
            }).catch((error) => { 
                if(error.response.status === 401){
                    alert("Your session has expired. Please login again.");
                    localStorage.removeItem("token");
                    setIsAuthenticated(false);
                    navigate("/login");
                }
                console.log(error.response.data);
                alert(error.response.data)
            })
        }
    }, [isAuthenticated])


    return (
        <div className="tickets">
            <Header />
            <div className="row heading">
                <h3>My Tickets</h3>
            </div>
            <div className="row">
                {currenttickets.map((ticket, index) => (
                    <div className="ticket-container" key={index}>
                        <div> {/*this is the info that will be displayed on the card when hovering*/}
                        <img src='https://upload.wikimedia.org/wikipedia/en/3/33/The_Eras_Tour_poster.jpg' alt="event" className="ticket-image" />
                            <p>{ticket.zonename}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />   
        </div>
    );
};

export default Tickets;
