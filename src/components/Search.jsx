const Search = ({search, setSearch}) => {
    return (
        <div className="search">
            <h2>Buscar</h2>
            <input 
                type="text" 
                placeholder="Digite para buscar" 
                onChange={(e) => setSearch(e.target.value)} 
                value={search}
            />
        </div>
    );
};

export default Search