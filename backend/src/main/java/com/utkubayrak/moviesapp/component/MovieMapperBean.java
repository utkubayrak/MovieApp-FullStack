package com.utkubayrak.moviesapp.component;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MovieMapperBean {
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
