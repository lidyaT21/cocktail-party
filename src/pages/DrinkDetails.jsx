import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
const CocktailDetail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchCocktailDetail = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        const drink = data.drinks?.[0];
        setCocktail(drink);

        const ingredientsList = [];
        for (let i = 1; i <= 15; i++) {
          const ingredient = drink[`strIngredient${i}`];
          const measure = drink[`strMeasure${i}`];
          if (ingredient) {
            ingredientsList.push(`${measure || ""} ${ingredient}`.trim());
          }
        }
        setIngredients(ingredientsList);
      } catch (error) {
        console.error("Error fetching cocktail detail:", error);
      }
    };

    fetchCocktailDetail();
  }, [id]);

  if (!cocktail) {
    return <Loading />;
  }

  return (
    <div className="cocktail-detail">
      <img
        className="cocktail-img"
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
      />

      <div className="cocktail-text">
        <h2 className="cocktail-title">{cocktail.strDrink}</h2>
        <p className="overview">{cocktail.strInstructions}</p>

        <ul className="cocktail-info-list">
          <li>
            <div>{cocktail.strCategory}</div>
          </li>
          <li>
            <div>{cocktail.strGlass}</div>
          </li>
        </ul>

        <h3>Ingredients</h3>
        <ul className="ingredient">
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <div>{ingredient}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CocktailDetail;
