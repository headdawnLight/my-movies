import "./Footer.css";

const Footer = () => {
  // get current year for copyright symbol
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="App-footer">
      <p className="footer-text">©{getCurrentYear()} Headdawn Light. All rights reserved.</p>
      <a href="https://github.com/headdawnLight" className="footer-link">
        <span id="footer-link-text">@myGitHub</span>
      </a>
    </footer>
  );
};

export default Footer;
