package com.utkubayrak.moviesapp.business.dto;

import com.utkubayrak.moviesapp.data.entities.MovieEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ActorDto {

    private Long id;
    private String name;
    private String actorPosterUrl;

    private Set<MovieEntity> movies = new HashSet<>();
}
