import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import searchImg from "../../assets/search.svg";
import starImg from "../../assets/star.svg";
import usersImg from "../../assets/users.svg";
import "swiper/css";
import { MovieCard } from "../../components/MovieCard";
import { CharacterCard } from "../../components/CharacterCard";
import axios from "axios";

export function Home() {
    const [isSearching, setIsSearching] = useState(false);
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [researchMovies, setResearchMovies] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [researchCharacters, setResearchCharacters] = useState([]);
    const [loadingMovies, setLoadingMovies] = useState(false);
    const [loadingCharacters, setLoadingCharacters] = useState(false);
    const [endpointsCharacters, setEndpointsCharacters] = useState([]);

    async function getMoviesFromApi() {
        const response = await api.get("films");

        setMovies(response.data.results);
    }

    async function getCharactersFromApi() {
        setLoadingCharacters(true);

        const response = await api.get("people");

        setEndpointsCharacters([response.data.next]);

        setCharacters(response.data.results);

        setLoadingCharacters(false);
    }

    async function loadMoreCharacters(e) {
        setLoadingCharacters(true);

        if (e.isEnd) {
            const response = await axios.get(
                endpointsCharacters[endpointsCharacters.length - 1]
            );

            if (response.data.next) {
                setEndpointsCharacters([
                    ...endpointsCharacters,
                    response.data.next,
                ]);
                setCharacters([...characters, ...response.data.results]);
            }
        }

        setLoadingCharacters(false);
    }

    async function getCharacterFromApi(endpoint) {
        const response = await axios.get(
            `https://swapi.dev/api/people/?search=${endpoint}`
        );

        setResearchCharacters(response.data.results);
    }

    function handleSubmit(e) {
        e.preventDefault();

        setIsSearching(true);

        setResearchMovies(
            movies.filter((movie) =>
                movie.title.toLowerCase().includes(search.toLowerCase())
            )
        );

        getCharacterFromApi(search);
    }

    function clearStates() {
        setIsSearching(false);
        setSearch("");
    }

    useEffect(() => {
        setLoadingMovies(true);

        getMoviesFromApi();

        setLoadingMovies(false);

        getCharactersFromApi();
    }, []);

    return (
        <Container>
            <section className="banner">
                <h1>Star Wars movies</h1>

                <form onSubmit={handleSubmit}>
                    <fieldset>
                        {search.length > 0 && (
                            <legend>Search movies or characters</legend>
                        )}

                        <input
                            type="text"
                            placeholder="Search movies or characters"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />

                        <button type="submit">
                            <img src={searchImg} alt="Ícone de pesquisar" />
                        </button>
                    </fieldset>
                </form>
            </section>

            {!isSearching ? (
                <>
                    <section className="movies">
                        <h2>
                            <img src={starImg} alt="Ícone de filmes" />
                            Movies
                        </h2>

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
                                    <MovieCard
                                        title={movie.title}
                                        text={movie.opening_crawl}
                                        director={movie.director}
                                        date={movie.release_date}
                                        loading={loadingMovies}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>

                    <section className="characters">
                        <h2>
                            <img src={usersImg} alt="Ícone de personagens" />
                            Characters
                        </h2>

                        <Swiper
                            className="carousel"
                            navigation
                            modules={[Navigation]}
                            slidesPerView={1.4}
                            onSlideChange={(e) => loadMoreCharacters(e)}
                            spaceBetween={30}
                            breakpoints={{
                                500: {
                                    slidesPerView: 2.2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {characters.map((character, i) => (
                                <SwiperSlide key={i}>
                                    <CharacterCard
                                        name={character.name}
                                        homeworld={character.homeworld}
                                        loading={loadingCharacters}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>
                </>
            ) : (
                <section className="results">
                    <div className="title">
                        <button type="button" onClick={clearStates}>
                            &lt;&lt; Back
                        </button>

                        <p>Search result</p>
                    </div>

                    {researchMovies.length === 0 &&
                        researchCharacters.length === 0 && (
                            <div className="not-found">
                                <p>Not found</p>
                            </div>
                        )}

                    {researchMovies.length > 0 && (
                        <div className="movies">
                            <h2>
                                <img src={starImg} alt="Ícone de filmes" />
                                Movies
                            </h2>

                            <Swiper
                                className="carousel"
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
                                {researchMovies.map((researchMovie, i) => (
                                    <SwiperSlide key={i}>
                                        <MovieCard
                                            title={researchMovie.title}
                                            text={researchMovie.opening_crawl}
                                            director={researchMovie.director}
                                            date={researchMovie.release_date}
                                            loading={loadingMovies}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )}

                    {researchCharacters.length > 0 && (
                        <div className="characters">
                            <h2>
                                <img
                                    src={usersImg}
                                    alt="Ícone de personagens"
                                />
                                Characters
                            </h2>

                            <Swiper
                                className="carousel"
                                navigation
                                watchOverflow
                                modules={[Navigation]}
                                slidesPerView={1.4}
                                spaceBetween={30}
                                breakpoints={{
                                    500: {
                                        slidesPerView: 2.2,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                    },
                                }}
                            >
                                {researchCharacters.map(
                                    (researchCharacter, i) => (
                                        <SwiperSlide key={i}>
                                            <CharacterCard
                                                name={researchCharacter.name}
                                                homeworld={
                                                    researchCharacter.homeworld
                                                }
                                                loading={loadingCharacters}
                                            />
                                        </SwiperSlide>
                                    )
                                )}
                            </Swiper>
                        </div>
                    )}
                </section>
            )}
        </Container>
    );
}
