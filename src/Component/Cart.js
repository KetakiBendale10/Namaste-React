import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";


const Cart =()=>{
    const cartItems= useSelector((store)=>store.cart.items)
    
    console.log(cartItems,"cart");
    
    const dispatch= useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }

return (
    <div className="w-6/12 m-4 p-4 text-center">
        <h1>Cart Items</h1>
        <button className="m-2 p-2 bg-black rounded text-center text-white"onClick={handleClearCart}>Clear Cart</button>
        <h1>{cartItems?.[0]?.[1]?.card?.info?.name}</h1>
        <div>
           <ul>
            <li>
            { cartItems.map((item)=>item?.card?.card?.info.name)}
            </li>
            </ul>
        </div>
    </div>
)
}

export default Cart;