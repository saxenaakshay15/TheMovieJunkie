import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./cart-context";
import "./WlComponent.css";

const WIComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  const ctx=useContext(CartContext);
  const clickHandler = () => {
    // props.onTouch(imdbID);
    ctx.removeItem(imdbID);
  }

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
      <button style={{fontSize:19}} className="button-30" type="button" onClick={clickHandler}>
        Remove from WatchList
      </button>
    </div>
  );
};

export default WIComponent;