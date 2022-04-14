import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { CharacterCard } from "../CharacterCard";
import { Container } from "./styles";

export function CharactersCarousel({ characters, loading, ...props }) {
    return (
        <Container>
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
                {...props}
            >
                {characters.map((character, i) => (
                    <SwiperSlide key={i}>
                        <CharacterCard
                            name={character.name}
                            homeworld={character.homeworld}
                            loading={loading}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}
