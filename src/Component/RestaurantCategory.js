import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory =({data, showItems,setShowItems})=>{
    //const [showItem, setShowItem]= useState(false);
    const handleClick=()=>{
        setShowItems();    
    }
    
    return(
        <div className="px-4 my-3 shadow-md shadow-gray-200 " >
            <div className="h-14 flex justify-between cursor-pointer" onClick={handleClick} >
                <span className="mx-1 font-semibold">{data?.title}({data?.itemCards?.length})</span>
                <span>⬇️</span>
            </div>
            
               
           {showItems && <ItemList item={data?.itemCards}/>}
      
        </div>
    )

}
export default RestaurantCategory;