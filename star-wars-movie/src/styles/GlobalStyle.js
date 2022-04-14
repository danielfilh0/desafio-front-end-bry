import { createGlobalStyle } from "styled-components";
import leftArrowImg from "../assets/left-arrow.svg";
import rightArrowImg from "../assets/right-arrow.svg";
import { devices } from "./Breakpoints";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: ${({ theme }) => theme.fonts.primary};
    }

    section {
        padding: 0 1rem;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
        display: block;
    }

    .container {
        max-width: 1024px;
    }

    .swiper-button-lock {
        display: none !important;
    }

    .swiper-button-prev, .swiper-button-next {
        display: none;
        position: absolute;
        top: 34%;
        z-index: 2;
        width: 51px;
        height: 51px;
        background-color: rgba(0, 0, 0, 0.5);
        border: 0;
        padding: 5px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 0.2s;

        @media ${devices.tablet} {
            display: flex;
        }

        &:hover {
            background-color: rgba(0, 0, 0, 0.7);
        }

        &::after {
            content: '';
            background-size: cover;
            width: 18px;
            height: 21px;
        }
    }

    .swiper-button-prev {
        left: 0;

        &::after {
            background-image: url(${leftArrowImg});
            margin-right: 5px;
        }
    }

    .swiper-button-next {
        right: 0;

        &::after {
            background-image: url(${rightArrowImg});
            margin-left: 5px;
        }
    }
`;
