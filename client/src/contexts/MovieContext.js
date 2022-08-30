import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("the matrix");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`/api/search?q=${search}`)
        .then((response) => {
          const trueOrFalse = response.data.results.Response;
          if (trueOrFalse !== "False") {
            setData(response.data.results.Search);
          } else {
            setData("Movie is not found!");
          }
          console.log(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [search]);

  const onChangeHandler = (event) => {
    event.target.value.length >= 3
      ? setSearch(event.target.value)
      : setSearch("the matrix");
  };

  return (
    <MovieContext.Provider value={{ data, search, onChangeHandler }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
