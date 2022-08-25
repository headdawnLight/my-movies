import Header from "./Header";
import Footer from "./Footer";
import MovieList from "./MovieList";
import MovieContextProvider from "../contexts/MovieContext";
import "../styles/App.css";

const App = () => {
  return (
    <div className="App">
      <main>
        <MovieContextProvider>
          <Header />
          <MovieList />
          <Footer />
        </MovieContextProvider>
      </main>
    </div>
  );
};

export default App;
