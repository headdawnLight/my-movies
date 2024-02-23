import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MovieList from "../components/MovieList/MovieList";

const PageLayout = () => {
  return (
    <div className="App">
      <main>
        <Header />
        <MovieList />
        <Footer />
        <Outlet />
      </main>
    </div>
  );
};

export default PageLayout;
