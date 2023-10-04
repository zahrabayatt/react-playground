import useAuth from "../auth/useAuth";
import useTasks from "./useTasks";

const TaskList = () => {
  const { tasks, dispatch } = useTasks();
  const { user } = useAuth();

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
