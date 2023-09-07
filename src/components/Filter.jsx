const Filter = ({filter, setFilter, category, setCategory, setOrder}) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Uncompleted">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Categoria:</p>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudos">Estudos</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setOrder("Asc")}>Asc</button>
                <button onClick={() => setOrder("Desc")}>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter;