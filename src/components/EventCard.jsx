import React from 'react'
import '../css/poster.css'
import { Link } from 'react-router-dom';

const EventCard = ({key, event, counter}) => {
    return (
        <div>
            <Link to="/seatmap">
                <div className='box'>
                    {counter % 2 === 0 || key === 0 ? 
                        <>
                        <div className='poster'></div>
                        </>  
                        :
                        <>
                        <div className='poster-2'></div>
                        </>  
                    }
                    <h1 className='name'>{counter}. {event.eventName} - {event.venue}</h1>
                </div>
            </Link>
        </div>
    )
}

export default EventCard;