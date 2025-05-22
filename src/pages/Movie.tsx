import { type ReactElement, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import type IMovie from "../interfaces/IMovie";
import "./Movie.css";
import getRequestOptionsions from "../utils/config";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const token = import.meta.env.VITE_TOKEN_KEY;

const Movie = (): ReactElement => {
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovie | null>(null);

  const getMovie = async (url: URL): Promise<void> => {
    const optionsGet = getRequestOptionsions("GET", token);
    try {
      const res = await fetch(url, optionsGet);
      const data = await res.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect((): void => {
    const getMovieURL = new URL(
      `${moviesURL}/movie/${id}?api_key=${apiKey}&language=pt-BR`
    );
    getMovie(getMovieURL);
  }, []);

  return (
    <div>
      {movie ? (
        <>
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
            showLink={false}
            showDetails={true}
          />
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Movie;
