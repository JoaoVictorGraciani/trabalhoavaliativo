import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("movieverse_favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("movieverse_favorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(item) {
    if (!item || !item.id) return;

    setFavorites((current) => {
      const exists = current.some((favorite) => favorite.id === item.id);

      if (exists) {
        return current.filter((favorite) => favorite.id !== item.id);
      }

      return [item, ...current];
    });
  }

  function isFavorite(id) {
    return favorites.some((item) => item.id === id);
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites deve ser usado dentro de FavoritesProvider");
  }

  return context;
}