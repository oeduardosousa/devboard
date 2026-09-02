import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/projects", label: "Projects" },
  { to: "/tasks", label: "Tasks" },
];

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerKey, setHeaderKey] = useState(0);

  useEffect(() => {
    setHeaderKey((currentKey) => currentKey + 1);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        key={headerKey}
        className="devboard-header-enter sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
      >
        <div className="relative mx-auto flex max-w-375 items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900/70 text-slate-300 transition hover:bg-white/10 hover:text-white sm:left-6 lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={22} />
          </button>

          <div
            className="flex cursor-pointer items-center gap-3"
            onClick={() => handleNavigation("/")}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-fuchsia-500 to-violet-500 text-lg font-black text-white shadow-[0_0_30px_rgba(168,85,247,0.8)]">
              D
            </div>

            <span className="text-xl font-semibold tracking-tight text-white">
              Dev<span className="text-fuchsia-400">Board</span>
            </span>
          </div>
        </div>
      </header>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-label="Close navigation menu"
          />

          {/* Menu */}
          <aside className="absolute left-0 top-0 flex h-full w-72 flex-col border-r border-white/10 bg-[#020814] p-6 shadow-[20px_0_60px_rgba(0,0,0,0.4)]">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-fuchsia-500 to-violet-500 text-lg font-black text-white shadow-[0_0_30px_rgba(168,85,247,0.8)]">
                  D
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Workspace
                  </p>

                  <h2 className="text-lg font-semibold text-white">DevBoard</h2>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/10 hover:text-white"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="space-y-2">
              {navItems.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center rounded-2xl px-4 py-4 text-sm font-medium transition ${
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
        </div>
      )}
    </>
  );
}

export default Header;
