import { ReactNode, useReducer } from "react";
import TasksContext from "./tasksContext";

interface Props {
  children: ReactNode;
}

export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const taskListReducer = (tasks: Task[], action: TaskAction): Task[] => {
  if (action.type === "ADD") return [action.task, ...tasks];
  if (action.type === "DELETE")
    return tasks.filter((t) => t.id !== action.taskId);
  return tasks;
};

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskListReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
