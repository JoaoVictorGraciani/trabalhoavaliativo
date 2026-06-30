import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

import { IMAGE_URL } from "../../services/api";
import { useFavorites } from "../../context/FavoritesContext";

import "./MovieCard.css";

function MovieCard({ movie }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const title = movie.title || movie.name || "Título não disponível";

  const releaseDate =
    movie.release_date || movie.first_air_date || "";

  const poster = movie.poster_path
    ? `${IMAGE_URL}${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=Sem+Imagem";

  const isSeries =
    movie.media_type === "tv" ||
    (!!movie.name && !movie.title);

  const detailsUrl = isSeries
    ? `/tv/${movie.id}`
    : `/movie/${movie.id}`;

  return (
    <motion.article
      className="movie-card"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="favorite-icon"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          toggleFavorite(movie);
        }}
      >
        {isFavorite(movie.id) ? <FaHeart /> : <FaRegHeart />}
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
            <span>
              <FaStar />
              {movie.vote_average
                ? movie.vote_average.toFixed(1)
                : "0.0"}
            </span>

            <span>
              {releaseDate
                ? releaseDate.substring(0, 4)
                : "----"}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default MovieCard;