import React from "react";
import { StyledButtons, Button } from "../Buttons/styled";
import { useSelector, useDispatch } from "react-redux";
import {
    toggleHideDone,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
    selectHideDone,
    setAllDone,
} from "../../tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    return (
        <StyledButtons>
            {!areTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button onClick={() => dispatch(setAllDone())} disabled={isEveryTaskDone}>
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </StyledButtons>
    )
};

export default Buttons;