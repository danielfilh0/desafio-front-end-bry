import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./styles";
import charImg from "../../assets/char-img.svg";
import gpsImg from "../../assets/gps.svg";
import loadingImg from "../../assets/loading-char.svg";

export function CharacterCard({ name, homeworld, loading }) {
    const [planet, setPlanet] = useState("");

    useEffect(() => {
        getHomeworldFromApi();
    }, [planet]);

    async function getHomeworldFromApi() {
        const response = await axios.get(homeworld);

        setPlanet(response.data.name);
    }

    if (loading) {
        return (
            <Container>
                <div className="skeleton">
                    <img src={loadingImg} alt="" />
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <img className="user" src={charImg} alt={`Imagem de ${name}`} />

            <h3>{name}</h3>

            <img className="icon" src={gpsImg} alt="Ícone de localização" />

            <p>{planet}</p>
        </Container>
    );
}
