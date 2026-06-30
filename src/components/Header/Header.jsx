import { NavLink } from "react-router-dom";

import {
  FaFilm,
  FaHeart,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { useFavorites } from "../../context/FavoritesContext";
import { useTheme } from "../../context/ThemeContext";

import "./Header.css";

function Header() {
  const { favorites } = useFavorites();

  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="container">

        {/* LOGO */}

        <NavLink to="/" className="logo">

          <FaFilm />

          <span>MovieVerse</span>

        </NavLink>

        {/* MENU */}

        <nav>

          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/movies">
            Filmes
          </NavLink>

          <NavLink to="/series">
            Séries
          </NavLink>

          <NavLink to="/dashboard">
           Dashboard
          </NavLink>

          <NavLink
            to="/favorites"
            className="favorites-link"
          >
            <FaHeart />

            <span>

              Favoritos

            </span>

            {favorites.length > 0 && (

              <div className="favorites-count">

                {favorites.length}

              </div>

            )}

          </NavLink>

          {/* TEMA */}

          <button

            className="theme-toggle"

            onClick={toggleTheme}

            aria-label="Alternar tema"

          >

            {

              theme === "dark"

              ?

              <FaSun/>

              :

              <FaMoon/>

            }

          </button>

        </nav>

      </div>
    </header>
  );
}

export default Header;