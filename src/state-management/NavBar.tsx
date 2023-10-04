import LoginStatus from "./auth/LoginStatus";
import useCounterStore from "./counter/useCounterStore";
import useTasks from "./tasks/useTasks";

const NavBar = () => {
  const { tasks } = useTasks();
  const counter = useCounterStore((s) => s.counter);

  console.log("Rendering NavBar...");

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
