import React from "react";
import { Link } from "react-router-dom";
import './MovieComponent.css';

const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <div className="MovieContainer">
      <Link to={`/${imdbID}`}>
        <img className="CoverImage" src={Poster} alt={Title} />
      </Link>
      <div className="MovieName">{Title}</div>
      <div className="InfoColumn">
        <div className="MovieInfo">Year : {Year}</div>
        <div className="MovieInfo">Type : {Type}</div>
      </div>
    </div>
  );
};

export default MovieComponent;
