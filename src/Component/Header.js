import { useContext, useState } from "react";
import { LOGO_URL } from "../Utils/constant";
import { Link} from "react-router-dom";
import useOnline from "../Utils/useOnline";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";


const Header =() =>{
    const [loginbtn,setloginbtn]= useState("Login");
    const onlineStatus= useOnline();
    const {loggedInUser} = useContext(UserContext);
const cartItems= useSelector((store)=>store.cart.items)


    return (
     <div className='flex justify-between bg-white shadow-lg z-10'>
      <img className='w-24' alt='logo'src ={LOGO_URL}/>
        <div className="flex items-center">
                <ul className='flex p-4 m-4'>
                    <li className="px-4">online :{onlineStatus ? "🟢 ": "🔴"}</li>
                <li className="px-4"><Link to="/"> Home</Link></li>
                <li className="px-4"><Link to="/about"> AboutUs</Link></li>
                <li className="px-4"><Link to="/contact"> ContactUs</Link></li>
                <li className="px-4"><Link to="/grocery"> Grocery</Link></li>
                <li className="px-4"><Link to="/cart">Cart({cartItems.length})</Link></li>
                <button className="px-4 bg-green-600 rounded" onClick={()=>{
                    loginbtn==="Login" ? setloginbtn("LogOut"):setloginbtn("Login") ;
                }}> {loginbtn}</button>
                <li className="px-4"> {loggedInUser}</li>
                </ul>
        </div>

     </div> )
 };

export default Header;