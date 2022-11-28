import "./style.css";

const Tasks = ({tasks, hiddenDoneTask}) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li key={task.id}
                className={`list ${task.done && hiddenDoneTask ? "list__item--hidden" : ""}`}>
                <button className="list__button list__button--done">{task.done ? "✓" : ""}</button>
                <p className={`${task.done ? " list__item--done" : "list__item"}`}>{task.content}</p>
                <button className="list__button list__button--remove">🗑</button>
            </li>
        ))}
    </ul >

);

export default Tasks;