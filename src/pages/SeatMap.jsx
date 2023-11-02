import React, { useState } from "react";
import Header from "../components/Header";

const SeatMap = () => {
    const handleZoneButtonClick = () => {
        // Define what happens when the button is clicked here
        alert("Zone button clicked!");
    };

    return (
        <div className="seatmap">
            <Header />
            <div className="seatmap-heading">
                <h1>Seat Map</h1>
                
            </div>
            <div className="seatmap-container">
            <img style={{ width: 500, height: 600 }}src="https://www.sportshub.com.sg/sites/default/files/2023-07/NST-TS-seatmap-VIP-V4.jpg" alt="seatmap"/>
            </div>
            <div className="zone-button" onClick={handleZoneButtonClick}>
                <text>Zone</text>
            </div>
        </div>
    );
};

export default SeatMap;