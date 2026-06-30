import MovieGrid from "../MovieGrid/MovieGrid";
import { useWatchHistory } from "../../context/WatchHistoryContext";

import "./ContinueWatching.css";

function ContinueWatching() {
  const { history, clearHistory } = useWatchHistory();

  if (history.length === 0) return null;

  return (
    <section className="continue-section">
      <div className="continue-header">
        <h2>▶️ Continue Assistindo</h2>

        <button onClick={clearHistory}>
          Limpar histórico
        </button>
      </div>

      <MovieGrid movies={history} />
    </section>
  );
}

export default ContinueWatching;