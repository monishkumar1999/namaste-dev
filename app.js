import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header row d-flex justify-content-between border border-primary">
    <div className="logo col-sm-6">
      <img
        src="https://static.vecteezy.com/system/resources/previews/025/379/860/non_2x/food-bag-for-restaurant-delivery-service-logo-design-concept-illustration-symbol-icon-vector.jpg"
        className=""
        alt="Logo"
        width={90}
      />
    </div>

    <div className="nav_item col-sm-6 ">
      <ul className="d-flex justify-content-end list-unstyled p-4 h5">
        <li className="m-2">Home</li>
        <li className="m-2">About</li>
        <li className="m-2">Cart</li>
        <li className="m-2">Contact Us</li>
      </ul>
    </div>
  </div>
);

const Body = () => (
  <div className="body">
    <div className="search">search</div>
  </div>
);
const Appcomponent = () => {
  return (
    <div className="app">
      <Header />

      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Appcomponent />);
