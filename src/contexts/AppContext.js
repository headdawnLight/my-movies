import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  // create context states
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("the matrix");

  useEffect(() => {
    // set controller to cancel axios request
    const controller = new AbortController();
    const signal = controller.signal;

    // fetch data from rest api
    const fetchData = () => {
      // set debounce time for axios requests
      const timeout = setTimeout(() => {
        axios
          .get(`/api/search?q=${search}`, { signal })
          .then((response) => {
            // is response true or false?
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
      }, 400); // timeout of 400 milliseconds

      // clear the timeout
      return () => clearTimeout(timeout);
    };

    // invoke the function
    fetchData();

    // cleanup the function
    return () => controller.abort();
  }, [search]);

  // set minimum search term length
  const onChangeHandler = (event) => {
    event.target.value.length >= 3 ? setSearch(event.target.value) : setSearch("the matrix");
  };

  return <AppContext.Provider value={{ data, search, onChangeHandler }}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
