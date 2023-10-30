import React, { useState } from "react";
import Header from "../components/Header";

const SeatMap = () => {
    const [selectedZone, setSelectedZone] = useState(null);

  const zones = [
    { id: 1, name: 'Zone A', coordinates: [/* Define the polygon coordinates for Zone A */] },
    { id: 2, name: 'Zone B', coordinates: [/* Define the polygon coordinates for Zone B */] },
    // Define more zones as needed
  ];

    const handleZoneClick = (zoneId) => {
    setSelectedZone(zoneId);
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
            <div className="zone-button">
                <text>Zone</text>
            </div>
        </div>
    );
};

export default SeatMap;