import { LOGO_URL } from "../utill/constant.js";
import { useState } from "react";
import useOnlinestatus from "../utill/useOnlinestatus.js";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnName, btnchange] = useState("login");

  const onlineStats = useOnlinestatus();

  return (
    <div className="header row d-flex justify-content-between border border-primary">
      <div className="logo col-sm-6">
        <img src={LOGO_URL} alt="Logo" width={90} />
      </div>

      <div className="nav_item col-sm-6">
        <ul className="d-flex justify-content-end list-unstyled p-4 h5">
          <li>{onlineStats?"online":"offline"}</li>
          <li className="m-2"><Link to={"/"}>Home</Link> </li>
          <li className="m-2"><Link to={"/about"}>About</Link> </li>
          <li className="m-2">Cart</li>
          <li className="m-2">
            <Link to={"/contact"}> Contact us</Link>
          </li>

          <button
            className="btn btn-primary"
            onClick={() => {
              btnName == "login" ? btnchange("logout") : btnchange("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
