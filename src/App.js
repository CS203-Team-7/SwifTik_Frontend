import React from 'react';
import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OtpPage from './components/Otp';
import Raffles from './pages/Raffles';
import Tickets from './pages/Tickets';
import SeatMap from './pages/SeatMap';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/raffles" element={<Raffles />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/seatmap/:id" element={<SeatMap />} />
      </Routes>
    </div>
  );
}

export default App;
