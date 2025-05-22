import "./MovieGrid.css";
import { useState, type ReactElement, useEffect } from "react";
import getRequestOptions from "../utils/config";
import type IMovie from "../interfaces/IMovie";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = (): ReactElement => {
  const [topMovies, setTopMovies] = useState<IMovie[]>([]);

  const getTopRatedMovies = async (url: URL): Promise<void> => {
    const optionsGet = getRequestOptions("GET", null);
    try {
      const res = await fetch(url, optionsGet);
      const data = await res.json();
      setTopMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect((): void => {
    const topRatedURL = new URL(
      `${moviesURL}/movie/top_rated?api_key=${apiKey}&language=pt-BR`
    );
    getTopRatedMovies(topRatedURL);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      {topMovies && topMovies.length > 0 ? (
        <div className="movies-container">
          {topMovies.map(
            (movie): ReactElement => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                overview={movie.overview}
                tagline={movie.tagline}
                budget={movie.budget}
                revenue={movie.revenue}
                runtime={movie.runtime}
                showLink={true}
              />
            )
          )}
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Home;
