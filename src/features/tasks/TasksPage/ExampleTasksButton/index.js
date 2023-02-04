import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { StyledButtons } from "../Buttons/styled";
import { Button } from "../Buttons/styled";


const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <StyledButtons>
            <Button onClick={() => dispatch(fetchExampleTasks())} disabled={loading}>
                {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </Button>
        </StyledButtons>
    )
};

export default ExampleTasksButton;