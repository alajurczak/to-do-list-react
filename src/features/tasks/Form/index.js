import React, { useState, useRef } from "react";
import { StyledForm, NewTask, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimedNewTaskContent = newTaskContent.trim();
        if (!trimedNewTaskContent) {
            return;
        }

        addNewTask(trimedNewTaskContent);
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