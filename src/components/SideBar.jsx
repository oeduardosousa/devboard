import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/projects", label: "Projects" },
  { to: "/tasks", label: "Tasks" },
];

function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 rounded-3xl border border-white/10 bg-slate-950/50 p-5 shadow-[0_0_40px_rgba(88,28,135,0.25)] lg:block">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-sm font-bold text-white">
          D
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Workspace
          </p>
          <h2 className="text-xl font-semibold text-white">DevNova</h2>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center rounded-2xl px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 text-white ring-1 ring-violet-400/50"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-8 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-violet-200">
          Status
        </p>
        <p className="mt-2 text-lg font-semibold text-white">
          Productivity boosted
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
