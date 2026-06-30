import { useEffect, useState } from "react";

import MovieGrid from "../MovieGrid/MovieGrid";

import {
    getSimilarMovies,
    getSimilarSeries,
} from "../../services/api";

import "./SimilarMovies.css";

import Carousel from "../Carousel/Carousel";

import MovieCard from "../MovieCard/MovieCard";

function SimilarMovies({ id, isMovie }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        loadMovies();

    }, [id]);

    async function loadMovies() {

        try {

            const data = isMovie
                ? await getSimilarMovies(id)
                : await getSimilarSeries(id);

            setMovies(data.results.slice(0, 12));

        } catch (error) {

            console.error(error);

        }

    }

    if (!movies.length) return null;

    return (

        <section className="similar">

            <h2>

                🍿 Você também pode gostar

            </h2>

            <Carousel>

                {

                    movies.map(movie => (

                        <MovieCard

                            key={movie.id}

                            movie={movie}

                        />

                    ))

                }

            </Carousel>

        </section>

    );

    if (loading) {

        return (

            <div className="similar">

                <h2>🍿 Você também pode gostar</h2>

                <div className="grid">

                    {

                        Array.from({ length: 6 }).map((_, index) => (

                            <SkeletonCard key={index} />

                        ))

                    }

                </div>

            </div>

        )

    }

}

export default SimilarMovies;