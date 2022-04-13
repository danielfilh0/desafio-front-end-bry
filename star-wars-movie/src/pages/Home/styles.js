import styled from "styled-components";
import bannerImg from "../../assets/banner.svg";
import { devices } from "../../styles/Breakpoints";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    padding-bottom: 5rem;

    .banner {
        padding-top: 65px;
        width: 100%;
        height: 300px;
        background-image: url(${bannerImg});
        background-size: cover;
        background-position: center;
        display: flex;
        gap: 1.3rem;
        flex-direction: column;
        align-items: center;

        @media ${devices.tablet} {
            background-position: initial;
        }

        h1 {
            font-family: ${({ theme }) => theme.fonts.primary};
            font-size: 2rem;
            font-weight: 400;
            background: linear-gradient(
                64.17deg,
                #ff5a56 15.66%,
                #ff9a42 83.04%
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            @media ${devices.tablet} {
                font-size: 2.625rem;
            }
        }

        form {
            max-width: 514px;
            width: 100%;
            height: 56px;
            border-radius: 4px;
            position: relative;
        }

        fieldset {
            width: 100%;
            height: 100%;
            padding: 0 0.875rem;
            border: 1px solid ${({ theme }) => theme.palette.white};
            border-radius: 0.25rem;
            display: flex;
            justify-content: space-between;

            legend {
                padding: 0 5px;
                font-family: ${({ theme }) => theme.fonts.secondary};
                font-size: 0.75rem;
                color: ${({ theme }) => theme.palette.white};
                position: relative;
                top: -6px;
                height: 0;
            }
        }

        input {
            width: 100%;
            background: none;
            border: 0;
            font-family: ${({ theme }) => theme.fonts.secondary};
            font-size: 1rem;
            color: ${({ theme }) => theme.palette.white};
            outline: 0;

            &::placeholder {
                color: inherit;
            }
        }

        button {
            background: none;
            border: 0;
            outline: 0;
        }
    }

    h2 {
        max-width: 1024px;
        margin: 0 auto;
        margin-bottom: 1.625rem;
        display: flex;
        align-items: center;
        gap: 5px;
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 1.375rem;
        font-weight: 300;
        color: ${({ theme }) => theme.palette.grayText};
    }

    .carousel {
        max-width: 1024px;
        padding-bottom: 1rem;
    }

    .movies {
        .carousel {
            padding-left: 1rem;
        }
    }

    .banner + .movies {
        margin-top: 2.8rem;
    }

    .characters {
        margin-top: 2.8rem;

        .carousel {
            padding: 0 1rem 1rem 1rem;
        }
    }

    .banner + .results {
        margin-top: 1rem;
    }

    .results {
        .title {
            max-width: 1024px;
            margin: 0 auto;
            border-bottom: 1px solid ${({theme}) => theme.palette.grayAux};
            margin-bottom: 1.3rem;
            padding-bottom: 3px;

            * {
                font-family: ${({theme}) => theme.fonts.primary};
            }

            button {
                margin-bottom: 1.4rem;
                background: none;
                border: 0;
                color: ${({theme}) => theme.palette.blue};
            }

            p {
                font-size: 0.75rem;
                color: ${({theme}) => theme.palette.grayText};
            }
        }
    }

    .not-found {
        max-width: 1024px;
        margin: 0 auto;
    }
`;
