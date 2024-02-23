import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import HeaderLogo from "../../images/clapperboard.png";
import "./Header.css";

const Header = () => {
  const { onChangeHandler } = useContext(AppContext);
  return (
    <header className="App-header">
      <div className="navbar-container">
        <Link to="/home" className="navbar-link">
          <div className="brand-container">
            <h1 className="brand-text">My movies</h1>
            <img className="brand-logo" src={HeaderLogo} alt="header_logo"></img>
          </div>
        </Link>
        <SearchBar searchQuery={onChangeHandler} />
      </div>
    </header>
  );
};

export default Header;
