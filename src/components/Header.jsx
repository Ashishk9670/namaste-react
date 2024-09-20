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
        <div className="flex justify-between bg-green-400 shadow-md mb-2 p-5">
            <div className="logo-container">
            <Link to="/"><img className="w-[100px]" src={LOGO_URL}/></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-2 ">
                    <li className="px-4">
                       Online Status :{onlineStatus? "✅" :"🔴"}
                    </li>
                    <li className="px-4 font-bold text-gray-300 hover:bg-gray-700 hover:text-white">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 font-bold rounded-2xl hover:bg-orange-400">
                        <Link to="/about"> About us</Link>
                    </li>
                    <li className="px-4  font-bold rounded-2xl hover:bg-orange-400">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="px-4  font-bold rounded-2xl hover:bg-orange-400">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 rounded-2xl hover:bg-orange-400 font-bold">
                        <Link to= "/cart"> 🛒({cartItems.length} items)</Link>
                    </li>
                    <button className="login-btn  rounded-2xl hover:bg-orange-400" 
                    onClick={()=>{
                        btnNameReact=="Login" ? setBtnNameReact("Logout"): setBtnNameReact("Login");
                    }}
                    >{btnNameReact}</button>
                    <li className="font-bold px-4  rounded-2xl hover:bg-orange-400"> {loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;