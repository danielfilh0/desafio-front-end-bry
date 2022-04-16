import { LoadingCharacter } from "../LoadingCharacter";
import { Container } from "./styles";

export function LoadingCharacters() {
    return (
        <Container>
            <LoadingCharacter />
            <LoadingCharacter />
            <LoadingCharacter />
            <LoadingCharacter />
        </Container>
    );
}
