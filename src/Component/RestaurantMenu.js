import useRestMenu from "../Utils/useRestMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../Utils/constant";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu=()=>{
   // const [restMenu,setRestMenu]= useState(null);
   const [showItems, setShowItems]=useState(null);
   
    const resId= useParams();
    const restMenu = useRestMenu(resId);  // custom hooks
    
    if (restMenu == null) {
        return <Shimmer/>;
    }
    
    const{name,
        costForTwoMessage,
        avgRating,
        cuisines,locality
    }=restMenu?.cards[0]?.card?.card?.info;
    
   

    //const {itemCards}=restMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const Categories = restMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    return(
        <div>
            <div className="w-6/12 shadow-md mx-auto my-4">
                <div className=" flex justify-between">
                    <span className="font-bold">{name}</span>
                    <div className=" w-18 flex">
                        <img className="w-8"src="https://floragardenhotels.com/beach/wp-content/uploads/2019/11/yesil-yildiz.png"></img>
                        <span>{avgRating}</span>
                        <hr></hr>
                    </div>    
                </div>
                
               <p className="text-gray-500">{cuisines.join(", ")}</p>
               <p className="text-gray-500">{locality}</p>
               <div className="flex">
                <img className="w-4" src="https://cdn.vectorstock.com/i/1000x1000/37/04/food-delivery-icon-image-vector-16143704.webp"></img>
                <span className="ml-2 text-gray-500 text-base">{restMenu?.cards[0]?.card?.card?.info.feeDetails.message}</span>
               </div>
            <hr className="border border-dotted m-2 "></hr>
            
            </div >
            <div className="w-6/12 mx-auto ">
                {Categories.map((category,index)=> <RestaurantCategory 
                data ={category?.card?.card}
                showItems = {index === showItems ? true :false} 
                setShowItems= {()=> setShowItems(index)}
                />)}
           
            </div>
             
            {/**<ul>
                {itemCards.map((item) => (<li>{item.card.info.name}</li>))}
               
    </ul>**/}
        </div>
    )


}
export default RestaurantMenu;