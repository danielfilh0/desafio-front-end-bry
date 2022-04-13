import { Container } from "./styles";
import movieImg from "../../assets/movie-img.svg";
import chairImg from "../../assets/chair.svg";
import calendarImg from "../../assets/calendar.svg";

export function MovieCard({ title, text, director, date, loading }) {
    if (loading) {
        return (
            <Container>
                <div className="skeleton"></div>
            </Container>
        );
    } else {
        return (
            <Container>
                <img src={movieImg} alt={`Imagem do filme ${title}`} />

                <div className="description">
                    <h3>{title}</h3>

                    <p>{text}</p>
                </div>

                <div className="details">
                    <div>
                        <img src={chairImg} alt="Ícone de diretor" />

                        <span>{director}</span>
                    </div>

                    <div>
                        <img src={calendarImg} alt="Ícone de calendário" />

                        <span>{date}</span>
                    </div>
                </div>
            </Container>
        );
    }
}
