import Card from "./Card";

const FavoriteList = ({ favoritelist, onRemoveFromFavoriteList }) => {
  return (
    <div>
      <div className="favorite-cocktail-cards">
        {favoritelist.length === 0 ? (
          <p className="favoritelist-empty">
            Your cocktail FavoriteList is empty at the moment...
          </p>
        ) : (
          favoritelist.map((cocktail) => (
            <div key={cocktail.idDrink} className="cocktail-card">
              <Card drink={cocktail} />
              <button
                className="remove-favoritelist"
                onClick={() => onRemoveFromFavoriteList(cocktail.idDrink)}
              >
                Remove from FavoriteList
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoriteList;
