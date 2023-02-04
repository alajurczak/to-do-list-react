import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const TasksList = styled.ul`
    list-style: none;
    padding: 15px;
    margin: 20px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    border-bottom: 2px solid ${({ theme }) => theme.color.mercury};
    padding: 5px 5px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.p`
    padding: 0 10px;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

const Button = styled.button`
    color: white;
    width: 30px;
    height: 30px;
    border: none;
    transition: background 0.3s;

    &:hover {
        cursor: pointer;
    }
`;

export const ToggleDoneButton = styled(Button)`
    background-color: ${({ theme }) => theme.color.bilbao};

    &:hover {
        background-color: ${({ theme }) => theme.color.forestGreen};
};
`;

export const RemoveButton = styled(Button)`
    background-color: ${({ theme }) => theme.color.cinnabar};

    &:hover {
        background-color: ${({ theme }) => theme.color.carnation};
};
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.teal};
    
    &:visited {
        color: ${({ theme }) => theme.color.teal};
    };
    &:hover {
        border-bottom: solid 1px teal;
    };
`;