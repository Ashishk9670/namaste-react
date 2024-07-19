import React ,{lazy,Suspense }from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
// import Grocery from "./components/Grocery.jsx";

const Grocery = lazy( () => import("./components/Grocery"));

const AppLayout =() => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
           
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children: [
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/contact",
                element: <Contact />,
            },
            {
                path:"/grocery",
                element:<Suspense fallback ={<h1>Loading...</h1>} ><Grocery /></Suspense> ,
            },
            {
                path:"/restaurant/:resId",
                element: <RestaurantMenu />,

            }
        ],
        errorElement: <Error />,
        
    },
    

]);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);