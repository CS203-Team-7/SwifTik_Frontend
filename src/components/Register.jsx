import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { register } from "../services/User";

export const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    const handleSubmit = (e) => {
        // If any of the fields are empty, we will alert the user.
        if(!email || !password || !passwordConfirmation || !phoneNumber || !dateOfBirth){
            alert("Please fill all the fields");
            return;
        }
        e.preventDefault();
        if(password !== passwordConfirmation){
            alert("Passwords do not match");
            // If the passwords do not match, we empty the password and passwordConfirmation fields.
            setPassword('');
            setPasswordConfirmation('');
            return;
        }
        // Here we will call the register API endpoint and then store the token in local storage.
        register(email, password, dateOfBirth, phoneNumber)
            .then((res) => {
                console.log(res);
                // After successful registration, we will navigate the user to the OTP page.
                navigate("/otp");
            }).catch((err) => {
                if(err.response.status === 400){
                    console.log(err.response.data);
                    alert(err.response.data);
                }
            })
    }
    
    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <label htmlFor="passwordConfirmation">Password Confirmation </label>
                <input value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" placeholder="Password Confirmation" />
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} type="date" placeholder="XXXX/XX/XX" />
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder="Mobile Number" />
                <button type="submit">Register</button>
            </form>
            <button className="link-button" onClick={() => navigate("/")}>Already have an account? Login here.</button>
        </div>
    )
}