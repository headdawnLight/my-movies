import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import SearchBar from "./SearchBar";
import "../styles/Header.css";

const Header = () => {
  const { onChangeHandler } = useContext(MovieContext);
  return (
    <header className="App-header">
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-brand">My movies...</h1>
          <SearchBar searchQuery={onChangeHandler} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
