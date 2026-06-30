import { useEffect, useState } from "react";

import MovieGrid from "../../components/MovieGrid/MovieGrid";
import Loading from "../../components/Loading/Loading";

import { getPopularSeries } from "../../services/api";

import "./Series.css";

function Series() {

  const [series, setSeries] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    loadSeries();
  }, []);

  async function loadSeries() {

    try {

      setLoading(true);

      const data = await getPopularSeries();

      setSeries(data);

    } catch {

      setError("Erro ao carregar séries.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <main className="page">

      <div className="page-header">

        <h1>📺 Séries Populares</h1>

        <p>

          As séries mais assistidas do momento.

        </p>

      </div>

      {loading && <Loading />}

      {!loading && error && (

        <h2 className="error">

          {error}

        </h2>

      )}

      {!loading && (

        <MovieGrid movies={series} />

      )}

    </main>

  );

}

export default Series;