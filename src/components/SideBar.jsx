import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/projects", label: "Projects" },
  { to: "/tasks", label: "Tasks" },
];

function Sidebar() {
  return (
    <aside className="devboard-sidebar-enter hidden w-72 shrink-0 rounded-3xl border border-white/10 bg-slate-950/50 p-5 shadow-[0_0_40px_rgba(88,28,135,0.25)] lg:block">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-fuchsia-500 to-violet-500 text-lg font-black text-white shadow-[0_0_30px_rgba(168,85,247,0.8)]">
          D
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Workspace
          </p>
          <h2 className="text-xl font-semibold text-white">DevBoard</h2>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `devboard-sidebar-link flex items-center rounded-2xl px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-linear-to-r from-violet-500/20 to-fuchsia-500/20 text-white ring-1 ring-violet-400/50"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
