import React, { useState, useRef } from "react";
import { StyledForm, NewTask, Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimedNewTaskContent = newTaskContent.trim();
        if (!trimedNewTaskContent) {
            return;
        }

        dispatch(addTask({
            content: trimedNewTaskContent,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <NewTask
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)} />
            <Button onClick={focusInput}>Dodaj zadanie</Button>
        </StyledForm>
    )
};

export default Form;