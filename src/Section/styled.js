import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({theme}) => theme.color.white};
    border: 2px solid ${({theme}) => theme.color.mercury};
    margin-bottom: 5px;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 2px solid ${({theme}) => theme.color.mercury};

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    padding: 20px;
    background-color: ${({theme}) => theme.color.white};
    margin: 0;
    font-size: 20px;
`;