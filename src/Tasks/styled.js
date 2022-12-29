import styled, { css } from "styled-components";

export const TasksList = styled.ul`
    list-style: none;
    padding: 15px;
    margin: 20px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    border-bottom: 2px solid rgb(232, 232, 232);
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

export const Button = styled.button`
    color: white;
    width: 30px;
    height: 30px;
    border: none;
    transition: background 0.3s;

    &:hover {
        cursor: pointer;
    }

    ${({ toggleDone }) => toggleDone && css`
        background-color: rgb(20, 132, 20);

        &:hover {
            background-color: rgb(35, 176, 35);
        };

    `}

    ${({remove}) => remove && css`
        background-color: rgb(233, 56, 56);

        &:hover {
            background-color: rgb(242, 101, 101);
        };
    `}
`;