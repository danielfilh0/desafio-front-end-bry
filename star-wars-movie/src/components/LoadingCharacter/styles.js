import styled from "styled-components";
import { devices } from "../../styles/Breakpoints";

export const Container = styled.div`
    width: 100%;
    height: 204px;
    background-color: ${({ theme }) => theme.palette.bgCard};
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;

    div {
        animation: skeleton 0.7s linear infinite alternate;
        border-radius: 6px;

        &:first-of-type {
            width: 84px;
            height: 84px;
            border-radius: 50%;
            margin-bottom: 1rem;
        }

        &:nth-of-type(2) {
            width: 130px;
            height: 32px;
            margin-bottom: 1rem;
        }

        &:last-of-type {
            width: 130px;
            height: 23px;
        }
    }

`;