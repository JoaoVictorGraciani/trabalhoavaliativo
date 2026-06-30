import { useEffect, useState } from "react";

import {
  getMovieVideos,
  getSeriesVideos,
} from "../../services/api";

import "./Trailer.css";

function Trailer({ id, isMovie }) {

  const [videoKey, setVideoKey] = useState("");

  useEffect(() => {

    loadTrailer();

  }, [id]);

  async function loadTrailer() {

    try {

      const data = isMovie
        ? await getMovieVideos(id)
        : await getSeriesVideos(id);

      const trailer = data.results.find(

        (video) =>

          video.site === "YouTube" &&
          video.type === "Trailer"

      );

      if (trailer) {

        setVideoKey(trailer.key);

      }

    } catch (error) {

      console.error(error);

    }

  }

  if (!videoKey) {

    return (

      <section className="trailer">

        <h2>🎥 Trailer</h2>

        <p>Trailer não disponível.</p>

      </section>

    );

  }

  return (

    <section className="trailer">

      <h2>🎥 Trailer Oficial</h2>

      <div className="video-container">

        <iframe

          src={`https://www.youtube.com/embed/${videoKey}`}

          title="Trailer"

          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

          allowFullScreen

        />

      </div>

    </section>

  );

}

export default Trailer;