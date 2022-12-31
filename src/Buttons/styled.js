import styled from "styled-components";

export const StyledButtons = styled.div`
    padding: 20px 40px 20px 20px;
`;

export const Button = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.color.teal};
    margin-left: 20px;
    border-color: transparent;
    font-size: 15px;
    transition: 0.5s;

    @media (max-width: 767px) {
        width: 100%;
        margin-top: 5px;
        margin-bottom: 5px;
    };

    &:hover {
        color: ${({ theme }) => theme.color.java};
    };

    &:active {
        color: ${({ theme }) => theme.color.turquoise};
    };

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    };
`;