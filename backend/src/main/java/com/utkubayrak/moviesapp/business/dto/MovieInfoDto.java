package com.utkubayrak.moviesapp.business.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MovieInfoDto {
    private Long id;
    private String title;
    private  String posterUrl;
    private String movieRank;
    private String ageLimit;
}
