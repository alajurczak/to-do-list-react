import React, { useState } from 'react';
import { useTasks } from "./useTasks";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";



function App() {
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
        body={<Tasks tasks={tasks} hiddenDone={hiddenDone} removeTasks={removeTasks} toggleTaskDone={toggleTaskDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hiddenDone={hiddenDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone} />} />
    </Container>
  );
}

export default App;
