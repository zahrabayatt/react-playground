import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import taskListReducer from "./state-management/reducers/taskListReducer";
import tasksContext from "./state-management/contexts/tasksContext";

function App() {
  const [tasks, dispatch] = useReducer(taskListReducer, []);

  return (
    <>
      <tasksContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <HomePage />
      </tasksContext.Provider>
    </>
  );
}

export default App;
