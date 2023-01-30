import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";
import { StyledButtons } from "../Buttons/styled";
import { Button } from "../Buttons/styled";


const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    
    return (
        <StyledButtons>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
        </StyledButtons>
    )
};

export default ExampleTasksButton;