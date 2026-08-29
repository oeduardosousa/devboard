import SearchBar from "./SearchBar";

function Header({ onSearch }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-375 items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-fuchsia-500 to-violet-500 text-lg font-black text-white shadow-[0_0_30px_rgba(168,85,247,0.8)]">
            D
          </div>
          <button
            type="button"
            className="text-xl font-semibold tracking-tight text-white"
          >
            Dev<span className="text-fuchsia-400">Board</span>
          </button>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex"></nav>

        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
}

export default Header;
