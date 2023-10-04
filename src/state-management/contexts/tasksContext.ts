import { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/taskListReducer";
import React from "react";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const tasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default tasksContext;
