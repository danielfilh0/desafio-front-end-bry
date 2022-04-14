import { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { Link, useParams } from "react-router-dom";
import { MoviesContext } from "../../contexts/MoviesContext";
import { Container } from "./styles";
import { CharacterCard } from "../../components/CharacterCard";
import usersImg from "../../assets/users.svg";
import userImg from "../../assets/user.svg";
import balloonsImg from "../../assets/balloons.svg";
import likeImg from "../../assets/like.svg";
import deslikeImg from "../../assets/deslike.svg";

export function Movie() {
    const [movie, setMovie] = useState(null);
    const { movies } = useContext(MoviesContext);

    const params = useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [isValidEmail, setIsValidEmail] = useState(true);

    const [comments, setComments] = useState([]);

    useEffect(() => {
        let id = Number(params.id);

        setMovie(movies.filter((film) => film.episode_id === id));

        if (localStorage.getItem(`comments${params.id}`)) {
            setComments(
                JSON.parse(localStorage.getItem(`comments${params.id}`))
            );
        }
    }, []);

    function validateEmail() {
        const regex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        return regex.test(email);
    }

    function handleSendComment(event) {
        event.preventDefault();

        if (validateEmail()) {
            const newComments = [
                ...comments,
                {
                    name,
                    email,
                    message,
                    likes: 0,
                    deslikes: 0,
                },
            ].reverse();

            setComments(newComments);

            localStorage.setItem(
                `comments${params.id}`,
                JSON.stringify(newComments)
            );

            setName("");
            setEmail("");
            setMessage("");
        } else {
            setIsValidEmail(false);
        }
    }

    return (
        <Container>
            {movie !== null && (
                <>
                    <section className="banner">
                        <h1>{movie[0].title}</h1>
                    </section>

                    <section className="description">
                        <Link to="/">&lt;&lt; Back</Link>

                        <p>{movie[0].opening_crawl}</p>
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
                            {movie[0].characters.map((character, i) => (
                                <SwiperSlide key={i}>
                                    <CharacterCard endpoint={character} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>

                    <section className="reviews">
                        <h2>
                            <img src={balloonsImg} alt="Ícone de personagens" />
                            Reviews
                        </h2>

                        <form onSubmit={handleSendComment}>
                            <input
                                type="text"
                                placeholder="Nome"
                                id="name"
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                id="email"
                                className={isValidEmail ? "email" : "email-invalid"}
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                
                            />

                            <textarea
                                placeholder="Comentário"
                                value={message}
                                onChange={(event) =>
                                    setMessage(event.target.value)
                                }
                            />

                            <button type="submit">Enviar</button>
                        </form>

                        <div className="comments">
                            {comments.map((comment, i) => (
                                <Comment
                                    key={i}
                                    name={comment.name}
                                    message={comment.message}
                                    comments={comments}
                                    id={i}
                                />
                            ))}
                        </div>
                    </section>
                </>
            )}
        </Container>
    );
}

function Comment({ name, message, comments, id }) {
    const [likes, setLikes] = useState(0);
    const [deslikes, setDeslikes] = useState(0);

    const params = useParams();

    useEffect(() => {
        if (localStorage.getItem(`comments${params.id}`)) {
            setLikes(comments[id].likes);
            setDeslikes(comments[id].deslikes);
        }
    }, []);

    useEffect(() => {
        comments[id].likes = likes;
        localStorage.setItem(`comments${params.id}`, JSON.stringify(comments));
    }, [likes]);

    useEffect(() => {
        comments[id].deslikes = deslikes;
        localStorage.setItem(`comments${params.id}`, JSON.stringify(comments));
    }, [deslikes]);

    return (
        <div className="comment">
            <img src={userImg} alt={`Foto de ${name}`} />

            <div>
                <p>{message}</p>

                <div>
                    <button
                        type="button"
                        className="deslike"
                        onClick={() => setDeslikes(deslikes + 1)}
                    >
                        <span>{deslikes}</span>

                        <img src={deslikeImg} alt="Ícone de deslike" />
                    </button>

                    <button
                        type="button"
                        className="like"
                        onClick={() => setLikes(likes + 1)}
                    >
                        <span>{likes}</span>

                        <img src={likeImg} alt="Ícone de like" />
                    </button>
                </div>
            </div>
        </div>
    );
}
