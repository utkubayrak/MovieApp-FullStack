package com.utkubayrak.moviesapp.data.repository;

import com.utkubayrak.moviesapp.data.entities.ERole;
import com.utkubayrak.moviesapp.data.entities.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IRoleRepository extends JpaRepository<RoleEntity, Long> {
    Optional<RoleEntity> findByName(ERole name);
}
