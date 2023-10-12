package com.utkubayrak.moviesapp.business.dto;


import com.utkubayrak.moviesapp.data.entities.ActorEntity;
import com.utkubayrak.moviesapp.data.entities.EGenre;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MovieDto {

    private Long id;
    private String title;
    private  String posterUrl;
    private String trailerUrl;
    private String description;
    private String director;
    private Short releaseYear;
    private String movieRank;
    private String ageLimit;

    private Set<ActorEntity> actors = new HashSet<>();
    private Set<EGenre> genres = new HashSet<>();

}
