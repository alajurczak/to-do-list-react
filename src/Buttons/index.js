import React from "react";
import "./style.css";

const Buttons = ({tasks, hiddenDoneTask}) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <React.Fragment>
                <button className="button">{hiddenDoneTask ? "Pokaż" : "Ukryj"} ukończone</button>
                <button className="button" disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </React.Fragment>
        )}
    </div>

);

export default Buttons;


