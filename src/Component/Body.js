import RestaurantCard from "./RestaurantCard";
//import resList from "../Utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link} from "react-router-dom";

  

const Body = () =>{
   const [listOfRest,setListOfRest] = useState([])
   const [filteredList,setFilteredList] = useState([])

   

   useEffect(()=>{
      fetchData();
   },[]);
   const [searchText,setSearchText]= useState("")

   
   const filterTopRated = (event) => {
      const topRatedRes = listOfRest.filter(rest => rest.info.avgRating >= 4);
      setListOfRest(topRatedRes);
   };
   const fetchData = async() =>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");   //we can use corsproxy for avoiding cors plugin in chrome
      const json = await data.json();
      //console.log(json);

      setListOfRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
   }
  

   return listOfRest.length === 0 ? (<Shimmer/>):  (
      <div className='body-container'>
         <div className="Filter">
            <input className="search" type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
            <button onClick={()=>{
               const filteredList= listOfRest.filter((res)=>
               res.info.name.toLowerCase().includes(searchText.toLowerCase()));

               setFilteredList(filteredList);
            }}>Search</button>
            
            <button className="filter-btn" onClick={filterTopRated}>Top Rated</button>
            {/*<input type="text" placeholder="search" onChange={Search} value={currentSearch}></input>*/}
         </div>
          <div className='restaurantcard'>
            {filteredList.map((restaurant)=> <Link  key="restaurant.info.id"to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>)}
         </div>
      </div>
   );
};
export default Body;