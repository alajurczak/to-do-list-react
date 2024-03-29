import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        fetchExampleTasks: (state) => {
            state.loading = true;
        },
        exampleTasksSuccess: (state, {payload: tasks}) => {
            state.tasks = tasks;
            state.loading = false;
        },
        exampleTasksError: (state) => {
            state.loading = false;
        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = false;
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    exampleTasksSuccess,
    exampleTasksError,
    setTasks,
} = tasksSlice.actions;

export const selectTaskState = state => state.tasks;

export const selectTasks = state => selectTaskState(state).tasks;
export const selectHideDone = state => selectTaskState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectLoading = (state) => selectTaskState(state).loading;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if(!query || query.trim() === "") {
        return tasks;
    }
    
    return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
};

export default tasksSlice.reducer;