import React from "react";
import { StyledButtons, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <StyledButtons>
        {tasks.length > 0 && (
            <>
                <Button onClick={() => dispatch(toggleHideDone())}>{hideDone ? "Pokaż" : "Ukryj"} ukończone</Button>
                <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </StyledButtons>
    )
};

export default Buttons;