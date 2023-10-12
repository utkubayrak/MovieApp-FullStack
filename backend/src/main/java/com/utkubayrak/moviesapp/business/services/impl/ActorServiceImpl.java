package com.utkubayrak.moviesapp.business.services.impl;

import com.utkubayrak.moviesapp.business.dto.ActorDto;
import com.utkubayrak.moviesapp.business.dto.MovieDto;
import com.utkubayrak.moviesapp.business.services.IActorService;
import com.utkubayrak.moviesapp.component.MovieMapper;
import com.utkubayrak.moviesapp.data.entities.ActorEntity;
import com.utkubayrak.moviesapp.data.entities.MovieEntity;
import com.utkubayrak.moviesapp.data.repository.IActorRepository;
import com.utkubayrak.moviesapp.data.repository.IMovieRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
public class ActorServiceImpl implements IActorService<ActorDto, ActorEntity> {
    private final IMovieRepository movieRepository;
    private final IActorRepository actorRepository;
    private final MovieMapper movieMapper;

    //Actor List
    @Override
    public List<ActorDto> actorServiceList() {
        List<ActorEntity> actorEntities = actorRepository.findAll();

        return actorEntities.stream()
                .map(movieMapper::actorEntityToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<MovieDto> actorMovieList(Long id) {
        Optional<ActorEntity> actor = actorRepository.findById(id);
        if (actor != null) {
            Set<MovieEntity> movies = actor.get().getMovies();
            return movies.stream()
                    .map(movieMapper::movieEntityToDto)
                    .collect(Collectors.toList());
        } else {
            // Belirtilen tür bulunamadıysa veya türün hiç filmi yoksa boş bir liste döndürebilirsiniz.
            return Collections.emptyList();
        }
    }

}
