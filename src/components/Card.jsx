import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import plusIcon from "../assets/icon-plus.svg";

const Card = ({ drink, addToFavoriteList }) => {
  const onClick = (e) => {
    e.preventDefault();
    addToFavoriteList(drink);
    toast.success("Added to favoriteList", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      className: "custom-toast",
    });
  };

  return (
    <div className="cocktail-card">
      {drink?.idDrink ? (
        <Link to={`/cocktail/${drink.idDrink}`} className="cocktail-card-link">
          <div className="cocktail-info">
            <img
              className="cocktail-image"
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
            />
            <div className="cocktail-info-text">
              <p className="cocktail-title">{drink.strDrink}</p>
              <p>Category: {drink.strCategory}</p>
              <p>Alcoholic: {drink.strAlcoholic}</p>
            </div>
          </div>
        </Link>
      ) : (
        <p>Invalid Cocktail</p>
      )}
      <img
        className="add-to-watchlist"
        src={plusIcon}
        alt="add icon"
        onClick={onClick}
      />
    </div>
  );
};

export default Card;
