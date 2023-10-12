import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom'; // React Router kullanımı
import { addMovieService, deleteMovieService } from '../service/MovieService';
const genresList = [
  'AILE',
  'AKSIYON',
  'ANIMASYON',
  'BELGESEL',
  'BILIM_KURGU',
  'BIYOGRAFI',
  'DRAMA',
  'FANTASTIK',
  'GERILIM',
  'GIZEM',
  'KOMEDI',
  'KORKU',
  'POLISIYE',
  'ROMANTIK',
  'SAVAS',
  'SPOR',
  'TARIH',
];
export default function Admin() {
  const navigate = useNavigate();

  const [movieData, setMovieData] = useState({
    title: '',
    description: '',
    releaseYear: '',
    trailerUrl: '',
    movieRank: '',
    director: '',
    posterUrl: '',
    ageLimit: '',
    genres: [],
    actors: [
      { name: '', actorPosterUrl: '' },
      { name: '', actorPosterUrl: '' },
      // Daha fazla aktör eklemek için gerektiği kadar sıralayabilirsiniz.
    ],
  });
  const handleGenreChange = (e) => {
    const selectedGenres = Array.from(e.target.selectedOptions, (option) => option.value);
    setMovieData({
      ...movieData,
      genres: selectedGenres,
    });
  };
  const addActor = () => {
    const updatedActors = [...movieData.actors, { name: '', actorPosterUrl: '' }];
    setMovieData({
      ...movieData,
      actors: updatedActors,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const genresString = movieData.genres.map((genre) => genre);
      console.log(genresString);
      const response = await addMovieService({ ...movieData, genres: genresString });
      console.log('Film eklendi:', response);
      setMovieData({
        title: '',
        description: '',
        releaseYear: '',
        trailerUrl: '',
        movieRank: '',
        director: '',
        posterUrl: '',
        ageLimit: '',
        genres: [],
        actors: [
          { name: '', actorPosterUrl: '' },
          { name: '', actorPosterUrl: '' },
        ],
      });
      console.log(movieData);
    } catch (error) {
      console.error('Film ekleme hatası:', error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({
      ...movieData,
      [name]: value,
    });
  };
  const updateActor = (index, field, value) => {
    const updatedActors = [...movieData.actors];
    updatedActors[index][field] = value;
    setMovieData({
      ...movieData,
      actors: updatedActors,
    });
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    const deleteId = e.target.deleteId.value; // Silmek istediğiniz film id'si
    try {
      const response = await deleteMovieService(deleteId);
      console.log('Film silindi:', response);
      // Silme işlemi başarılı olduysa gerekli işlemleri yapabilirsiniz.
    } catch (error) {
      console.error('Film silme hatası:', error);
    }
  };
  const getCookie = (name) => {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.startsWith(cookieName)) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  };
  const roles = getCookie('roles');
  console.log(roles);

  useEffect(() => {
    if (roles === null) {
      navigate('/login');
    } else if (roles === 'ROLE_USER') {
      navigate('/');
    }
  }, [roles, navigate]);
  return (
    <>
      <Header />
      <div className="container movie-add">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <form className="d-grid" onSubmit={handleSubmit}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                value={movieData.title}
                onChange={handleChange}
                required
              />
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                placeholder="Description"
                value={movieData.description}
                onChange={handleChange}
                required
              />

              <label htmlFor="releaseYear">Release Year</label>
              <input
                type="number"
                name="releaseYear"
                id="releaseYear"
                placeholder="Release Year"
                value={movieData.releaseYear}
                onChange={handleChange}
                required
              />

              <label htmlFor="trailerUrl">Trailer URL</label>
              <input
                type="url"
                name="trailerUrl"
                id="trailerUrl"
                placeholder="Trailer URL"
                value={movieData.trailerUrl}
                onChange={handleChange}
                required
              />

              <label htmlFor="movieRank">Movie Rank</label>
              <input
                type="text"
                name="movieRank"
                id="movieRank"
                placeholder="Movie Rank"
                value={movieData.movieRank}
                onChange={handleChange}
                required
              />

              <label htmlFor="director">Director</label>
              <input
                type="text"
                name="director"
                id="director"
                placeholder="Director"
                value={movieData.director}
                onChange={handleChange}
                required
              />

              <label htmlFor="posterUrl">Poster URL</label>
              <input
                type="url"
                name="posterUrl"
                id="posterUrl"
                placeholder="Poster URL"
                value={movieData.posterUrl}
                onChange={handleChange}
                required
              />

              <label htmlFor="ageLimit">Age Limit</label>
              <input
                type="text"
                name="ageLimit"
                id="ageLimit"
                placeholder="Age Limit"
                value={movieData.ageLimit}
                onChange={handleChange}
                required
              />

              <label htmlFor="genres">Genres</label>
              <select multiple name="genres" id="genres" value={movieData.genres} onChange={handleGenreChange} required>
                {genresList.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>

              {movieData.actors.map((actor, index) => (
                <div key={index}>
                  <label htmlFor={`actorName${index}`}>Actor Name</label>
                  <input
                    type="text"
                    name={`actorName${index}`}
                    id={`actorName${index}`}
                    placeholder="Actor Name"
                    value={actor.name}
                    onChange={(e) => updateActor(index, 'name', e.target.value)}
                    required
                  />

                  <label htmlFor={`actorPoster${index}`}>Actor Poster URL</label>
                  <input
                    type="url"
                    name={`actorPoster${index}`}
                    id={`actorPoster${index}`}
                    placeholder="Actor Poster URL"
                    value={actor.actorPosterUrl}
                    onChange={(e) => updateActor(index, 'actorPosterUrl', e.target.value)}
                    required
                  />
                </div>
              ))}
              <button className="btn btn-primary login-btn mt-2" type="button" onClick={() => addActor()}>
                Add Actor
              </button>

              <button className="btn btn-primary login-btn mt-2" type="submit">
                Add Movie
              </button>
            </form>
          </div>
          <div className="col ">
            <form className="d-grid" onSubmit={handleDelete}>
              <label htmlFor="deleteId">Delete Id</label>
              <input type="text" name="deleteId" id="deleteId" />
              <button className="btn btn-primary login-btn mt-2" type="submit">
                Delete Movie
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
