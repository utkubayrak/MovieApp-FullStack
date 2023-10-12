import React, { useEffect, useState } from 'react';
import { movieServiceByGenre } from '../service/MovieService';
import Header from '../components/Header';
import { useParams, useNavigate } from 'react-router-dom'; // useParams'ı ekledik

export default function CategoryMovies() {
    const { categoryName } = useParams(); // Parametre adını alıyoruz
    const navigate = useNavigate(); // Parametre adını alıyoruz

    function formatName(categoryName) {
        switch (categoryName) {
            case "aksiyon":
                return "AKSIYON";
            case "komedi":
                return "KOMEDI";
            case "drama":
                return "DRAMA";
            case "bilim_kurgu":
                return "BILIM_KURGU";
            case "fantastik":
                return "FANTASTIK";
            case "gerilim":
                return "GERILIM";
            case "korku":
                return "KORKU";
            case "romantik":
                return "ROMANTIK";
            case "biyografi":
                return "BIYOGRAFI";
            case "animasyon":
                return "ANIMASYON";
            case "aile":
                return "AILE";
            case "belgesel":
                return "BELGESEL";
            case "gizem":
                return "GIZEM";
            case "savaş":
                return "SAVAS";
            case "tarih":
                return "TARIH";
            case "spor":
                return "SPOR";
            case "polisiye":
                return "POLISIYE";
            default:
                return categoryName;
        }
    }
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        // Kategoriye göre filmleri almak için servisi çağırın
        const serviceName = formatName(categoryName);
        console.log(serviceName);
        movieServiceByGenre(serviceName)
            .then((response) => {
                setMovies(response.data);
            })
            .catch((error) => {
                console.error('Movie List Alınamadı: ', error);
                navigate('/404')
            });
    }, [categoryName]);


    return (
        <>
            <Header></Header>

            <div class="container category-movies movie-cards mb-5">
                <div class="row ">
                    {movies.map((movie) => (
                        <div class="col-6 col-md-3 d-flex justify-content-center ">
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
                </div>
            </div>

        </>
    )
}
