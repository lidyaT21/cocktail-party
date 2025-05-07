import githubIcon from "../assets/icon-github.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 HYF-React-Project</p>
      <a href="https://github.com/lidyaT21">
        <img src={githubIcon} alt="github logo" className="github-icon" />
      </a>
    </footer>
  );
};

export default Footer;
