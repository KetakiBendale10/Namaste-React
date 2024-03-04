import { useEffect, useState } from "react"
import { MENU_URL} from "./constant";

const useRestMenu =(resId)=>{
 const[restMenu, setRestMenu]= useState(null);

    useEffect(()=>{
      fetchRest();
    },[]);

const fetchRest=async ()=>{
    const data = await fetch(`${MENU_URL}${resId.resId}`);
    const json = await data.json();
    setRestMenu(json.data);
    //console.log("jsondata from userestmenu",json.data);
    
 }
 return restMenu;
}

export default useRestMenu;