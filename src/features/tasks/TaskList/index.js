import { TasksList, Item, Content, ToggleDoneButton, RemoveButton } from "./styled";
import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";

const TaskList = ({ removeTasks, toggleTaskDone }) => {
    const {tasks, hideDone } = useSelector(selectTasks);
    return (
        <TasksList>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}>
                    <ToggleDoneButton
                        onClick={() => toggleTaskDone(task.id)}>
                        {task.done ? "✓" : ""}
                    </ToggleDoneButton>
                    <Content done={task.done}>
                        {task.content}
                    </Content>
                    <RemoveButton
                        onClick={() => removeTasks(task.id)}>
                        🗑
                    </RemoveButton>
                </Item>
            ))}
        </TasksList>
    )
};

export default TaskList;