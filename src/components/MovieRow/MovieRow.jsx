import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import MovieCard from "../MovieCard/MovieCard";
import Loading from "../Loading/Loading";

import "./MovieRow.css";

function MovieRow({ title, fetchData }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadItems() {
    try {
      setLoading(true);

      const data = await fetchData();

      setItems(data.filter((item) => item.poster_path).slice(0, 18));
    } catch (error) {
      console.error(`Erro ao carregar seção ${title}:`, error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadItems();
  }, []);

  function scrollRow(direction) {
    const row = document.getElementById(`row-${title}`);

    if (!row) return;

    const scrollAmount = direction === "left" ? -900 : 900;

    row.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  if (loading) {
    return (
      <section className="movie-row">
        <h2>{title}</h2>
        <Loading />
      </section>
    );
  }

  if (items.length === 0) return null;

  return (
    <section className="movie-row">
      <div className="movie-row-header">
        <h2>{title}</h2>

        <div className="row-buttons">
          <button onClick={() => scrollRow("left")}>
            <FaChevronLeft />
          </button>

          <button onClick={() => scrollRow("right")}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="movie-row-list" id={`row-${title}`}>
        {items.map((item) => (
          <div className="row-card" key={item.id}>
            <MovieCard movie={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieRow;