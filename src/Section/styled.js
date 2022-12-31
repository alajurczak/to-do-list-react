import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({theme}) => theme.color.white};
    border: 2px solid ${({theme}) => theme.color.mercury};
    margin-bottom: 5px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        width: 100%;
    }
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 2px solid ${({theme}) => theme.color.mercury};

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    padding: 20px;
    background-color: ${({theme}) => theme.color.white};
    margin: 0;
    font-size: 20px;
`;