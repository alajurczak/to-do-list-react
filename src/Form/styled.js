import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px 20px 20px 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const NewTask = styled.input`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 10px;
    border: 2px solid rgba(232, 232, 232);

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const Button = styled.button`
    background-color: rgba(0, 128, 128);
    color: rgba(255, 255, 255);
    border: none;
    padding: 10px;
    height: 40px;
    transition: 0.5s;
    transform: scale(1.05);

    &:hover {
        background-color: rgb(12, 160, 160);
        cursor: pointer;
    };

    &:active {
        background-color: rgb(12, 160, 160);
        text-decoration: underline solid rgba(0, 128, 128);
    }
`;