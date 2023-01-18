import { TasksList, Item, Content, ToggleDoneButton, RemoveButton } from "./styled";

const TaskList = ({ tasks, hiddenDone, removeTasks, toggleTaskDone }) => (
    <TasksList>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && hiddenDone}>
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
);

export default TaskList;