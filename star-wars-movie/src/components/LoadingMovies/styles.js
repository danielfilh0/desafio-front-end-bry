import styled from "styled-components";
import { devices } from "../../styles/Breakpoints";

export const Container = styled.section`
    max-width: 1024px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 40px;
    height: 400px;

    @media ${devices.tablet} {
        grid-template-columns: repeat(3, 1fr);
    }

    > div {
        display: none;

        @media ${devices.tablet} {
            display: block;
        }

        &:first-of-type {
            display: block;
        }
    }

    .skeleton {
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.palette.bgCard};
        border-radius: 3px;
        overflow: hidden;

        div {
            animation: skeleton 0.7s linear infinite alternate;
            border-radius: inherit;

            &:first-of-type {
                width: 100%;
                height: 125px;
                margin-bottom: 35px;
            }

            &:nth-of-type(2) {
                width: 192px;
                height: 29px;
                margin-left: 1rem;
                margin-bottom: 11px;
            }

            &:nth-of-type(3) {
                width: 270px;
                height: 52px;
                margin-left: 1rem;
                margin-bottom: 86px;
            }

            &:last-of-type {
                width: 130px;
                height: 48px;
                margin-left: 1rem;
            }
        }
    }
`;
