import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

import "./MovieCard.css";

import { IMAGE_URL } from "../../services/api";
import { useFavorites } from "../../context/FavoritesContext";

function MovieCard({ movie }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const isSeries = !!movie.name;

  const title = movie.title || movie.name;

  const release =
    movie.release_date ||
    movie.first_air_date ||
    "";

  const poster = movie.poster_path
    ? `${IMAGE_URL}${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=Sem+Imagem";

  const detailsUrl = isSeries
    ? `/tv/${movie.id}`
    : `/movie/${movie.id}`;

  return (
    <motion.article
      className="movie-card"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.06,
        y: -12,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      {/* Favorito */}

      <button
        className="favorite-icon"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleFavorite(movie);
        }}
      >
        {isFavorite(movie.id)
          ? <FaHeart />
          : <FaRegHeart />}
      </button>

      <Link to={detailsUrl}>
        <img
          loading="lazy"
          src={poster}
          alt={title}
          className="movie-poster"
        />

        <div className="movie-info">

          <h3>{title}</h3>

          <div className="movie-meta">

            <span className="rating">

              <FaStar />

              {movie.vote_average
                ? movie.vote_average.toFixed(1)
                : "0.0"}

            </span>

            <span>

              {release
                ? release.substring(0, 4)
                : "----"}

            </span>

          </div>

        </div>

      </Link>

    </motion.article>
  );
}

export default MovieCard;