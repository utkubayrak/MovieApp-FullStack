package com.utkubayrak.moviesapp.data.repository;

import com.utkubayrak.moviesapp.data.entities.ActorEntity;
import com.utkubayrak.moviesapp.data.entities.MovieEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface IActorRepository extends JpaRepository<ActorEntity, Long> {
    Set<ActorEntity> findByNameIn(List<String> name);

    ActorEntity findByName(String name);


}
