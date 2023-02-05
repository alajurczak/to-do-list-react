import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding-top: 20px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    background-color: ${({theme}) => theme.color.teal};
    color: ${({theme}) => theme.color.white};
    border: none;
    padding: 10px;
    height: 40px;
    transition: 0.5s;

    &:hover {
        background-color: ${({theme}) => theme.color.blueChill};
        cursor: pointer;
        transform: scale(1.05);
    };

    &:active {
        background-color: ${({theme}) => theme.color.blueChill};
        text-decoration: underline solid ${({theme}) => theme.color.teal};
    }
`;