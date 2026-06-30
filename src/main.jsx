import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { FavoritesProvider } from "./context/FavoritesContext";
import { ThemeProvider } from "./context/ThemeContext";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </ThemeProvider>
  </React.StrictMode>
);