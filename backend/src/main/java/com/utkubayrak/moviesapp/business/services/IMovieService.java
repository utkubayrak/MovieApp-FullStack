package com.utkubayrak.moviesapp.business.services;

import com.utkubayrak.moviesapp.data.entities.MovieEntity;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface IMovieService<D, E, M> {
    // Model Mapper


    public D addMovie(D d);



    public List<M> getInfoMovie();
    public Map<MovieEntity, Boolean> deleteMovie(Long id);
    public D updateMovie(Long id,D d);

    public Optional<D> findMovieById(Long id);

}
