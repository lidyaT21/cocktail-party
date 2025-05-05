import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const Header = ({ isOnline }) => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://www.pikpng.com/pngl/b/31-319914_cocktail-logo-png-cocktails-sign-png-clipart.png"
        alt="Food Fire"
        title="Food Fire"
      />
      <SearchForm />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <span
              className={isOnline ? "login-btn-green" : "login-btn-red"}
              title={isOnline ? "Online" : "Offline"}
              style={{ fontSize: "1.5rem" }}
            >
              ●
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
