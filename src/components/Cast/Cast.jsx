import { useEffect, useState } from "react";

import {
  IMAGE_URL,
  getMovieCredits,
  getSeriesCredits,
} from "../../services/api";

import "./Cast.css";

function Cast({ id, isMovie }) {
  const [cast, setCast] = useState([]);

  const [director, setDirector] = useState("");

  const [writer, setWriter] = useState("");

  useEffect(() => {
    loadCredits();
  }, [id]);

  async function loadCredits() {
    try {
      const data = isMovie
        ? await getMovieCredits(id)
        : await getSeriesCredits(id);

      setCast(data.cast.slice(0, 12));

      const directorMember = data.crew.find(
        (person) => person.job === "Director"
      );

      if (directorMember) {
        setDirector(directorMember.name);
      }

      const writerMember = data.crew.find(
        (person) =>
          person.job === "Writer" ||
          person.job === "Screenplay"
      );

      if (writerMember) {
        setWriter(writerMember.name);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="cast-section">
      <h2>🎭 Elenco</h2>

      <div className="crew-info">
        {director && (
          <p>
            <strong>Diretor:</strong> {director}
          </p>
        )}

        {writer && (
          <p>
            <strong>Roteirista:</strong> {writer}
          </p>
        )}
      </div>

      <div className="cast-grid">
        {cast.map((actor) => (
          <div
            className="cast-card"
            key={actor.cast_id || actor.credit_id}
          >
            <img
              src={
                actor.profile_path
                  ? `${IMAGE_URL}${actor.profile_path}`
                  : "https://via.placeholder.com/300x450?text=Sem+Foto"
              }
              alt={actor.name}
            />

            <h3>{actor.name}</h3>

            <p>{actor.character}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cast;