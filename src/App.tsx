import "./App.css";
import AuthContextProvider from "./state-management/AuthContextProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksContextProvider from "./state-management/TasksContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <TasksContextProvider>
        <NavBar />
        <HomePage />
      </TasksContextProvider>
    </AuthContextProvider>
  );
}

export default App;
