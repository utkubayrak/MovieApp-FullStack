package com.utkubayrak.moviesapp.component;

import com.utkubayrak.moviesapp.business.dto.ActorDto;
import com.utkubayrak.moviesapp.business.dto.MovieDto;
import com.utkubayrak.moviesapp.business.dto.MovieInfoDto;
import com.utkubayrak.moviesapp.data.entities.ActorEntity;
import com.utkubayrak.moviesapp.data.entities.MovieEntity;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class MovieMapper {
    private final ModelMapper modelMapper;

    public MovieMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public MovieDto movieEntityToDto(MovieEntity movieEntity) {
        return modelMapper.map(movieEntity, MovieDto.class);
    }

    public MovieEntity movieDtoToEntity(MovieDto movieDto) {
        return modelMapper.map(movieDto, MovieEntity.class);
    }

    public MovieInfoDto movieEntityToInfoDto(MovieEntity movieEntity) {return modelMapper.map(movieEntity, MovieInfoDto.class);
    }

    public MovieEntity movieInfoDtoToEntity(MovieInfoDto movieInfoDto) {
        return modelMapper.map(movieInfoDto, MovieEntity.class);
    }

    public ActorDto actorEntityToDto(ActorEntity actorEntity){return modelMapper.map(actorEntity, ActorDto.class);}
    public ActorEntity actorDtoToEntity(ActorDto actorDto){return modelMapper.map(actorDto, ActorEntity.class);}

}
