import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: rgb(255, 255, 255);
    border: 2px solid rgba(232, 232, 232);
    margin-bottom: 5px;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 2px solid rgba(232, 232, 232);

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    padding: 20px;
    background-color: rgba(255, 255, 255);
    margin: 0;
    font-size: 20px;
`;