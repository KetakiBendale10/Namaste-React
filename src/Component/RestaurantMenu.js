import useRestMenu from "../Utils/useRestMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../Utils/constant";

const RestaurantMenu=()=>{
   // const [restMenu,setRestMenu]= useState(null);
    const resId= useParams();
    const restMenu = useRestMenu(resId);  // custom hooks
    if (restMenu == null) {
        return <Shimmer/>;
    }

    const {
        name,
        costForTwoMessage,
        avgRating,
        cuisines}=restMenu?.cards[2]?.card?.card?.info;

    const {itemCards}=restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    
    return(
        <div>
            <h1>{name}</h1>
            <h3>{costForTwoMessage}- Avg Rating:{avgRating}</h3>
            <h6>{cuisines}</h6>
            <ul>
                {itemCards.map((item) => (<li>{item.card.info.name}</li>))}
               
            </ul>
        </div>
    )


}
export default RestaurantMenu;