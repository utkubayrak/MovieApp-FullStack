import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as MovieService from "../service/MovieService";

export default function MovieCard() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // Sayfa yüklendiğinde verileri al
    getAllMovies();
  }, []);
  function getAllMovies() {
    MovieService.allMoviesService()
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Movie List Alınamadı: ', error);
      })
  }


  return (
    <>
      {movies.map((movie) => (
        <div class="col-6 col-md-4 col-xl-2 d-flex justify-content-center ">
          <div class="card movie-card">
            <a href={`/details/${movie.id}`}>
              <div class="movie-image-container">
                <div className="rating card-overlay ">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      class="bi bi-star-fill"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    {movie.movieRank}
                  </span>
                </div>
                <div className="bookmark card-overlay">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      class="bi bi-plus-lg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                      />
                    </svg>
                    {movie.ageLimit}
                  </span>
                </div>
                <img
                  class="card-img-top movie-image"
                  src={movie.posterUrl}
                  alt="Movie Image"
                />
              </div>
              <span class="card-title">{movie.title}</span>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
