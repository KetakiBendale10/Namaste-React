import { CDN_URL } from "../Utils/constant";
import { useState } from "react";

const RestaurantCard =(props)=>{
    const{resData}= props;
return(
      <div className='res-card'>
            <img  className="res-img"src={CDN_URL+ resData.info.cloudinaryImageId}></img>
            <h4>{resData.info.name}</h4>
            <h5>{resData.info.cuisines.join(', ')}</h5>
            <h5>{resData.info.costForTwo}</h5>
            <h5>{resData.info.avgRating}</h5>
            <h5>{resData.info.sla.deliveryTime} Mins</h5>
      </div>)
}
export default RestaurantCard;