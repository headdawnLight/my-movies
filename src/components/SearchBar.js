import "../styles/SearchBar.css";

const SearchBar = ({ searchQuery }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="header-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search a movie..."
        onChange={searchQuery}
        minLength={3}
      />
    </form>
  );
};

export default SearchBar;
