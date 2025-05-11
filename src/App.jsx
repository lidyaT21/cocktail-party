import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import CardList from "./components/CardList";
import DrinkDetails from "./pages/DrinkDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FavoriteList from "./components/FavoriteList";

import useOnline from "./hooks/useOnline";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import UserOffline from "./components/UseOffline";
import CocktailSearch from "./components/CoktailSearch";

const App = () => {
  const [favoritelist, setFavoriteList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const isOnline = useOnline();
  if (isOnline === false) return <UserOffline />;

  const addToFavoriteList = (cocktail) => {
    setFavoriteList((prevFavoritelist) => [...prevFavoritelist, cocktail]);
  };

  const removeFavoriteList = (cocktailId) => {
    setFavoriteList((prevFavoritelist) =>
      prevFavoritelist.filter((cocktail) => cocktail.idDrink !== cocktailId)
    );
  };

  // Set search results and navigate to search results page
  const handleSearchResults = (results) => {
    setSearchResults(results);
    navigate("/search-results");
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <CardList category="all" addToFavoriteList={addToFavoriteList} />
          }
        />

        <Route path="/cocktail/:id" element={<DrinkDetails />} />
        <Route path="/search-results/:text" element={<CocktailSearch />} />

        <Route
          path="/favoritelist"
          element={
            <FavoriteList
              favoritelist={favoritelist}
              onRemoveFromFavoriteList={removeFavoriteList}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
