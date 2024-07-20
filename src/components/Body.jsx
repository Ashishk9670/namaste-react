import React from "react";
import { useState ,useEffect} from "react";
import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";




const Body = () => {
    const [listOfRestaurant,setListOfRestaurant] = useState([]); //state variables
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");
    const RestaurantCardPromoted =withPromotedLabel(RestaurantCard);

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
      
    const onlineStatus= useOnlineStatus();
    if(onlineStatus===false)
        return (
    <h1>Looks like you're offline!! Please check your internet connection</h1>);

    return listOfRestaurant.length === 0 ? (<Shimmer />) :  (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black mx-4" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 bg-green-300 rounded-xl"  onClick={()=>{
                        // filter the restaurant and update the UI
                       const filteredRestaurant= listOfRestaurant.filter((res)=>
                         res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4">
                  <button className="px-4 bg-blue-300 rounded-lg" onClick={() => {
                    const filteredList = listOfRestaurant.filter(
                        (res) => res.info.avgRating > 4
                    );
                    console.log(filteredList);
                    setListOfRestaurant(filteredList);
                    }}
                    >Top Rated Restaurant</button>
                </div>
                
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant) => (
                  <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}  >
                    {restaurant.info.promoted ? (<RestaurantCardPromoted resData={restaurant}/>) : 
                   ( <RestaurantCard  resData={restaurant}/>)}
                    </Link>))
                }
               
                
            </div>
        </div>
    );
};

export default Body;