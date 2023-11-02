import React, { useState } from "react";
import Header from "../components/Header";
import "../css/raffles.css"
import Footer from "../components/Footer";

const Raffles = () => {
    const [currentraffles] = useState([
        {
            Zone: '1',
            EventDate: '03/03/2024',
            RaffleNumber: '2',
            Status: 'Ongoing',
            Picture: 'https://upload.wikimedia.org/wikipedia/en/3/33/The_Eras_Tour_poster.jpg'
        },
        {
            Zone: '2',
            EventDate: '03/06/2025',
            RaffleNumber: '6',
            Status: 'Ongoing',
            Picture: 'https://res.klook.com/image/upload/x_0,y_32,w_420,h_588,c_crop/c_scale,w_360/v1698305850/events_admin/vedhrre7fvupnnq2m8wd.jpg'
        },
    ]);//temporary hardcoded data


    return (
        <div className="raffles">
            <Header />
            <div className="row heading">
                <h3>Current Raffles</h3>
            </div>
            <div className="row">
                {currentraffles.map((raffle, index) => (
                    <div className="raffle-container" key={index}>
                        <img src={raffle.Picture} style={{ width: '258px', height: '367px' }} alt="raffle" />
                        <div className="raffle-info"> {/*this is the info that will be displayed on the raffle card when hovering*/}
                            <p>Zone: {raffle.Zone}</p>
                            <p>Event Date: {raffle.EventDate}</p>
                            <p>Raffle Number: {raffle.RaffleNumber}</p>
                            <p>Status: {raffle.Status}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />   
        </div>
    );
};

export default Raffles;
