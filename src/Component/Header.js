import { useState } from "react";
import { LOGO_URL } from "../Utils/constant";


const Header =() =>{
    const [loginbtn,setloginbtn]= useState("Login");
    return (
     <div className='header'>
      <img className='logo-img' alt='logo'src ={LOGO_URL}/>
      <ul className='nav-items'>
         <li>Home</li>
         <li>AboutUs</li>
         <li>Cart</li>
         <button className="login-btn" onClick={()=>{
            loginbtn==="Login" ? setloginbtn("LogOut"):setloginbtn("Login") ;
         }}> {loginbtn}</button>
     </ul>
     </div> )
 };

export default Header;