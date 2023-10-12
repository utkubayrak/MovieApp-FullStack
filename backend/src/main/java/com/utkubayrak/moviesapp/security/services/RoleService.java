package com.utkubayrak.moviesapp.security.services;

import com.utkubayrak.moviesapp.data.entities.ERole;
import com.utkubayrak.moviesapp.data.entities.RoleEntity;
import com.utkubayrak.moviesapp.data.repository.IRoleRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService {
    @Autowired
    private IRoleRepository roleRepository;

    @PostConstruct
    public void initRoles() {
        for (ERole role : ERole.values()) {
            Optional<RoleEntity> optionalRole = roleRepository.findByName(role);
            if (optionalRole.isEmpty()) {
                RoleEntity newRole = new RoleEntity();
                newRole.setName(role);
                roleRepository.save(newRole);
            }
        }
    }
}
