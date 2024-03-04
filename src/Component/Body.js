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
      <div className='bg-gray-50'>
         <div className="p-4 mx-[92px]">
            <input className="border border-solid border-black rounded" type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
            <button className="rounded bg-blue-500 px-4 m-4 py-1"onClick={()=>{
               const filteredList= listOfRest.filter((res)=>
               res.info.name.toLowerCase().includes(searchText.toLowerCase()));

               setFilteredList(filteredList);
            }}>Search</button>
            
            <button className="rounded px-4 py-1 bg-gray-100" onClick={filterTopRated}>Top Rated Restaurants</button>
            {/*<input type="text" placeholder="search" onChange={Search} value={currentSearch}></input>*/}
         </div>
          <div className='flex flex-wrap justify-center'>
            {filteredList.map((restaurant)=> <Link  key="restaurant.info.id"to={"/restaurants/" + restaurant.info.id}>

               
               <RestaurantCard resData={restaurant}/></Link>)}
         </div>
      </div>
   );
};
export default Body;