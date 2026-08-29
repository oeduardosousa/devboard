function SearchBar({ onSearch }) {
  const handleSearch = (event) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <label className="flex w-full max-w-md items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2.5 text-sm text-slate-300 shadow-inner shadow-violet-500/10 transition focus-within:border-violet-400/60 focus-within:ring-2 focus-within:ring-violet-500/20">
      <span className="text-slate-400">⌕</span>
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearch}
        className="w-full border-0 bg-transparent text-white placeholder:text-slate-400 focus:outline-none"
      />
    </label>
  );
}

export default SearchBar;
