import { useEffect, useState } from "react";

import { useDebounce } from "../../hooks/useDebounce";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MovieRow from "../../components/MovieRow/MovieRow";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import Loading from "../../components/Loading/Loading";
import ContinueWatching from "../../components/ContinueWatching/ContinueWatching";
import Recommendations from "../../components/Recommendations/Recommendations";

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

  const debouncedSearch = useDebounce(search, 700);

  useEffect(() => {
    async function runSearch() {
      if (debouncedSearch.trim() === "") {
        setResults([]);
        return;
      }

      try {
        setSearching(true);
        const data = await searchMulti(debouncedSearch);
        setResults(data);
      } catch (error) {
        console.error(error);
        setResults([]);
      } finally {
        setSearching(false);
      }
    }

    runSearch();
  }, [debouncedSearch]);

  function handleSearch(event) {
    event.preventDefault();
  }

  function clearSearch() {
    setSearch("");
    setResults([]);
  }

  const hasSearch = search.trim() !== "";

  return (
    <main className="home-page">
      <HeroBanner />

      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        onClear={clearSearch}
      />

      {searching && <Loading />}

      {!searching && hasSearch && (
        <section className="search-results">
          <h2>🔎 Resultados da busca</h2>
          <MovieGrid movies={results} />
        </section>
      )}

      {!hasSearch && (
        <>
          <ContinueWatching />
          <Recommendations />
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