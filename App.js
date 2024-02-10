import React from 'react'
import ReactDOM from 'react-dom/client'
    
// const jsxheading = <h1 id='heading' className='head'>Namaste React with JSX</h1> //simple jsx program
        
    // console.log(heading);
const Title =()=> <h1>Welcome to React series</h1>

const HeadingComponent =() => (
    <div id="container">
        <Title/>
        <h1>This is react functional component</h1>
    </div>
)
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    //root.render(jsxheading);//rendering normal react code
    root.render(<HeadingComponent/>)