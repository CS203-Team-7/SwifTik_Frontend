import React, { useEffect } from "react";
import "../css/main.css";
import "../css/poster.css"
import { Link } from "react-router-dom"; 
import { getEvents } from "../services/Events";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Main = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [events, setEvents] = useState([]);

    return (
        <div className="event-page">
        <div className="label">
                <h3>Current events</h3>
         </div>
        </div>
    );
};

export default Main;