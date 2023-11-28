import React, { useState } from "react";
import '../styles/Login.css';
import { Link } from "react";
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
        <div className="forgot-password">{/*<Link to="/lostpassword">*/}Lost Password<span> Click Here!</span>{/*</Link>
                <Link to="/signup">*/} New User<span> Sign Up</span>{/*</Link>*/}</div>
        <div className="submit-container">
            <div className="submit">Login</div>
        </div>
        </div>
    )
}

export default Login;