import React from 'react'
import '../css/poster.css'

const EventCard = ({key, event, counter}) => {
    return (
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
    )
}

export default EventCard;