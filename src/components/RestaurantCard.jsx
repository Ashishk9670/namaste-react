import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../utils/constant";


const RestaurantCard = (props) => {
    const {resData}=props;
    const {
        cloudinaryImageId,
         name,
         cuisines,
         avgRating,
         sla,
    } = resData?.info;
    
    return (
        <div className="m-4 p-4 w-[250px] h-[450px] rounded-lg bg-orange-400 hover:bg-yellow-300">
            <img className="rounded-lg h-60" alt="res-logo" src=
                {CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold py-5 text-lg text-center">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            {<h4>{sla.slaString}</h4> }

        </div>
    )
}

export default RestaurantCard;