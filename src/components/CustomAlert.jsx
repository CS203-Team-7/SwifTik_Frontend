import React from "react";

const CustomAlert = ({ zone, onClose }) => {
    return (
        <div className="custom-alert-overlay">
            <div className="custom-alert">
                <h2>You selected:</h2>
                <p><strong>Zone:</strong> {zone.Zone}</p>
                <p><strong>Price:</strong> {zone.Price}</p>
                <br></br>
                <br></br>
                <text>Proceed?</text>
                <br></br>
                <div className="button-container">
                    <button onClick={onClose} className="proceed-button">Proceed</button> {/*We need to add a handleProceedAlert in SeatMap.jsx for when we click the proceed button*/}
                    <button onClick={onClose} className="close-button">Close</button>
                </div>
            </div>
        </div>
    );
};

export default CustomAlert;
