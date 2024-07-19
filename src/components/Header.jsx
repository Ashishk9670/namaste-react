import React from "react";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    // let btnName = "Login";
    const [btnNameReact,setBtnNameReact] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about"> About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" 
                    onClick={()=>{
                        btnNameReact=="Login" ? setBtnNameReact("Logout"): setBtnNameReact("Login");
                    }}
                    >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;