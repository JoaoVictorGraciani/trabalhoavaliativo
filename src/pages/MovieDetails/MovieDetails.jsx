import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaGlobe,
  FaHeart,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";

import {
  IMAGE_URL,
  getMovieDetails,
  getSeriesDetails,
} from "../../services/api";

import { useFavorites } from "../../context/FavoritesContext";

import Loading from "../../components/Loading/Loading";
import Trailer from "../../components/Trailer/Trailer";

import "./MovieDetails.css";

import Cast from "../../components/Cast/Cast";

import SimilarMovies from "../../components/SimilarMovies/SimilarMovies";

function MovieDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const isMovie = location.pathname.startsWith("/movie");

  const [movie, setMovie] = useState(null);

  const [loading, setLoading] = useState(true);

  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    loadMovie();
  }, [id]);

  async function loadMovie() {
    try {
      setLoading(true);

      const data = isMovie
        ? await getMovieDetails(id)
        : await getSeriesDetails(id);

      setMovie(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <Loading />;

  if (!movie) {
    return (
      <main className="details-page">
        <h2>Conteúdo não encontrado.</h2>
      </main>
    );
  }

  const title = movie.title || movie.name;

  const release =
    movie.release_date ||
    movie.first_air_date ||
    "Não informado";

  const runtime = movie.runtime
    ? `${movie.runtime} min`
    : `${movie.number_of_seasons || "-"} Temporadas`;

  return (
    <main className="details-page">
      {/* BACKDROP */}

      <div
        className="details-backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="details-overlay"></div>
      </div>

      {/* CONTAINER */}

      <motion.section
        className="details-container"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* POSTER */}

        <div className="poster-area">
          <img
            loading="lazy"
            src={`${IMAGE_URL}${movie.poster_path}`}
            alt={title}
            className="details-poster"
          />
        </div>

        {/* INFORMAÇÕES */}

        <div className="details-info">
          <button
            className="back-button"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />

            Voltar
          </button>

          <h1>{title}</h1>

          {/* NOTA */}

          <div className="movie-rating">
            <FaStar />

            <span>{movie.vote_average.toFixed(1)}</span>
          </div>

          {/* GÊNEROS */}

          <div className="genres">
            {movie.genres.map((genre) => (
              <span key={genre.id}>
                {genre.name}
              </span>
            ))}
          </div>

          {/* INFORMAÇÕES */}

          <div className="movie-extra">
            <span>
              <FaCalendarAlt />
              {release}
            </span>

            <span>
              <FaClock />
              {runtime}
            </span>

            <span>
              <FaGlobe />
              {movie.original_language.toUpperCase()}
            </span>
          </div>

          {/* SINOPSE */}

          <h2>Sinopse</h2>

          <p>{movie.overview}</p>

          {/* TRAILER */}

          <Trailer
            id={movie.id}
            isMovie={isMovie}
          />

            <Cast

            id={movie.id}

            isMovie={isMovie}

            />

            <SimilarMovies

            id={movie.id}

            isMovie={isMovie}

            />

          {/* FAVORITOS */}

          <button
            className="favorite-button"
            onClick={() => toggleFavorite(movie)}
          >
            {isFavorite(movie.id) ? (
              <>
                <FaHeart />

                Remover dos Favoritos
              </>
            ) : (
              <>
                <FaRegHeart />

                Adicionar aos Favoritos
              </>
            )}
          </button>
        </div>
      </motion.section>
    </main>
  );
}

export default MovieDetails;