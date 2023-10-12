package com.utkubayrak.moviesapp.business.services.impl;


import com.utkubayrak.moviesapp.business.dto.MovieInfoDto;
import com.utkubayrak.moviesapp.component.MovieMapper;
import com.utkubayrak.moviesapp.business.dto.MovieDto;
import com.utkubayrak.moviesapp.business.services.IMovieService;
import com.utkubayrak.moviesapp.data.entities.ActorEntity;
import com.utkubayrak.moviesapp.data.entities.EGenre;
import com.utkubayrak.moviesapp.data.entities.MovieEntity;
import com.utkubayrak.moviesapp.data.repository.IActorRepository;
import com.utkubayrak.moviesapp.data.repository.IMovieRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class MovieServiceImpl implements IMovieService<MovieDto, MovieEntity, MovieInfoDto> {
    private final IMovieRepository movieRepository;
    private final IActorRepository actorRepository;
    private final MovieMapper movieMapper;


    //CREATE
    @Override
    public MovieDto addMovie(MovieDto movieDto) {
        // MovieDto'yu MovieEntity'ye dönüştürün
        MovieEntity movieEntity = movieMapper.movieDtoToEntity(movieDto);

        // Filmin türlerini kontrol et ve mevcutları sakla
        Set<EGenre> existingGenres = new HashSet<>();
        for (EGenre genre : movieDto.getGenres()) {
            existingGenres.add(genre);
        }


        // Aktörleri kontrol et ve mevcutları sakla
        Set<ActorEntity> existingActors = new HashSet<>();
        for (ActorEntity actor : movieEntity.getActors()) {
            ActorEntity existingActor = actorRepository.findByName(actor.getName());
            if (existingActor != null) {
                existingActors.add(existingActor);
            } else {
                existingActors.add(actor);
            }
        }

        // Film entity'sini güncelle ve yeni türleri ve aktörleri ekleyin

        movieEntity.setActors(existingActors);

        // Film entity'sini kaydet
        movieRepository.save(movieEntity);

        // MovieEntity'yi MovieDto'ya dönüştürün ve geri döndürün
        return movieMapper.movieEntityToDto(movieEntity);
    }

    //LIST

    @Override
    public List<MovieInfoDto> getInfoMovie() {
        List<MovieEntity> movieEntities = movieRepository.findAll();
        return movieEntities.stream()
                .map(movieMapper::movieEntityToInfoDto)
                .collect(Collectors.toList());
    }



    //DELETE
    @Transactional
    @Override
    public Map<MovieEntity, Boolean> deleteMovie(Long id) {
        Map<MovieEntity, Boolean> result = new HashMap<>();
        Optional<MovieEntity> movieEntityOptional = movieRepository.findById(id);
        if (movieEntityOptional.isPresent()) {
            MovieEntity movieToDelete = movieEntityOptional.get();

            // Film ile ilişkilendirilen kategorileri ve aktörleri kaldırın
            movieToDelete.getGenres().clear();
            movieToDelete.getActors().clear();

            // Filmı silin
            movieRepository.deleteById(id);

            result.put(movieToDelete, true);
        } else {
            result.put(null, false);
        }
        return result;
    }


    //UPDATE
    @Transactional
    @Override
    public MovieDto updateMovie(Long id, MovieDto movieDto) {
        Optional<MovieEntity> existingMovieOptional = movieRepository.findById(id);
        if (existingMovieOptional.isPresent()) {
            MovieEntity existingMovie = existingMovieOptional.get();

            // MovieDto'yu MovieEntity'ye dönüştürün ve güncelleme yapılacak alanları kopyalayın
            MovieEntity updatedMovieEntity = movieMapper.movieDtoToEntity(movieDto);
            existingMovie.setTitle(updatedMovieEntity.getTitle());
            existingMovie.setDescription(updatedMovieEntity.getDescription());
            existingMovie.setReleaseYear(updatedMovieEntity.getReleaseYear());
            existingMovie.setTrailerUrl(updatedMovieEntity.getTrailerUrl());
            existingMovie.setMovieRank(updatedMovieEntity.getMovieRank());
            existingMovie.setDirector(updatedMovieEntity.getDirector());
            existingMovie.setPosterUrl(updatedMovieEntity.getPosterUrl());
            existingMovie.setAgeLimit(updatedMovieEntity.getAgeLimit());
            existingMovie.setGenres(new HashSet<>(movieDto.getGenres()));

            // Aktörleri güncelle
            Set<ActorEntity> updatedActors = new HashSet<>();
            for (ActorEntity actor : updatedMovieEntity.getActors()) {
                ActorEntity existingActor = actorRepository.findByName(actor.getName());
                if (existingActor != null) {
                    updatedActors.add(existingActor);
                } else {
                    updatedActors.add(actor);
                }
            }
            existingMovie.setActors(updatedActors);

            // Film entity'sini kaydet
            movieRepository.save(existingMovie);

            // Güncellenmiş MovieEntity'yi MovieDto'ya dönüştürün ve geri döndürün
            return movieMapper.movieEntityToDto(existingMovie);
        }

        // Hata işleme
        return null;
    }

    public List<MovieEntity> getMoviesByGenre(EGenre genre) {
        return movieRepository.findByGenresContaining(genre);
    }
    //FIND
    @Override
    public Optional<MovieDto> findMovieById(Long id) {
        Optional<MovieEntity> movieEntityOptional = movieRepository.findById(id);
        if (movieEntityOptional.isPresent()) {
            MovieEntity movieEntity = movieEntityOptional.get();
            MovieDto movieDto = movieMapper.movieEntityToDto(movieEntity);
            return Optional.of(movieDto);
        } else {
            return Optional.empty();
        }
    }


}
