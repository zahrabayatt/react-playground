import { useContext, useReducer } from "react";
import taskListReducer from "./reducers/taskListReducer";
import TasksContext from "./contexts/tasksContext";
import AuthContext from "./contexts/authContext";

const TaskList = () => {
  const { tasks, dispatch } = useContext(TasksContext);
  const { user } = useContext(AuthContext);

  return (
    <>
      {user && <p>User: {user}</p>}
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
