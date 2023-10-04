import { ReactNode, useReducer } from "react";
import taskListReducer from "./reducers/taskListReducer";
import TasksContext from "./contexts/tasksContext";

interface Props {
  children: ReactNode;
}

const TasksContextProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskListReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
