import React from "react";
import ReactDOM from "react-dom/client";
import { useState ,useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";




const Body = () => {
    const [listOfRestaurant,setListOfRestaurant] = useState([]); //state variables
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
        const data =await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.49690&lng=80.32460&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        // optional chaining
        // console.log(json);
        setListOfRestaurant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
      
    return listOfRestaurant.length === 0 ? (<Shimmer />) :  (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-btn" onClick={()=>{
                        // filter the restaurant and update the UI
                       const filteredRestaurant= listOfRestaurant.filter((res)=>
                         res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
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
                    filteredRestaurant.map((restaurant) => (
                  <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}  >
                    <RestaurantCard  resData={restaurant}/>
                    </Link>))
                }
               
                
            </div>
        </div>
    );
};

export default Body;