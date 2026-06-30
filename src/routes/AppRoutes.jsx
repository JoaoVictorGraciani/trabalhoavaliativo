import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import Series from "../pages/Series/Series";
import Favorites from "../pages/Favorites/Favorites";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Dashboard from "../pages/Dashboard/Dashboard";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/movies"
            element={<Movies />}
          />

          <Route
            path="/series"
            element={<Series />}
          />

          <Route
            path="/favorites"
            element={<Favorites />}
          />

          {/* Filme */}

          <Route
            path="/movie/:id"
            element={<MovieDetails />}
          />

          {/* Série */}

          <Route
            path="/tv/:id"
            element={<MovieDetails />}
          />

          <Route path="/dashboard" element={<Dashboard />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;