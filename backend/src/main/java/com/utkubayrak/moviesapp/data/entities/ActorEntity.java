package com.utkubayrak.moviesapp.data.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Set;

@Getter
@Setter

@AllArgsConstructor
@NoArgsConstructor
@Builder

@Entity
@Table(name = "actor")
public class ActorEntity implements Serializable {
    public static final Long serialVersionUID = 1L;


    @Id
    @Column(name = "actor_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String actorPosterUrl;


    @ManyToMany(mappedBy = "actors", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @OrderBy("id") // ID'ye göre sıralama

    @JsonIgnore
    private Set<MovieEntity> movies;
}
