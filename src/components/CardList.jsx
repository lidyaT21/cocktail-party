import { useState, useEffect } from "react";
import Card from "./Card";
import Loading from "./Loading";

const CardList = ({ addToFavoriteList }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  useEffect(() => {
    const fetchCocktails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}A`);
        const data = await response.json();
        setCocktails(data.drinks || []);
      } catch (error) {
        console.error("Error fetching cocktails:", error);
        setCocktails([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCocktails();
  }, []);

  if (loading) return <Loading />;

  if (cocktails.length === 0) {
    return <h2 className="section-title">No cocktails matched your search</h2>;
  }

  return (
    <div className="cocktail-list">
      <div className="cocktail-cards">
        {cocktails.map((drink) => (
          <Card
            key={drink.idDrink}
            drink={drink}
            addToFavoriteList={addToFavoriteList}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
