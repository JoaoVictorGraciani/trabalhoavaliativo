import { useEffect, useState } from "react";

import MovieGrid from "../../components/MovieGrid/MovieGrid";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loading from "../../components/Loading/Loading";

import {
  getPopularMovies,
  searchMovies,
} from "../../services/api";

import "./Movies.css";

function Movies() {
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    loadPopularMovies();
  }, []);

  async function loadPopularMovies() {
    try {
      setLoading(true);

      const data = await getPopularMovies();

      setMovies(data);
    } catch {
      setError("Erro ao carregar filmes.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch(event) {
    event.preventDefault();

    if (search.trim() === "") {
      loadPopularMovies();
      return;
    }

    try {
      setLoading(true);

      const data = await searchMovies(search);

      setMovies(data);
    } catch {
      setError("Erro ao pesquisar.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">

      <div className="page-header">

        <h1>🎬 Filmes Populares</h1>

        <p>
          Descubra os filmes mais populares do momento.
        </p>

      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {loading && <Loading />}

      {!loading && error && (
        <h2 className="error">{error}</h2>
      )}

      {!loading && (
        <MovieGrid movies={movies} />
      )}

    </main>
  );
}

export default Movies;