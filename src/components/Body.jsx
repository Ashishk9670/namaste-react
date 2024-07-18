import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    const [listOfRestaurant,setListOfRestaurant] = useState(resList); //state variables
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter(
                        (res) => res.info.avgRating > 4
                    );
                    console.log(filteredList);
                    setListOfRestaurant(filteredList);
                    }}
                    >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
                }
               
                
            </div>
        </div>
    )
}

export default Body;