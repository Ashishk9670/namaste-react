import React from "react";
import { LOGO_URL } from "../utils/constant";
import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    // let btnName = "Login";
    const [btnNameReact,setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    // suscribing to store using selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between bg-pink-200 shadow-md mb-5 p-5">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                       Online Status :{onlineStatus? "✅" :"🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about"> About us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to= "/cart"> Cart({cartItems.length} items)</Link>
                    </li>
                    <button className="login-btn" 
                    onClick={()=>{
                        btnNameReact=="Login" ? setBtnNameReact("Logout"): setBtnNameReact("Login");
                    }}
                    >{btnNameReact}</button>
                    <li className="font-bold px-4"> {loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;