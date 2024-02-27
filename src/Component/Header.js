import { useState } from "react";
import { LOGO_URL } from "../Utils/constant";
import { Link} from "react-router-dom";
import useOnline from "../Utils/useOnline";


const Header =() =>{
    const [loginbtn,setloginbtn]= useState("Login");
    const onlineStatus= useOnline();
    return (
     <div className='header'>
      <img className='logo-img' alt='logo'src ={LOGO_URL}/>
      <ul className='nav-items'>
        <li>online :{onlineStatus ? "🟢 ": "🔴"}</li>
         <li><Link to="/"> Home</Link></li>
         <li><Link to="/about"> AboutUs</Link></li>
         <li><Link to="/contact"> ContactUs</Link></li>
         <li>Cart</li>
         <button className="login-btn" onClick={()=>{
            loginbtn==="Login" ? setloginbtn("LogOut"):setloginbtn("Login") ;
         }}> {loginbtn}</button>
     </ul>
     </div> )
 };

export default Header;