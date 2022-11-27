import React from "react";
import "./style.css";

const Buttons = (props) => (
    <div className="buttons">
        {props.tasks.length > 0 && (
            <React.Fragment>
                <button className="button">{props.hiddenDoneTask ? "Pokaż" : "Ukryj"} ukończone</button>
                <button className="button" disabled={props.tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </React.Fragment>
        )}
    </div>

);

export default Buttons;


