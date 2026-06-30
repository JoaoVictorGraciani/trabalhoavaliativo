import { useEffect, useState } from "react";

import MovieGrid from "../MovieGrid/MovieGrid";
import Loading from "../Loading/Loading";

import { useFavorites } from "../../context/FavoritesContext";

import {
  getSimilarMovies,
  getSimilarSeries,
} from "../../services/api";

import "./Recommendations.css";

function Recommendations() {
  const { favorites } = useFavorites();

  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadRecommendations();
  }, [favorites]);

  async function loadRecommendations() {
    if (favorites.length === 0) {
      setRecommendations([]);
      return;
    }

    try {
      setLoading(true);

      const selected = favorites.slice(0, 4);

      const requests = selected.map((item) => {
        const isSeries = !!item.name;

        return isSeries
          ? getSimilarSeries(item.id)
          : getSimilarMovies(item.id);
      });

      const responses = await Promise.all(requests);

      const allResults = responses
        .flatMap((response) => response.results)
        .filter((item) => item.poster_path);

      const uniqueResults = allResults.filter(
        (item, index, self) =>
          index === self.findIndex((movie) => movie.id === item.id)
      );

      setRecommendations(uniqueResults.slice(0, 12));
    } catch (error) {
      console.error("Erro ao gerar recomendações:", error);
    } finally {
      setLoading(false);
    }
  }

  if (favorites.length === 0) return null;

  if (loading) {
    return (
      <section className="recommendations">
        <h2>✨ Recomendações para você</h2>
        <Loading />
      </section>
    );
  }

  if (recommendations.length === 0) return null;

  return (
    <section className="recommendations">
      <h2>✨ Recomendações para você</h2>

      <p>
        Baseadas nos seus filmes e séries favoritos.
      </p>

      <MovieGrid movies={recommendations} />
    </section>
  );
}

export default Recommendations;