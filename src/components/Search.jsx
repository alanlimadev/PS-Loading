// Componente de pesquisa que permite ao usuário buscar tarefas
const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      {/* Título da seção de pesquisa */}
      <h2>Buscar</h2>
      {/* Input de pesquisa com controle de estado */}
      <input
        type="text"
        placeholder="Digite para buscar..."
        onChange={(e) => setSearch(e.target.value)} // Manipulador de evento para atualizar o estado da pesquisa
        value={search} // Valor do input controlado pelo estado 'search'
      />
    </div>
  );
};

export default Search;
