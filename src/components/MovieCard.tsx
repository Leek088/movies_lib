import { type ReactElement } from "react";
import { FaStar } from "react-icons/fa";
import type IMovie from "../interfaces/IMovie";
import { Link } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

const movieImgURL = import.meta.env.VITE_IMAGE;

interface Props extends IMovie {
  showLink?: boolean;
  showDetails?: boolean;
}

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const MovieCard = (props: Props): ReactElement => {
  return (
    <>
      <div className="movie-card movie-page">
        <img src={`${movieImgURL}${props.poster_path}`} alt={props.title} />
        <h2>{props.title}</h2>
        <p>
          <FaStar /> {props.vote_average}
        </p>
        {props.showLink && <Link to={`/movie/${props.id}`}>Detalhes</Link>}
        {props.showDetails && (
          <>
            {props.tagline && <p className="tagline">"{props.tagline}"</p>}
            <div className="details">
              <div className="info">
                <h3>
                  <p>
                    <BsWallet2 /> Orçamento: {formatCurrency(props.budget)}
                  </p>
                </h3>
              </div>
              <div className="info">
                <h3>
                  <p>
                    <BsGraphUp /> Receita: {formatCurrency(props.revenue)}
                  </p>
                </h3>
              </div>
              <div className="info">
                <h3>
                  <p>
                    <BsHourglassSplit /> Duração: {props.runtime} minutos
                  </p>
                </h3>
              </div>
              <div className="info description">
                <h3>
                  <p>
                    <BsFillFileEarmarkTextFill /> Descrição:
                  </p>
                </h3>
                <h3>
                  <p>{props.overview}</p>
                </h3>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MovieCard;
