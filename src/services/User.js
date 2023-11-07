import axios from "axios";
import jwtDecode from "jwt-decode";

// Let's create the API call to login the user
// Remember to store the token in the local storage when using the login API call
export const login = async (email, password) => {
        return await axios.post("http://localhost:8080/auth/signin", {
            email,
            password
        });

}

// Let's create the API call to register the user
export const register = async (email, password, dateOfBirth, phoneNumber) => {
        return await axios.post("http://localhost:8080/auth/signup", {
            email,
            password,
            dateOfBirth,
            phoneNumber
        });
}


// Let's create the API call to do the OTP verification
export const verifyOTP = async (email, otpNumber) => {
        return await axios.post("http://localhost:8080/otp/validate", {
            email,
            otpNumber
        }); 
}

// To extract the role from the token:
export const getRole = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    const decodedToken = jwtDecode(token);
    return decodedToken.role;
};