import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside>
      <h2>DevBoard</h2>

      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/tasks">Tasks</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
