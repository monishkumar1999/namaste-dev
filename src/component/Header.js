import { LOGO_URL } from "../utill/constant.js";
import { useState } from "react";
import useOnlinestatus from "../utill/useOnlinestatus.js";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnName, btnchange] = useState("login");

  const onlineStats = useOnlinestatus();

  return (
    <div className="flex justify-between bg-pink-300 shadow">
      <div>
        <img className="w-20" src={LOGO_URL} alt="Logo"  />
      </div>

      <div className="flex items-center">
        
        <ul className="flex">
          <li className="px-4"><span>{onlineStats ? "online" : "offline"}</span></li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/contact">Contact us</Link></li>
          <li className="px-4"><Link to="/grocey">Grocery</Link></li>
          <li className="px-4">  <button
          onClick={() => {
            btnName === "login" ? btnchange("logout") : btnchange("login");
          }}
        >
          {btnName}
        </button></li>
        </ul>
      
      </div>
    </div>
  );
};

export default Header;
