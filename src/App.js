import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Component/Header'
import Body from './Component/Body';
//import About from './Component/About';
import Contact from './Component/Contact';
import Error from './Component/Error';
import RestaurantMenu from './Component/RestaurantMenu';
import { createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom';
import UserContext from './Utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './Utils/appStore';
import Cart from './Component/Cart';

const AppLayout =() =>{
   return( 
   <Provider store={appStore}>
      <div>
        <Header/>
        <Outlet/>
      </div>
   </Provider>
    
    
   
       
  );
};
const Grocery = lazy(()=>import('./Component/Grocery'));
const About = lazy(()=>import('./Component/About'));

const appRouter= createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element:<Suspense fallback={<h1>Loading.....</h1>}><About/></Suspense>
      },
      {
        path :"/contact",
        element: <Contact/>
      },
      {
        path :"/restaurants/:resId",
        element: <RestaurantMenu/>
      },
      {
        path :"/grocery",
        element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>
      },
      {
        path :"/cart",
        element: <Cart/>
      },
    ],
    errorElement: <Error/>,
  },
  

])

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
