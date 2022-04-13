import styled from "styled-components";
import loadingMovieImg from "../../assets/loading-movie.svg";

export const Container = styled.div`
    max-width: 300px;
    width: 100%;
    height: 400px;
    box-shadow: 4px 4px 10px 0px #00000026;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    img {
        width: 100%;
        height: 170px;
        display: block;
        object-fit: cover;
    }

    .description {
        position: relative;
        padding: 1rem;
        flex: 1;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 6px;
            background: linear-gradient(270deg, #eb5757 0.91%, #f2994a 98.98%);
        }
    }

    h3 {
        margin-bottom: 0.5rem;
        font-size: 1.625rem;
        font-weight: 400;
        color: ${({ theme }) => theme.palette.blue};
    }

    p {
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: 0.75rem;
        font-weight: 400;
        color: ${({ theme }) => theme.palette.gray};
        line-height: 1.4;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;

        > div {
            display: flex;
            align-items: center;
            gap: 0.6rem;
        }

        img {
            width: 1rem;
            height: 1rem;
        }

        span {
            font-size: 0.75rem;
            font-weight: 700;
            color: ${({ theme }) => theme.palette.gray};
        }
    }

    .skeleton {
        width: 100%;
        height: 100%;
        background-image: url(${loadingMovieImg});
        background-size: cover;
        position: relative;
        filter: brightness(1.05);
        animation: skeleton 1.5s infinite linear;

        @keyframes skeleton {
            0% {
                filter: brightness(1);
            }

            50% {
                filter: brightness(1.04);
            }

            100% {
                filter: brightness(1);
            }
        }
    }
`;
