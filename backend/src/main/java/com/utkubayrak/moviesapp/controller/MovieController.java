package com.utkubayrak.moviesapp.controller;

import com.utkubayrak.moviesapp.business.dto.MovieDto;
import com.utkubayrak.moviesapp.business.dto.MovieInfoDto;
import com.utkubayrak.moviesapp.business.services.impl.ActorServiceImpl;
import com.utkubayrak.moviesapp.business.services.impl.MovieServiceImpl;
import com.utkubayrak.moviesapp.data.entities.EGenre;
import com.utkubayrak.moviesapp.data.entities.MovieEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/movies")
public class MovieController {
    @Autowired
    private final MovieServiceImpl movieService;

    @Autowired
    private final ActorServiceImpl actorService;

    //Filmlerin gerekli bilgilerini listele
    @GetMapping("/infolist")
    public  ResponseEntity<List<MovieInfoDto>> listInfoMovie(){
       return ResponseEntity.ok(movieService.getInfoMovie());
    }
    @GetMapping("/details/{id}")
    public ResponseEntity<Optional<MovieDto>> getMovieById(@PathVariable(name = "id", required = false) Long id){
        return ResponseEntity.ok(movieService.findMovieById(id));
    }
    @PostMapping("/add")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<?> addMovie(@RequestBody MovieDto movieDto) {
        return ResponseEntity.ok(movieService.addMovie(movieDto));
    }
    //Update Movie
    @PutMapping("/update/{id}")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<?> updateMovie(@PathVariable(name = "id", required = false) Long id, @RequestBody MovieDto updatedMovie) {
        return ResponseEntity.ok(movieService.updateMovie(id, updatedMovie));
    }
    //Delete movie
    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<?> deleteMovieById(@PathVariable(name = "id", required = false) Long id) {
        return ResponseEntity.ok(movieService.deleteMovie(id));
    }
    @GetMapping("/actors")
    public ResponseEntity<?> actorList() {
        return ResponseEntity.ok(actorService.actorServiceList());
    }
    @GetMapping("/actormovies/{id}")
    public ResponseEntity<?> actorMovieList(@PathVariable(name = "id", required = false) Long id){
        return ResponseEntity.ok(actorService.actorMovieList(id));
    }
    @GetMapping("/byGenre/{name}")
    public ResponseEntity<List<MovieEntity>> getMoviesByGenre(@PathVariable String name) {
        List<MovieEntity> movies = movieService.getMoviesByGenre(EGenre.valueOf(name));
        return ResponseEntity.ok(movies);
    }
     /*
    //Actor movies
    @GetMapping("/listactors{id}")
    public ResponseEntity<?> listMoviesByActor(@PathVariable(name = "id", required = false) Long id){
        return ResponseEntity.ok(actorService.actorMovieServiceList(id));
    }

/*
    @GetMapping("/user")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public String userAccess() {
        return "User Content.";
    }

    @GetMapping("/mod")
    @PreAuthorize("hasRole('MODERATOR')")
    public String moderatorAccess() {
        return "Moderator Board.";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess() {
        return "Admin Board.";
    }
    */

}
