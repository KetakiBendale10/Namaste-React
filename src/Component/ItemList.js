import {CDN_URL} from "../Utils/constant";

const ItemList =({item})=>{
   
   
    return(
        <div>
            {item.map((item)=>
                <div className="m-1 my-2 border-b-2  border-b-gray-300"key={item?.card?.info?.id}>
                    <div className="flex  my-4">
                   
                        <div className="w-[30rem]"> 
                           <span className="font-semibold text-sm">{item?.card?.info.name}</span><br></br>
                           <span className="text-sm ">Rs- {item?.card?.info.price/100 || item?.card?.info.defaultPrice/100}</span>
                           <p className="text-xs text-gray-600">{item?.card?.info.description}</p>
                        </div>
                        
                        <div className=" w-28 mx-2">
                           <img className="w-28 h-20  rounded-md "src={CDN_URL + item?.card?.info?.imageId}></img>
                           <div className="bg-white border border-gray-200 w-20 text-center shadow-gray-400 rounded absolute mx-3 -mt-4"><span className="font-semibold text-green-400 ">ADD</span></div>
                           
                        </div>
                       
                    </div>
                </div>
            
            )}
         
        </div>
    )
}
export default ItemList;
