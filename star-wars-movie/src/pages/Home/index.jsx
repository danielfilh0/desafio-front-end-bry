import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { api } from "../../services/api";
import { Container } from "./styles";
import searchImg from "../../assets/search.svg";
import starImg from "../../assets/star.svg";
import usersImg from "../../assets/users.svg";
import "swiper/css";
import { MoviesContext } from "../../contexts/MoviesContext";
import { CharactersCarousel } from "../../components/CharactersCarousel";
import { MoviesCarousel } from "../../components/MoviesCarousel";

export function Home() {
    const [isSearching, setIsSearching] = useState(false);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState("");

    const [characters, setCharacters] = useState([]);

    const { movies, setMovies } = useContext(MoviesContext);

    const [researchMovies, setResearchMovies] = useState([]);
    const [researchCharacters, setResearchCharacters] = useState([]);

    const [endpointsCharacters, setEndpointsCharacters] = useState([]);

    const [loadingMovies, setLoadingMovies] = useState(false);
    const [loadingChars, setLoadingChars] = useState(false);

    async function getMoviesFromApi() {
        setLoadingMovies(true);

        const response = await api.get("films");

        setMovies(response.data.results);

        setLoadingMovies(false);
    }

    async function getCharactersFromApi() {
        setLoadingChars(true);

        const response = await api.get("people");

        setEndpointsCharacters([response.data.next]);

        setCharacters(response.data.results);

        setLoadingChars(false);
    }

    async function loadMoreCharacters(e) {
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
    }

    async function getCharacterFromApi(endpoint) {
        const response = await axios.get(
            `https://swapi.dev/api/people/?search=${endpoint}`
        );

        setResearchCharacters(response.data.results);
    }

    function handleSearch(e) {
        e.preventDefault();

        setIsSearching(true);

        setResearchMovies(
            movies.filter((movie) =>
                movie.title.toLowerCase().includes(search.toLowerCase())
            )
        );

        setSearchResult(search);
        getCharacterFromApi(search);
    }

    function clearStates() {
        setIsSearching(false);
        setSearch("");
    }

    useEffect(() => {
        getMoviesFromApi();

        getCharactersFromApi();
    }, []);

    return (
        <Container>
            <section className="banner">
                <h1>Star Wars movies</h1>

                <form onSubmit={handleSearch}>
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

                        <MoviesCarousel
                            movies={movies}
                            loading={loadingMovies}
                            loop
                        />
                    </section>

                    <section className="characters">
                        <h2>
                            <img src={usersImg} alt="Ícone de personagens" />
                            Characters
                        </h2>

                        <CharactersCarousel
                            characters={characters}
                            onSlideChange={(e) => loadMoreCharacters(e)}
                            loading={loadingChars}
                            setLoading={setLoadingChars}
                        />
                    </section>
                </>
            ) : (
                <section className="results">
                    <div className="title">
                        <button type="button" onClick={clearStates}>
                            &lt;&lt; Back
                        </button>

                        <p>Search result: {searchResult}</p>
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

                            <MoviesCarousel movies={researchMovies} />
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

                            <CharactersCarousel
                                characters={researchCharacters}
                                loading={loadingChars}
                            />
                        </div>
                    )}
                </section>
            )}
        </Container>
    );
}
