import React, { useState } from "react";
import { StyledForm, NewTask, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

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
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)} />
            <Button className="form__button">Dodaj zadanie</Button>
        </StyledForm>
    )
};

export default Form;