import React from "react";
import "./style.css";

const Buttons = ({ tasks, hiddenDone, toggleHideDone, setAllDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="button">{hiddenDone ? "Pokaż" : "Ukryj"} ukończone</button>
                <button onClick={setAllDone} className="button" disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>

);

export default Buttons;