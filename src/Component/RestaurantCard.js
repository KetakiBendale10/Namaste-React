import { CDN_URL } from "../Utils/constant";
import { useState } from "react";


const RestaurantCard =(props)=>{
    const{resData}= props;
return(
      <div className='mx-6 w-52 h-96 hover:scale-105'>
            <img  className="rounded-lg w-52 h-52"src={CDN_URL+ resData.info.cloudinaryImageId}></img>
            <h4 className="font-bold text-lg overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[200px]">{resData.info.name}</h4>
            <div className="flex flex-wrap justify-between">
                  <h5 className="font-bold">{resData.info.avgRating}</h5>        
                  <h5 className="font-bold">{resData.info.sla.deliveryTime} Mins</h5>
            </div>
            <p className="to-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[200px] text-sm ">{resData.info.cuisines.join(', ')}</p>
            <p className="text-sm to-black text-right">{resData.info.costForTwo}</p>
           
      </div>);
}


// const OfferHighlighted =(RestaurantCard)=>{
//       return <div>
//             <label>Offer are there</label>
//             <RestaurantCard resData={restaurant}/>
//       </div>
// }
export default RestaurantCard;