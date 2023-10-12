package com.utkubayrak.moviesapp.data.repository;

import com.utkubayrak.moviesapp.data.entities.EGenre;
import com.utkubayrak.moviesapp.data.entities.MovieEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface IMovieRepository extends JpaRepository<MovieEntity, Long> {
    List<MovieEntity> findByGenresContaining(EGenre genre);

}
