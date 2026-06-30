import { useState } from "react";

import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MovieRow from "../../components/MovieRow/MovieRow";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import Loading from "../../components/Loading/Loading";

import {
  getTrendingAll,
  getPopularMovies,
  getPopularSeries,
  getTopRatedMovies,
  getNowPlayingMovies,
  searchMulti,
} from "../../services/api";

import "./Home.css";

function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSearch(event) {
    event.preventDefault();

    if (search.trim() === "") {
      setResults([]);
      setHasSearched(false);
      return;
    }

    try {
      setSearching(true);
      setHasSearched(true);

      const data = await searchMulti(search);

      setResults(data);
    } catch (error) {
      console.error(error);
      setResults([]);
    } finally {
      setSearching(false);
    }
  }

  return (
    <main className="home-page">
      <HeroBanner />

      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {searching && <Loading />}

      {!searching && hasSearched && (
        <section className="search-results">
          <h2>🔎 Resultados da busca</h2>
          <MovieGrid movies={results} />
        </section>
      )}

      {!hasSearched && (
        <>
          <MovieRow title="🔥 Em Alta Hoje" fetchData={getTrendingAll} />
          <MovieRow title="🎬 Filmes Populares" fetchData={getPopularMovies} />
          <MovieRow title="📺 Séries Populares" fetchData={getPopularSeries} />
          <MovieRow title="⭐ Mais Bem Avaliados" fetchData={getTopRatedMovies} />
          <MovieRow title="🆕 Lançamentos" fetchData={getNowPlayingMovies} />
        </>
      )}
    </main>
  );
}

export default Home;