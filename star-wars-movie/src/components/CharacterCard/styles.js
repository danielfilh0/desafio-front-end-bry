import styled from "styled-components";

export const Container = styled.div`
    max-width: 226px;
    width: 100%;
    height: 204px;
    background: ${({ theme }) => theme.palette.bgCard};
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 4px 4px 10px 0px #00000040;
    border-radius: 10px;
    position: relative;

    .user, h3 {
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1.375rem;
        font-weight: 400;
        color: ${({ theme }) => theme.palette.blue};
    }

    p {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.palette.grayText};
    }

    .skeleton {
        position: relative;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;

        img {
            object-fit: cover;
            filter: brightness(1.05);
            animation: skeleton 1.5s infinite linear;
        }

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
