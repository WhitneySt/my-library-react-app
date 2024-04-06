import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Layout from "../components/Layout/Layout";
import Details from "../pages/Details/Details";
import axios from "axios";
import { useCallback } from "react";

//1. Crear el contexto

export const AppContext = createContext(null);

const AppRouter = () => {

  const [books, setBooks] = useState([]);
  const [user, setUser] = useState({})
  const [movies, setMovies] = useState([]);

  const URL =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=912ecfda069342c00301ac1533087681";
  
  const getMovies = async () => {
    try {
      const { data } = await axios.get(URL);
      return data.results;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const fetchMovie = useCallback(
    () =>
      getMovies()
        .then((response) => {
          console.log(response);
          setMovies(response);
        })
        .catch((error) => console.log(error)),
    []
  );

  useEffect(() => {
    // getMovies()
    //   .then((response) => {
    //     console.log(response);
    //     setMovies(response);
    //   })
    //   .catch((error) => console.log(error));
    fetchMovie()
  }, [fetchMovie]);

  return (
    //2. Provisión del contexto
    <AppContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              index
              element={<Home books={books} setBooks={setBooks} />}
            />
            <Route
              path="/"
              element={<Home books={books} setBooks={setBooks}/>}
            >
              <Route path="book/:title" element={<Details books={books} />} />
            </Route>
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default AppRouter;
