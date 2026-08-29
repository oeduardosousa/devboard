import SearchBar from "./SearchBar";

function Header({ onHomeClick, onSearch }) {
  return (
    <header>
      <div>
        <button type="button" onClick={onHomeClick}>
          Dev<span>Board</span>
        </button>
      </div>

      <SearchBar onSearch={onSearch} />
    </header>
  );
}

export default Header;
