import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = document.querySelector('input[type="text"]');
    const text = input.value;
    input.value = "";
    input.placeholder = "Search for Drinks";
    if (text.trim() === "") return;
    navigate(`/search/${text}`);
  };

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for drinks"
          className="search-input"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
