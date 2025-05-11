import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container-main">
      <div className="about-profile-container">
        <button
          className="about-profile-button"
          onClick={() => navigate(-1)}
          style={{ marginTop: "10px" }}
        >
          Go Back
        </button>
      </div>

      <div className="about-container">
        <div className="about-left">
          <h1>
            Welcome to <br /> The world of <br />
            <span>cocktail</span>
          </h1>
          <h4>"Better you will feel if you drink cocktail"</h4>
        </div>
        <div className="about-right">
          <img src="/Images/Cocktail.png" alt="cocktail" />
        </div>
      </div>
    </div>
  );
};

export default About;
