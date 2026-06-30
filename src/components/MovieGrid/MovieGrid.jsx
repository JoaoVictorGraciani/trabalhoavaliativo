import MovieCard from "../MovieCard/MovieCard";
import "./MovieGrid.css";

function MovieGrid({ movies = [] }) {
  if (movies.length === 0) {
    return (
      <div className="empty-grid">
        <h2>Nenhum resultado encontrado.</h2>
        <p>Pesquise um filme ou série para começar.</p>
      </div>
    );
  }

  return (
    <section className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </section>
  );
}

export default MovieGrid;