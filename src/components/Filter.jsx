const Filter = ({ filter, setFilter, category, setCategory, setOrder }) => {
  // Função para manipular a mudança de filtro de status
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Função para manipular a mudança de filtro de categoria
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Função para manipular a mudança de ordem alfabética
  const handleOrderChange = (order) => {
    setOrder(order);
  };

  return (
    <div className="filter">
      {/* Título do filtro */}
      <h2>Filtrar:</h2>
      <div className="filter-options">
        {/* Opções de filtro por status */}
        <div className="filter-option">
          <p>Status:</p>
          {/* Dropdown para seleção de filtro de status */}
          <select value={filter} onChange={handleFilterChange}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Uncompleted">Incompletas</option>
          </select>
        </div>
        {/* Opções de filtro por categoria */}
        <div className="filter-option">
          <p>Categoria:</p>
          {/* Dropdown para seleção de filtro de categoria */}
          <select value={category} onChange={handleCategoryChange}>
            <option value="All">Todas</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Estudos">Estudos</option>
          </select>
        </div>
        {/* Opções de filtro por ordem alfabética */}
        <div className="filter-option">
          <p>Ordem alfabética:</p>
          {/* Botões para seleção de ordem alfabética */}
          <button onClick={() => handleOrderChange("Asc")}>Asc</button>
          <button onClick={() => handleOrderChange("Desc")}>Desc</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
