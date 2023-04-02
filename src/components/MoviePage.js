import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import "./MoviePage.css";
import CartContext from "./cart-context";
import Loading from "./Loading";

const API_KEY = "f9e9395f";

const MoviePage = () => {
  const [movieInfo, setMovieInfo] = useState();
  const [isOff, setIsOff] = useState(false);
  const params = useParams("");
  const selectedMovie = params.imdbID;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);

  const ctx=useContext(CartContext);
  function addMovieHandler() {
    setIsOff(true);
    ctx.addItem(movieInfo);
  }

  return (
    <>
      <Container>
        {movieInfo ? (
          <>
            <CoverImage src={movieInfo?.Poster} alt={movieInfo?.Title} />
            <InfoColumn>
              <MovieName>
                {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
              </MovieName>
              <MovieInfo>
                IMDB Rating: <span>{movieInfo?.imdbRating}</span>
              </MovieInfo>
              <MovieInfo>
                Year: <span>{movieInfo?.Year}</span>
              </MovieInfo>
              <MovieInfo>
                Language: <span>{movieInfo?.Language}</span>
              </MovieInfo>
              <MovieInfo>
                Rated: <span>{movieInfo?.Rated}</span>
              </MovieInfo>
              <MovieInfo>
                Released: <span>{movieInfo?.Released}</span>
              </MovieInfo>
              <MovieInfo>
                Runtime: <span>{movieInfo?.Runtime}</span>
              </MovieInfo>
              <MovieInfo>
                Genre: <span>{movieInfo?.Genre}</span>
              </MovieInfo>
              <MovieInfo>
                Director: <span>{movieInfo?.Director}</span>
              </MovieInfo>
              <MovieInfo>
                Actors: <span>{movieInfo?.Actors}</span>
              </MovieInfo>
              <MovieInfo>
                Plot: <span>{movieInfo?.Plot}</span>
              </MovieInfo>
            </InfoColumn>
          </>
        ) : (
          <Loading/>
        )}
      </Container>
      {movieInfo && (
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <button style={{fontSize:25}} className="button-30" type="button">
            Close
          </button>
        </Link>
      )}
      {movieInfo && !isOff && (
        <button className="button-30" type="button" style={{fontSize:25}} onClick={addMovieHandler}>
          Watchlist
        </button>
      )}
    </>
  );
};
export default MoviePage;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
  color: #00ADB5;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;

  & span {
    opacity: 0.5;
  }
`;
