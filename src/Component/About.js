import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);

        console.log("parent constructor");
    }
    
    componentDidMount(){
        console.log("Parent component did mount");
    }

    render(){
        console.log("Parent Render")
        return(

           
            <div>
                <h1>
                    About
                </h1>
                <h2>We are expert in food delivery </h2>
               
                <UserClass name = "Ketaki Borole" location= "pune"/>
                <UserClass name = "Ketaki Borole" location= "pune"/>
                
            </div>
        )
    
    }
}



export default About;