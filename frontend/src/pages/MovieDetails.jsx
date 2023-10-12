import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import * as MovieService from "../service/MovieService";
export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Sayfa yüklendiğinde verileri al
    getMovieDetail(id);
  }, [id]); // id değiştiğinde tekrar istek yap
  function formatGenre(genre) {
    switch (genre) {
      case "AKSIYON":
        return "Aksiyon";
      case "KOMEDI":
        return "Komedi";
      case "DRAMA":
        return "Drama";
      case "BILIM_KURGU":
        return "Bilim Kurgu";
      case "FANTASTIK":
        return "Fantastik";
      case "GERILIM":
        return "Gerilim";
      case "KORKU":
        return "Korku";
      case "ROMANTIK":
        return "Romantik";
      case "BIYOGRAFI":
        return "Biyografi";
      case "ANIMASYON":
        return "Animasyon";
      case "AILE":
        return "Aile";
      case "BELGESEL":
        return "Belgesel";
      case "GIZEM":
        return "Gizem";
      case "SAVAS":
        return "Savaş";
      case "TARIH":
        return "Tarih";
      case "SPOR":
        return "Spor";
      case "POLISIYE":
        return "Polisiye";
      default:
        return genre;
    }
  }


  function getMovieDetail(id) {

    MovieService.findByMovie(id)
      .then((response) => {
        console.log(response);
        console.log("veri boş alında");
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('Movie Alınamadı: ', error);
        navigate('/404');

      })
  }

  return (
    <>
      <Header></Header>
      <div className="container-fluid movie-details-container bg-margin">
        <div className="row justify-content-center align-items-center ">
          <div className="col-lg-3 col-md-4 col-6">
            <img
              className="details-image"
              src={movie.posterUrl}
              alt=""
            />
          </div>
          <div className=" col-md-6 col-12">
            <div class="card bg-transparent border-0">
              <div class="card-body movie-details-card-body">
                <h5 class="card-title">{movie.title}</h5>
                <h6 class="card-subtitle mb-2 d-flex">
                  <div className="year">{movie.releaseYear}</div>
                  <div className="rating ms-4">+{movie.ageLimit}</div>
                </h6>
                <p className="card-subtitle mb-3">
                  <div className="category">  {movie.genres && movie.genres.map((genre, index) => (

                    <Link to={`/${genre.toLowerCase()}`}>
                      <span>
                        {formatGenre(genre)}
                        {index < movie.genres.length - 1 && ", "}
                      </span>
                    </Link>
                  ))}</div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trailer-button"
                    href={movie.trailerUrl}
                  >
                    <button className="d-inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-youtube me-2 "
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                      </svg>{" "}
                      Watch Trailer
                    </button>
                  </a>
                </p>
                <p class="card-text">
                  {movie.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  cast-container">
        <Swiper
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          spaceBetween={30}
          slidesPerView={"auto"}
          loop={true}
          centeredSlides={true}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="swiper-container-cast"
        >
          {movie.actors && movie.actors.map((actor) => (
            <SwiperSlide key={actor.id}>
              <div class="card cast-card bg-transparent border-0">
                <img src={actor.actorPosterUrl} class="card-img-top" alt="..." />
                <div class="card-body ">
                  <p class="card-text">{actor.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
