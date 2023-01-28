import { TasksList, Item, Content, ToggleDoneButton, RemoveButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../../tasksSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    return (
        <TasksList>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}>
                    <ToggleDoneButton
                        onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✓" : ""}
                    </ToggleDoneButton>
                    <Content done={task.done}>
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                    </Content>
                    <RemoveButton
                        onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </RemoveButton>
                </Item>
            ))}
        </TasksList>
    )
};

export default TaskList;