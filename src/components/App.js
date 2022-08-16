import Header from "./Header";
import Footer from "./Footer";
import MovieList from "./MovieList";
import "../styles/App.css";

const App = () => {
  return (
    <div className="App">
      <main>
        <Header />
        <MovieList />
        <Footer />
      </main>
    </div>
  );
};

export default App;
