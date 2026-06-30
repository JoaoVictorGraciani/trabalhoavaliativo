import "./SearchBar.css";

function SearchBar({ search, setSearch, handleSearch, onClear }) {
  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Pesquisar filmes ou séries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <button type="button" className="clear-btn" onClick={onClear}>
          Limpar
        </button>
      )}

      <button type="submit">Pesquisar</button>
    </form>
  );
}

export default SearchBar;