import { useContext } from "react";
import WIComponent from "./WlComponent";
import "./WatchList.css";
import NoMovie from "./NoMovie";
import CartContext from "./cart-context";

const WatchList = () => {
  const ctx= useContext(CartContext);
  const movies=ctx.items;
  // const [movies, setMovies] = useState([]);
  // fetch("https://flicksmovie-4c781-default-rtdb.firebaseio.com/watchlist.json")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const changedMovies = [];
  //     for (let key in data) {
  //       changedMovies.push(data[key]);
  //       // console.log(data[key]);
  //     }
  //     setMovies(changedMovies);
  //   });

  // const fetchMoviesHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(
  //       "https://flicksmovie-4c781-default-rtdb.firebaseio.com/watchlist.json"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }
  //     const data = await response.json();
  //     const changedMovies = [];
  //     for (let key in data) {
  //       changedMovies.push(
  //          data[key]
  //       );
  //       // console.log(data[key]);
  //     }
  //     setMovies(changedMovies);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }, []);
  // useEffect(() => fetchMoviesHandler, [fetchMoviesHandler]);

  return (
    <>
      <h1 className="heading">YOUR WATCHLIST</h1>
      <div className="watchlist">
        {movies.length > 0 &&
          movies.map((movie, index) => {
            return (
              <WIComponent key={index} movie={movie} 
              // onTouch={touchHandler} 
              />
            );
          })}
        {movies.length === 0 && <NoMovie/>}
      </div>
    </>
  );
};

export default WatchList;
