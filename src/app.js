import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
const AppComponent = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement:<Error />
  },
  {
    path: "/about",
    element:<About />
  },
  {
    path:"/contact",
    element:<Contact />
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
