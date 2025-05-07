import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error-page">
      <img
        src="https://img.freepik.com/premium-vector/cocktail-summer-drink-error-404-flash-message_151150-14949.jpg"
        alt="404 Error"
      />
      <h1>Oops! The drink you're looking for can't be found.</h1>
      <h3 className="error-back-home">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  );
}
