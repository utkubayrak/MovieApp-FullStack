import React from 'react'
import MovieCard from '../components/MovieCard'
import Header from '../components/Header'
import Slider from '../components/Slider'
export default function Home() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <Slider></Slider>
            </div>
            <div class="container movie-cards mb-5">
                <div class="row ">
                    <MovieCard></MovieCard>
                </div>
            </div>
        </>
    )
}
