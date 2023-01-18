import React from "react";
import { StyledButtons, Button } from "./styled";

const Buttons = ({ tasks, hiddenDone, toggleHideDone, setAllDone }) => (
    <StyledButtons>
        {tasks.length > 0 && (
            <>
                <Button onClick={toggleHideDone}>{hiddenDone ? "Pokaż" : "Ukryj"} ukończone</Button>
                <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </StyledButtons>

);

export default Buttons;