import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Axios from "axios";
import Layout from "./components/Layout";
import Home from "./components/Home";
import MoviePage from "./components/MoviePage";
import About from "./components/About";
import WatchList from "./components/WatchList";
import Contact from "./components/Contact";
import CartProvider from "./components/CartProvider";

const API_KEY = "f9e9395f";

function App() {
  const [searchQuery, updateSearchQuery] = useState("");

  const [movieList, updateMovieList] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();
  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    updateMovieList(response.data.Search);
    // console.log(movieList);
  };

  const onTextChange = (e) => {
    // console.log(e.target.value);
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    fetchData(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <CartProvider>
      <Routes >
        <Route
          path="/"
          element=<Layout onChangeNav={onTextChange} valueNav={searchQuery} />
        >
          <Route index element=<Home movieList={movieList} /> />
          <Route path="/:imdbID/" element={<MoviePage />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
