import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeart,
  FaInfoCircle,
  FaPlay,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";

import { getTrendingMovies } from "../../services/api";
import { useFavorites } from "../../context/FavoritesContext";

import "./HeroBanner.css";

function HeroBanner() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    async function loadHeroMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data.slice(0, 6));
      } catch (error) {
        console.error("Erro ao carregar banner:", error);
      }
    }

    loadHeroMovies();
  }, []);

  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [movies]);

  if (movies.length === 0) return null;

  const movie = movies[currentIndex];

  const title = movie.title || movie.name;
  const release = movie.release_date || movie.first_air_date || "";
  const year = release ? release.substring(0, 4) : "----";

  return (
    <section className="hero-banner">
      <AnimatePresence mode="wait">
        <motion.div
          key={movie.id}
          className="hero-slide"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-overlay" />

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1>{title}</h1>

            <div className="hero-rating">
              <FaStar />
              <span>{movie.vote_average?.toFixed(1) || "0.0"}</span>
              <span>{year}</span>
            </div>

            <p>
              {movie.overview
                ? movie.overview.length > 220
                  ? `${movie.overview.substring(0, 220)}...`
                  : movie.overview
                : "Sinopse não disponível."}
            </p>

            <div className="hero-buttons">
              <Link to={`/movie/${movie.id}`} className="btn-primary">
                <FaInfoCircle />
                Mais Informações
              </Link>

              <a
                href={`https://www.youtube.com/results?search_query=${title}+trailer`}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <FaPlay />
                Assistir Trailer
              </a>

              <button
                className="btn-favorite"
                onClick={() => toggleFavorite(movie)}
              >
                {isFavorite(movie.id) ? <FaHeart /> : <FaRegHeart />}
                {isFavorite(movie.id) ? "Favoritado" : "Favoritar"}
              </button>
            </div>

            <div className="hero-indicators">
              {movies.map((item, index) => (
                <button
                  key={item.id}
                  className={index === currentIndex ? "active" : ""}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default HeroBanner;