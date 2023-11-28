// src/components/Signup.jsx
import React, { useState } from "react";
import '../styles/Login.css';

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const Signup = () => {
    return(
        <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt=""/>
                <input type="text" placeholder="Name"/>
            </div>
            <div className="input">
                <img src={email_icon} alt=""/>
                <input type="email" placeholder="Email Id"/>
            </div>
            <div className="input">
                <img src={password_icon} alt=""/>
                <input type="password" placeholder="Password"/>
            </div>
        </div>
            <div className="forgot-password">{/*<Link to="/Login">*/}Already have a account!<span> Login</span>{/*</Link>*/}
        <div className="submit-container">
            <div className="submit">Sign Up</div>
        </div>
        </div>
    )
}

export default Signup;
