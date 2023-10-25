import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);

// Adding a request axios interceptor to add the token to the request:
axios.interceptors.request.use((request) => {
    return request;
}, (error) => {
    return Promise.reject(error);
});

// Adding a response axios interceptor for JWT token refresh:
axios.interceptors.response.use(
    (response) => {
        // Check the auth header for the JWT token:
        if(response.headers.authorization !== undefined){
            localStorage.setItem('token', response.headers.authorization);
        }
        return response;
}, (error) => {
    // If we have a 401 error response - we send the user to the login page:
    if(error.response?.status === 401){
        localStorage.removeItem('token');
        if(!window.location.href.includes('/')){
            window.location.href = '/';
        }
    }
    return Promise.reject(error);
})