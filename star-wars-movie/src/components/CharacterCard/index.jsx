import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./styles";
import charImg from "../../assets/char-img.svg";
import gpsImg from "../../assets/gps.svg";
import { LoadingCharacter } from "../LoadingCharacter";

export function CharacterCard({ name, homeworld, endpoint }) {
    const [planet, setPlanet] = useState("");

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(null);

    useEffect(() => {
        if (endpoint) {
            getData();
        } else {
            getHomeworldFromApi(homeworld);
        }
    }, []);

    async function getData() {
        const response = await axios.get(endpoint);

        setData(response.data);

        getHomeworldFromApi(response.data.homeworld);
    }

    async function getHomeworldFromApi(endpoint) {
        setLoading(true);

        const response = await axios.get(endpoint);

        setPlanet(response.data.name);

        setLoading(false);
    }

    if (loading) {
        return <LoadingCharacter />;
    }

    if (endpoint) {
        return (
            <Container>
                <img
                    className="user"
                    src={charImg}
                    alt={`Imagem de ${data.name}`}
                />

                <h3>{data.name}</h3>

                <img className="icon" src={gpsImg} alt="Ícone de localização" />

                {planet && <p>{planet}</p>}
            </Container>
        );
    }

    return (
        <Container>
            <img className="user" src={charImg} alt={`Imagem de ${name}`} />

            <h3>{name}</h3>

            <img className="icon" src={gpsImg} alt="Ícone de localização" />

            {planet && <p>{planet}</p>}
        </Container>
    );
}
