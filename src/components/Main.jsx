import React, { useEffect } from "react";
import "../css/main.css";
import "../css/poster.css"
import { Link } from "react-router-dom"; 
import { getEvents } from "../services/Events";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EventCard from "./EventCard";

export const Main = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        localStorage.getItem("token") ? setIsAuthenticated(true) : setIsAuthenticated(false);
        if(isAuthenticated) {
            getEvents().then((response) => {
                console.log(response.data);
                setEvents(response.data);
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
    }, [isAuthenticated])


    return (
        <div className="event-page">
        <div className="label">
                <h3>Current events</h3>
            <div className="row">
            {events.map((event) => {
                        return (
                            <EventCard key={event.eventId} event={event} counter={event.eventId} />
                        )
                    })}
            </div>
                
        </div>
        </div>
    );
};

export default Main;