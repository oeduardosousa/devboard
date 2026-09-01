import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-375 items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
        <div
          className="flex cursor-pointer items-center gap-3"
          onClick={() => navigate("/")}
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
  );
}

export default Header;
