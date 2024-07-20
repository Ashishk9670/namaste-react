import React ,{ lazy,Suspense,useState,useEffect }from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import UserContext from "./utils/UserContext.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.jsx";
import Cart from "./components/Cart.jsx";
// import Grocery from "./components/Grocery.jsx";

const Grocery = lazy( () => import("./components/Grocery"));

const AppLayout =() => {

    const [userName,setUserName] = useState();
    useEffect(() => {
        const data={
            name:"Ashish",
        };
        setUserName(data.name);
    },[]);

    return (
        <Provider store = {appStore} >
            <UserContext.Provider value={{loggedInUser: userName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

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

            },
            {
                path:"/cart",
                element: <Cart />,

            },

        ],
        errorElement: <Error />,
        
    },
    

]);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);