import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import logo from "../assets/cocktail-drink.svg";
import SearchForm from "./SearchForm";

const Header = ({ handleSearchResults }) => {
  const isOnline = useOnline();

  return (
    <header className="header">
      <img className="logo" src={logo} alt="cocktail" title="cocktail" />
      <h1 className="logo-title">Drink Haven</h1>
      <SearchForm onSearch={handleSearchResults} />

      <nav>
        <ul className="nav">
          <li>
            <span
              className={`login-status-dot ${
                isOnline ? "login-btn-green" : "login-btn-red"
              }`}
              title={isOnline ? "Online" : "Offline"}
            >
              ●
            </span>

            <span nav-link>{isOnline ? "Online" : "Offline"}</span>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/favoritelist">
              FavoriteList
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
