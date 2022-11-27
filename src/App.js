import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "przejść na react", done: true },
  { id: 2, content: "zjeść obiad", done: false },
];

const hiddenDoneTasks = false;

function App() {
  return (
    <Container>
      <Header 
      title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hiddenDoneTasks={hiddenDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hiddenDoneTasks={hiddenDoneTasks} />}
      />
    </Container>
  );
}

export default App;
