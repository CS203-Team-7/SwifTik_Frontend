import React from 'react'
import '../css/poster.css'
import { Link } from 'react-router-dom';

const EventCard = ({event, counter}) => {
    return (
        <div>
            <Link to={`/seatmap/${counter}`}>
                <div className='box'>
                    {counter % 2 === 0 || counter === 0 ? 
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