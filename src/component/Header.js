import { LOGO_URL } from "../utill/constant.js";

export const Header = () => (
    <div className="header row d-flex justify-content-between border border-primary">
      <div className="logo col-sm-6">
        <img
          src={LOGO_URL}
          alt="Logo"
          width={90}
        />
      </div>
  
      <div className="nav_item col-sm-6">
        <ul className="d-flex justify-content-end list-unstyled p-4 h5">
          <li className="m-2">Home</li>
          <li className="m-2">About</li>
          <li className="m-2">Cart</li>
          <li className="m-2">Contact Us</li>
        </ul>
      </div>
    </div>
  );

  export default Header;