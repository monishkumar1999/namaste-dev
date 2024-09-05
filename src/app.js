
import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./component/Header";
import Body from "./component/Body";
 
const AppComponent = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);