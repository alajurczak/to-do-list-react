import React, { useState } from "react";
import "./style.css";

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
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__newTask"
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)} />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    )
};

export default Form;