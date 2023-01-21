import React, { useState } from 'react';
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useSelector } from "react-redux";
import { selectTasks } from './tasksSlice';


function Tasks() {
  const { tasks } = useSelector(selectTasks);
  
  const {
    // tasks,
    addNewTask,
    removeTasks,
    toggleTaskDone,
    setAllDone,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />} />

      <Section
        title="Lista zadań"
        body={<TaskList removeTasks={removeTasks} toggleTaskDone={toggleTaskDone} />}
        extraHeaderContent={<Buttons setAllDone={setAllDone} />} />
    </Container>
  );
}

export default Tasks;
