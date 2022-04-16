import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { LoadingMovies } from "../LoadingMovies";
import { MovieCard } from "../MovieCard";

export function MoviesCarousel({ movies, loading }) {
    if (loading) {
        return (
            <LoadingMovies />
        )
    }
    
    return (
        <Swiper
            className="carousel"
            loop
            navigation
            modules={[Navigation]}
            slidesPerView={1.3}
            spaceBetween={30}
            breakpoints={{
                550: {
                    slidesPerView: 2.5,
                },
                768: {
                    slidesPerView: 3,
                },
            }}
        >
            {movies.map((movie, i) => (
                <SwiperSlide key={i}>
                    <Link to={`/movies/${movie.episode_id}`}>
                        <MovieCard
                            title={movie.title}
                            text={movie.opening_crawl}
                            director={movie.director}
                            date={movie.release_date}
                        />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
