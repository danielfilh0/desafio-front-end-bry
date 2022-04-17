import styled from "styled-components";
import { devices } from "../../styles/Breakpoints";

export const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 213px;
    justify-content: center;
    grid-column-gap: 40px;
    height: 204px;

    @media ${devices.tablet} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${devices.desktop} {
        grid-template-columns: repeat(4, 1fr);
    }

    > div {
        display: flex;

        &:not(div:first-of-type) {
            display: none;

            @media ${devices.tablet} {
                display: flex;
            }
        }

        &:last-of-type {
            @media ${devices.tablet} {
                display: none !important;
            }

            @media ${devices.desktop} {
                display: flex !important;
            }
        }
    }
`;
