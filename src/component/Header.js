import { LOGO_URL } from "../utill/constant.js";
import { useState, useContext } from "react";
import useOnlinestatus from "../utill/useOnlinestatus.js";
import { Link } from "react-router-dom";
import usercontext from "../utill/Context"; 

export const Header = () => {
  const [btnName, btnchange] = useState("login");
  const onlineStats = useOnlinestatus();
  
  const { loggedInuser } = useContext(usercontext); // Get loggedInuser from context

  return (
    <div className="flex justify-between bg-pink-300 shadow">
      <div>
        <img className="w-20" src={LOGO_URL} alt="Logo" />
      </div>

      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4"><span>{onlineStats ? "online" : "offline"}</span></li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/contact">Contact us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">
            <button onClick={() => {
              btnName === "login" ? btnchange("logout") : btnchange("login");
            }}>
              {btnName}
            </button>
          </li>
          <li className="px-4"><span>{loggedInuser}</span></li> {/* Display the logged-in user */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
