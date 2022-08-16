import "../styles/Header.css";

const Header = () => {
  return (
    <header className="App-header">
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-brand">My movies...</h1>
          <form className="header-form">
            <input type="text" placeholder="Search a movie..." />
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
