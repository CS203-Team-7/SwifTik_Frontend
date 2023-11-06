import React from 'react'
import '../css/landing.css'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className='landing-page'>
            <h1 className='big-header'>SwifTik</h1>
            <Link to={`/login`}>
                <button className='button-6'>Login</button>
            </Link>
            <Link to={`/register`}>
                <button className='button-6'>Sign-up</button>
            </Link>
        </div>
    )
}

export default Landing;