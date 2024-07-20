import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {
   
    // const [resInfo,setResInfo]=useState(null);

    const {resId} =useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex,setShowIndex]= useState(null);

   if (resInfo === null) return  <Shimmer />;

   const { name,cuisines,
            costForTwoMessage
        }   = resInfo?.cards[2]?.card?.card?.info;
   
    
    const { itemCards } =
     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"]===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return  (
        <div className="text-center">
            <h1 className="font-bold my-5 text-lg"> {name}</h1>
            <p>
                <h2 className="font-bold">{cuisines.join(", ")} - {costForTwoMessage}</h2>
                
            </p>
           
           {/* {categories accordion} */}
           {categories.map((category,index) => 
        //    controlled component
           <RestaurantCategory 
           key= {category?.card?.card.title} 
           showItems={ index === showIndex ? true: false}
          setShowIndex={() => setShowIndex(index)}
          data={category?.card?.card}
          />
          )}

        </div>
    );
};

export default RestaurantMenu;