import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name: "Dummy",
                location : "Pune",
            }  
        }
        //console.log("child constructor");
    }


    async componentDidMount(){
        //console.log("child component did mount");
        const Data = await fetch("https://api.github.com/users/ketakiborole");
        const json = await Data.json();
        console.log(json);
        
    this.setState({
        userInfo : json,
    });
    }
   
    render(){
        //console.log("child render")
        return(
            
            <div className="About-card">
                <h1>Class Component</h1>
            <h2>Name : {this.state.userInfo.name}</h2>
           
            <h2>Location :{this.state.userInfo.location} </h2>
            <h3>Email: ketakiborole10@gmail.com</h3>
        </div>
        )
    }
}
export default UserClass;