import "./SearchBar.css";

function SearchBar({

search,

setSearch,

handleSearch

}){

return(

<form

className="search"

onSubmit={handleSearch}

>

<input

type="text"

placeholder="Pesquisar filmes..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

<button>

Pesquisar

</button>

</form>

)

}

export default SearchBar;