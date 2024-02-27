import { useState } from "react";
const User = (Props)=>{
    const [count,setCount]= useState(0);
    
    return(
        <div className="About-card">
            <h1>Function Component </h1>
            <h2>Name : {Props.name}</h2>
            <h2>Count : {count}</h2>
            <button onClick={()=>{
                setCount(count+1);
            }}>Count Increase</button>
            <h2>Location : {Props.location} </h2>
            <h3>Email: ketakiborole10@gmail.com</h3>
        </div>
    )
};
export default User;