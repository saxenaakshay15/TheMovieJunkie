import MovieComponent from "./MovieComponent";
import "./Home.css";
import Description from "./Description";

const Home = ({ movieList }) => {
  return (
    <div>
      <section className="Home">
        {movieList?.length ? (
          movieList.map((movie, index) => {
            return <MovieComponent key={index} movie={movie} />;
          })
        ) : (
          <>
            <Description />
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
