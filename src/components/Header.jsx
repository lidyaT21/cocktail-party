import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import useOnline from "../hooks/useOnline";

const Header = () => {
  const isOnline = useOnline();

  return (
    <header className="header">
      <img
        className="logo"
        src="https://www.pikpng.com/pngl/b/31-319914_cocktail-logo-png-cocktails-sign-png-clipart.png"
        alt="Food Fire"
        title="Food Fire"
      />

      <SearchForm />

      <nav className="nav-items">
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
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
      </nav>
    </header>
  );
};

export default Header;
