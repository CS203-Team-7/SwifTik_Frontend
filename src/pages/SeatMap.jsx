import React, { useState } from "react";
import Header from "../components/Header";

const SeatMap = () => {

    return (
        <div className="seatmap">
            <Header />
            <div className="seatmap-heading">
                <h1>Seat Map</h1>
                <img style={{ width: 800, height: 960 }}src="https://www.sportshub.com.sg/sites/default/files/2023-07/NST-TS-seatmap-VIP-V4.jpg" alt="seatmap" />
            </div>
            <div className="seatmap-container">
                
            </div>
        </div>
    );
};

export default SeatMap;