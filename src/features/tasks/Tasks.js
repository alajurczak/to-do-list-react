import React, { useState } from 'react';
import { useTasks } from "../../useTasks";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";



function Tasks() {
  const [hiddenDone, setHiddenDone] = useState(false);

  const toggleHideDone = () => {
    setHiddenDone(hiddenDone => !hiddenDone);
  };

  const {
    tasks,
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
        body={<Form addNewTask={addNewTask} />} />

      <Section
        title="Lista zadań"
        body={<TaskList tasks={tasks} hiddenDone={hiddenDone} removeTasks={removeTasks} toggleTaskDone={toggleTaskDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hiddenDone={hiddenDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone} />} />
    </Container>
  );
}

export default Tasks;
