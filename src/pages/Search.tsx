import "./MovieGrid.css";
import { type ReactElement } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import type IMovie from "../interfaces/IMovie";
import getRequestOptions from "../utils/config";

const serachURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = (): ReactElement => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [movies, setMovies] = useState<IMovie[]>([]);

  const getSearchMovies = async (url: URL): Promise<void> => {
    const optionsGet = getRequestOptions("GET", null);
    try {
      const res = await fetch(url, optionsGet);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect((): void => {
    const getSearchURL = new URL(
      `${serachURL}?api_key=${apiKey}&language=pt-BR&query=${query}`
    );
    getSearchMovies(getSearchURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      {movies && movies.length > 0 ? (
        <div className="movies-container">
          {movies.map(
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

export default Search;
