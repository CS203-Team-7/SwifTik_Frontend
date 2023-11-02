import React, { useState } from "react";
import Header from "../components/Header";

const SeatMap = () => {
    const [availableZones] = useState([
        {
            Zone: 'Alpha',
            Price: '$200'
        },
        {
            Zone: 'Bravo',
            Price: '$100'
        },
        {
            Zone: 'Charlie',
            Price: '$50'
        },
    ]);//temporary hardcoded data

    const handleZoneButtonClick = (zone) => {
        // Define what happens when the button is clicked here
        alert(`Zone button clicked for ${zone.Zone}`);
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
            <div className="zone-buttons">
                {availableZones.map((zone, index) => (
                    <button
                        key={index}
                        className="zone-button"
                        onClick={() => handleZoneButtonClick(zone)}
                    >
                        <span className="zone-name">{zone.Zone}</span>
                        <br></br><span className="price">{zone.Price}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SeatMap;