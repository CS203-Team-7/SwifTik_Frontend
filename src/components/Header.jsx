import React from "react";
import "../css/header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <div className="header">
            <div className="logo">
                <h1>SwifTik</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/raffles">Raffles</a></li>
                    <li><a href="/tickets">My Tickets</a></li>
                </ul>
            </nav>
            <div className="search">
                <button className="button-6" onClick={handleLogOut}>Logout</button>
            </div>
        </div> //add login bar ltr
    );
}

export default Header;


