import React, { useState, useEffect } from "react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import * as MovieService from "../service/MovieService";

export default function Slider() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // Sayfa yüklendiğinde verileri al
    getAllMovies();
  }, []);
  function getAllMovies() {
    MovieService.allMoviesService()
      .then((response) => {
        setMovies(response.data.slice(0, 10));
      })
      .catch((error) => {
        console.error('Movie List Alınamadı: ', error);
      })
  }
  return (
    <>
      <Swiper
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          depth: 150,
          slideShadows: false,
        }}
        grabCursor={true}
        spaceBetween={15}
        slidesPerView={"auto"}
        loop={true}
        centeredSlides={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Pagination, EffectCoverflow, Navigation]}
        className="swiper-container"
      >
        {movies.map((movie) => (
          <SwiperSlide>
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

          </SwiperSlide>
        ))};
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
          <div className="swiper-button-next slider-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </Swiper>
    </>
  );
}
