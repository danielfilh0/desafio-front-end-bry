import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./styles";
import charImg from "../../assets/char-img.svg";
import gpsImg from "../../assets/gps.svg";
import loadingImg from "../../assets/loading-char.svg";

export function CharacterCard({ name, homeworld, loading, endpoint }) {
    const [planet, setPlanet] = useState("");

    const [data, setData] = useState([]);

    useEffect(() => {
        if (endpoint) {
            getData();
        } else {
            getHomeworldFromApi(homeworld);
        }
    }, [planet]);

    async function getData() {
        const response = await axios.get(endpoint);
            
        setData(response.data);

        getHomeworldFromApi(response.data.homeworld);
    }

    async function getHomeworldFromApi(endpoint) {
        const response = await axios.get(endpoint);

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

    if (endpoint) {
        return (
            <Container>
                <img className="user" src={charImg} alt={`Imagem de ${data.name}`} />

                <h3>{data.name}</h3>

                <img className="icon" src={gpsImg} alt="Ícone de localização" />

                {planet && <p>{planet}</p>}
            </Container>
        );
    } else {
        return (
            <Container>
                <img className="user" src={charImg} alt={`Imagem de ${name}`} />

                <h3>{name}</h3>

                <img className="icon" src={gpsImg} alt="Ícone de localização" />

                {planet && <p>{planet}</p>}
            </Container>
        );
    }
}
