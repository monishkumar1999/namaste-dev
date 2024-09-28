import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaruntMenu from "./component/RestaruntMenu";
import Current from "./component/Current";
import usercontext from "./utill/Context";
import { Provider } from "react-redux";
import store from "./utill/store";
import CartDetails from "./component/CartDetails";

const Grocery = lazy(() => import("./component/Grocery"));


const AppComponent = () =>{
  const[username,setUsername]= useState("monish")

  return(
  <Provider store={store }>
  <usercontext.Provider value={{ loggedInuser:username,setUsername}}>  
  {/* the whole context is elon musk*/}
    <div className="app">
      
        {/* the header is monish */}
        <Header />
    
     
    </div>
    <Outlet />
  </usercontext.Provider>
  </Provider>
);
}
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resmenu/:resid",
        element: <RestaruntMenu />,
        errorElement: <Current />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path:"cart",
        element:<CartDetails/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
