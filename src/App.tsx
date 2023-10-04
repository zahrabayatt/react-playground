import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks/index";

function App() {
  return (
    <TasksProvider>
      <NavBar />
      <HomePage />
    </TasksProvider>
  );
}

export default App;
