import React, { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


function App() {
  const [hiddenDone, setHiddenDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "przejść na react", done: true },
    { id: 2, content: "zjeść obiad", done: false },
  ]);

  const toggleHideDone = () => {
    setHiddenDone(hiddenDone => !hiddenDone);
  }

  const removeTasks = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if(task.id === id) {
        return {...task, done: !task.done};
      }

      return task;
    }))
  }

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />} />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hiddenDone={hiddenDone} removeTasks={removeTasks} toggleTaskDone={toggleTaskDone}/>}
        extraHeaderContent={<Buttons tasks={tasks} hiddenDone={hiddenDone} toggleHideDone={toggleHideDone} />} />
    </Container>
  );
}

export default App;
