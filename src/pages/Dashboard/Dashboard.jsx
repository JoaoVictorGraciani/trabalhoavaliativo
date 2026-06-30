import { FaHeart, FaFilm, FaTv, FaStar } from "react-icons/fa";

import { useFavorites } from "../../context/FavoritesContext";

import "./Dashboard.css";

function Dashboard() {
  const { favorites } = useFavorites();

  const favoriteMovies = favorites.filter((item) => item.title);
  const favoriteSeries = favorites.filter((item) => item.name);

  const averageRating =
    favorites.length > 0
      ? (
          favorites.reduce((sum, item) => sum + item.vote_average, 0) /
          favorites.length
        ).toFixed(1)
      : "0.0";

  return (
    <main className="dashboard-page">
      <section className="dashboard-header">
        <h1>📊 Meu Dashboard</h1>
        <p>Resumo dos seus filmes e séries favoritos.</p>
      </section>

      <section className="dashboard-grid">
        <div className="dashboard-card">
          <FaHeart />
          <h2>{favorites.length}</h2>
          <p>Total de favoritos</p>
        </div>

        <div className="dashboard-card">
          <FaFilm />
          <h2>{favoriteMovies.length}</h2>
          <p>Filmes favoritos</p>
        </div>

        <div className="dashboard-card">
          <FaTv />
          <h2>{favoriteSeries.length}</h2>
          <p>Séries favoritas</p>
        </div>

        <div className="dashboard-card">
          <FaStar />
          <h2>{averageRating}</h2>
          <p>Nota média</p>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;