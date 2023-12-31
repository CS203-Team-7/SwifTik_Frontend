import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { login } from "../services/User";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password).then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            navigate("/home");
        }).catch((err) => {
            if(err.response.status === 401){
                console.log(err.response.data);
                alert(err.response.data);
            }
        })
    }

    return (
        <div className="auth-form-container">
            <h1>SwifTik</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <button className="link-button" onClick={() => navigate("/Register")}>Dont have an account? Register here.</button>
        </div>

    )
}