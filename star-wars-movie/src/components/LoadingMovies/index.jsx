import { Container } from "./styles";

export function LoadingMovies() {
    return (
        <Container>
            <div className="skeleton">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="skeleton">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="skeleton">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Container>
    )
}