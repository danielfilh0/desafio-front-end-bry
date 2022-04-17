import styled from "styled-components";
import movieImg from "../../assets/movie-banner.svg";
import { devices } from "../../styles/Breakpoints";

export const Container = styled.main`
    padding-bottom: 2.8rem;

    .banner {
        margin-bottom: 1rem;
        width: 100%;
        height: 300px;
        background-image: url(${movieImg});
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media ${devices.tablet} {
            background-position: initial;
        }

        h1 {
            font-family: ${({ theme }) => theme.fonts.primary};
            font-size: 2rem;
            font-weight: 400;
            color: ${({ theme }) => theme.palette.white};

            @media ${devices.tablet} {
                font-size: 2.625rem;
            }
        }
    }

    .description {
        max-width: 1024px;
        margin: 0 auto;
        margin-bottom: 2.8rem;

        a {
            display: inline-block;
            margin-bottom: 1.4rem;
            background: none;
            border: 0;
            color: ${({ theme }) => theme.palette.blue};
        }

        p {
            margin: 0 auto;
            max-width: 650px;
            font-family: ${({ theme }) => theme.fonts.secondary};
            font-size: 1rem;
            line-height: 1.4;
            color: ${({ theme }) => theme.palette.gray};
        }
    }

    .characters {
        margin-bottom: 2.8rem;

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
            margin: 0 auto;
            padding: 0 1rem 1rem 1rem;
        }
    }

    .reviews {
        h2 {
            display: flex;
            max-width: 1024px;
            margin: 0 auto;
            margin-bottom: 1.625rem;
            align-items: center;
            gap: 5px;
            font-family: ${({ theme }) => theme.fonts.primary};
            font-size: 1.375rem;
            font-weight: 300;
            color: ${({ theme }) => theme.palette.grayText};
        }

        .form-wrapper {
            max-width: 1024px;
            margin: 0 auto;
        }

        form {
            margin-bottom: 2.1rem;
            max-width: 430px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 0.875rem;
            grid-row-gap: 1rem;

            * {
                font-family: ${({ theme }) => theme.fonts.secondary};
                font-size: 1rem;
            }

            input,
            textarea {
                padding: 0 0.6rem;
                border: 1px solid ${({ theme }) => theme.palette.grayBorder};
                border-radius: 0.25rem;
                color: ${({ theme }) => theme.palette.gray};
                outline: 0;

                &::placeholder {
                    color: inherit;
                }
            }

            input {
                height: 56px;
            }

            #name {
                grid-column: 1 / 2;
            }

            #email {
                grid-column: 2 / 3;
            }

            .email-invalid {
                border-color: ${({ theme }) => theme.palette.red};
            }

            textarea {
                padding-top: 1rem;
                min-height: 120px;
                resize: vertical;
                grid-column: 1 / 3;
            }

            button {
                grid-column: 1 / 3;
                background: linear-gradient(266.4deg, #eb5757 0%, #f2994a 100%);
                height: 56px;
                border: 0;
                outline: 0;
                color: ${({theme}) => theme.palette.white};
                border-radius: 0.25rem;
                transition: 0.2s;

                &:hover {
                    filter: brightness(1.1);
                }
            }
        }

        .comments-wrapper {
            max-width: 1024px;
            margin: 0 auto;
        }

        .comments {
            max-width: 380px;
            display: flex;
            flex-direction: column;
            gap: 1.8rem;
        }
    }
`;
