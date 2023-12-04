import React, { useState } from "react";
import '../styles/Login.css';
import { Link } from "react-router-dom";
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const Login = () => {
    return(
        <div className="container">
        <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={email_icon} alt=""/>
                <input type="email" placeholder="Email Id"/>
            </div>
            <div className="input">
                <img src={password_icon} alt=""/>
                <input type="password" placeholder="Password"/>
            </div>
        </div>
        <div className="forgot-password">
                 New User <Link to="/signup"><span>SignUp</span></Link></div>
        <div className="submit-container">
            <div className="submit">Login</div>
        </div>
        </div>
    )
}

export default Login;