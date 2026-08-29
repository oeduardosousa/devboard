function SearchBar({ onSearch }) {
  const handleSearch = (event) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return <input type="text" placeholder="Buscar..." onChange={handleSearch} />;
}

export default SearchBar;
