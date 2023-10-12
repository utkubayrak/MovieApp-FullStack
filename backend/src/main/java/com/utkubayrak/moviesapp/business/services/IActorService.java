package com.utkubayrak.moviesapp.business.services;

import com.utkubayrak.moviesapp.business.dto.MovieDto;
import com.utkubayrak.moviesapp.data.entities.ActorEntity;
import com.utkubayrak.moviesapp.data.entities.MovieEntity;

import java.util.List;
import java.util.Set;

public interface IActorService<D,E> {

    //Tüm aktörleri listele
    public List<D> actorServiceList();

    //Bir aktörün tüm filmlerini listele

    public List<MovieDto> actorMovieList(Long id);

}
