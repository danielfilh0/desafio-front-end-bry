import { useState, useEffect } from "react";
import { Container } from "./style";
import deslikeImg from "../../assets/deslike.svg";
import likeImg from "../../assets/like.svg";
import userImg from "../../assets/user.svg";

export function Comment({ name, message, comments, id, params }) {
    const [likes, setLikes] = useState(0);
    const [deslikes, setDeslikes] = useState(0);

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
        <Container>
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
        </Container>
    );
}
