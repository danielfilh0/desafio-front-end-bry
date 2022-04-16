import styled from "styled-components";

export const Container = styled.section`
    max-width: 1024px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 40px;
    height: 400px;

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
