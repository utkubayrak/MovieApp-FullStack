package com.utkubayrak.moviesapp.data.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Columns;

import java.io.Serializable;
import java.util.Set;

@Getter
@Setter

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "movie")
public class MovieEntity implements Serializable {
    public static final Long serialVersionUID = 1L;

    @Id
    @Column(name = "movie_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private  String posterUrl;
    private String trailerUrl;
    @Column(name = "description", length = 3000)
    private String description;
    private String director;
    private Short releaseYear;
    private String movieRank;
    private String ageLimit;


    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "movie_actor", joinColumns = { @JoinColumn(name = "movie_id") }, inverseJoinColumns = {
            @JoinColumn(name = "actor_id") })
    @OrderBy("id") // ID'ye göre sıralama

    private Set<ActorEntity> actors;


    @ElementCollection(targetClass = EGenre.class)
    @Enumerated(EnumType.STRING)
    @CollectionTable(name = "movie_genre", joinColumns = @JoinColumn(name = "movie_id"))
    @Column(name = "genre")
    private Set<EGenre> genres;

}
