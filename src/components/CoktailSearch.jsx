import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Loading from "./Loading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CocktailSearch = () => {
  const { text } = useParams();
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);

  const searchTerm = text || "a";

  const addToFavoriteList = (cocktail) => {
    setFavoriteList((prevList) => [...prevList, cocktail]);
    toast.success("Added to favorite list", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      className: "custom-toast",
    });
  };

  useEffect(() => {
    const fetchCocktails = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await res.json();

        if (data.drinks) {
          setCocktails(data.drinks);
          setError(null);
        } else {
          setCocktails([]);
          setError("No cocktails found.");
        }
      } catch (err) {
        setError("Error fetching cocktails.");
      } finally {
        setLoading(false);
      }
    };

    fetchCocktails();
  }, [searchTerm]);

  return (
    <>
      <Header />

      {loading && <Loading />}
      {error && <p>{error}</p>}
      <div className="cocktail-cards">
        {cocktails.length > 0 ? (
          cocktails.map((cocktail) => (
            <Card
              key={cocktail.idDrink}
              drink={cocktail}
              addToFavoriteList={addToFavoriteList}
            />
          ))
        ) : (
          <h2>No cocktails found for "{text}"</h2>
        )}
      </div>

      <Footer />
    </>
  );
};

export default CocktailSearch;
