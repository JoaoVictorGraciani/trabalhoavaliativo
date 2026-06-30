import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { FavoritesProvider } from "./context/FavoritesContext";
import { ThemeProvider } from "./context/ThemeContext";

import "./styles/global.css";
import { WatchHistoryProvider } from "./context/WatchHistoryContext";

ReactDOM.createRoot(document.getElementById("root")).render(
<ThemeProvider>
  <FavoritesProvider>
    <WatchHistoryProvider>
      <App />
    </WatchHistoryProvider>
  </FavoritesProvider>
</ThemeProvider>
);