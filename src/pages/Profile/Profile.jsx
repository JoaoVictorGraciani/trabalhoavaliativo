import { useState } from "react";
import { FaUserCircle, FaHeart, FaSave } from "react-icons/fa";

import { useFavorites } from "../../context/FavoritesContext";

import "./Profile.css";

function Profile() {
  const { favorites } = useFavorites();

  const [name, setName] = useState(() => {
    return localStorage.getItem("movieverse_user_name") || "João";
  });

  const [bio, setBio] = useState(() => {
    return localStorage.getItem("movieverse_user_bio") || "Movie Lover";
  });

  function handleSave() {
    localStorage.setItem("movieverse_user_name", name);
    localStorage.setItem("movieverse_user_bio", bio);

    alert("Perfil salvo com sucesso!");
  }

  return (
    <main className="profile-page">
      <section className="profile-card">
        <FaUserCircle className="profile-avatar" />

        <h1>Meu Perfil</h1>

        <div className="profile-form">
          <label>Nome</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label>Descrição</label>
          <input
            type="text"
            value={bio}
            onChange={(event) => setBio(event.target.value)}
          />

          <button onClick={handleSave}>
            <FaSave />
            Salvar Perfil
          </button>
        </div>

        <div className="profile-stats">
          <div>
            <FaHeart />
            <strong>{favorites.length}</strong>
            <span>Favoritos</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;