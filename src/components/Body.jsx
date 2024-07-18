import React from "react";
import ReactDOM from "react-dom/client";
import { useState ,useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";




const Body = () => {
    const [listOfRestaurant,setListOfRestaurant] = useState([]); //state variables

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
    };
      
    return listOfRestaurant.length == 0 ? <Shimmer/> :  (
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

// const url = 'https://http-cors-proxy.p.rapidapi.com/';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'x-rapidapi-key': 'Sign Up for Key',
// 		'x-rapidapi-host': 'http-cors-proxy.p.rapidapi.com',
// 		'Content-Type': 'application/json',
// 		Origin: 'www.example.com',
// 		'X-Requested-With': 'www.example.com'
// 	},
// 	body: {
// 		url: 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.49690&lng=80.32460&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }