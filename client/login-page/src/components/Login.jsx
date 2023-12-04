import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response =await axios.post('http://192.168.1.145:5001/v1/login', {
                emailId: email,
                password,
            });

            if (response.status === 200) {
                window.location.href =`/table`
            }else{
                // give a alert as invalid credentials
                alert('Invalid credentials')
            }


        } catch (error) {
            // Handle errors, show an error message, etc.
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input
                        type="email"
                        placeholder="Email Id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="forgot-password">
                <Link to="/lostpassword">Lost Password<span> Click Here!</span></Link>
                <Link to="/signup">New User<span> Sign Up</span></Link>
            </div>
            <div className="submit-container">
                <div className="submit" onClick={handleLogin}>
                    Login
                </div>
            </div>
        </div>
    );
}

export default Login;
