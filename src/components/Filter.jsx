const Filter = () => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Uncompleted">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Categoria:</p>
                <select>
                    <option value="all">Todas</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudos">Estudos</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética</p>
                <button>Asc</button>
                <button>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter