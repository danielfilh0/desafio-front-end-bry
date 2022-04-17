import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;

    p {
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: 1rem;
        color: ${({ theme }) => theme.palette.gray};
        margin-bottom: 7px;
    }

    > div {
        > div {
            display: flex;
            align-items: startcenter;
            gap: 1rem;
        }
    }

    button {
        background: none;
        border: 0;
        display: flex;
        gap: 3px;
        align-items: center;

        span {
            font-family: ${({ theme }) => theme.fonts.secondary};
            font-size: 0.75rem;
        }
    }

    .deslike {
        span {
            color: ${({ theme }) => theme.palette.red};
        }

        img {
            margin-top: 5px;
        }
    }

    .like {
        span {
            margin-top: 5px;
            color: ${({ theme }) => theme.palette.green};
        }
    }
`;
