import React, { useState } from "react";
import Header from "../components/Header";
import "../css/tickets.css"
import Footer from "../components/Footer";

const Tickets = () => {
    const [currenttickets] = useState([
        {
            Zone: '1',
            EventDate: '03/03/2024',
            TicketID: '23',
            Price: '$108',
            Picture: 'https://upload.wikimedia.org/wikipedia/en/3/33/The_Eras_Tour_poster.jpg'
        },
        {
            Zone: '2',
            EventDate: '03/06/2025',
            TicketID: '623',
            Price: '$108',
            Picture: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Taylor_Swift_The_Eras_Tour_film_promotional_poster.png'
        },
    ]);//temporary hardcoded data


    return (
        <div className="tickets">
            <Header />
            <div className="row heading">
                <h3>My Tickets</h3>
            </div>
            <div className="row">
                {currenttickets.map((ticket, index) => (
                    <div className="ticket-container" key={index}>
                        <img src={ticket.Picture} style={{ width: '258px', height: '367px' }} alt="ticket" />
                        <div className="ticket-info"> {/*this is the info that will be displayed on the card when hovering*/}
                            <p>Zone: {ticket.Zone}</p>
                            <p>Event Date: {ticket.EventDate}</p>
                            <p>Ticket ID: {ticket.TicketID}</p>
                            <p>Price: {ticket.Price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />   
        </div>
    );
};

export default Tickets;
