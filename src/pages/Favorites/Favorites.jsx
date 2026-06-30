import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { useFavorites } from "../../context/FavoritesContext";

import "./Favorites.css";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <main className="favorites-page">
      <section className="favorites-hero">
        <h1>❤️ Minha Lista</h1>

        <p>
          Você possui {favorites.length} item
          {favorites.length !== 1 && "s"} salvo
          {favorites.length !== 1 && "s"}.
        </p>
      </section>

      {favorites.length === 0 ? (
        <section className="empty-favorites">
          <h2>Nenhum favorito encontrado.</h2>
          <p>
            Clique no coração dos filmes ou séries para adicioná-los à sua lista.
          </p>
        </section>
      ) : (
        <MovieGrid movies={favorites} />
      )}
    </main>
  );
}

export default Favorites;