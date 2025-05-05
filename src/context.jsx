import React, { useState, useContext, useEffect, useCallback } from "react";

// API URL
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

// Create Context
const AppContext = React.createContext();

// AppProvider component that provides state and actions
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  // Fetch drinks based on searchTerm
  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      console.log(drinks);
      setCocktails(
        drinks
          ? drinks.map(
              ({
                idDrink,
                strDrink,
                strDrinkThumb,
                strAlcoholic,
                strGlass,
              }) => ({
                id: idDrink,
                name: strDrink,
                image: strDrinkThumb,
                info: strAlcoholic,
                glass: strGlass,
              })
            )
          : []
      );
    } catch (error) {
      console.log(error);
      setCocktails([]);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  // Fetch drinks when searchTerm changes
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
