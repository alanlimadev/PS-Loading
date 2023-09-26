// Componente individual para exibir uma única tarefa
const Todo = ({ todo, removerTarefa, finalizarTarefa }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {/* Div para a exibição do conteúdo da tarefa */}
      <div className="content">
        {/* Parágrafo para exibir o texto da tarefa */}
        <p>{todo.text}</p>
        {/* Parágrafo para exibir a categoria da tarefa */}
        <p className="category">{todo.category}</p>
      </div>
      {/* Div para os botões de ação (finalizar e remover) */}
      <div className="status">
        {/* Botão para finalizar a tarefa */}
        <button className="complete" onClick={() => finalizarTarefa(todo.id)}>
          Finalizar Tarefa
        </button>
        {/* Botão para remover a tarefa */}
        <button className="remove" onClick={() => removerTarefa(todo.id)}>
          Excluir
        </button>
      </div>
    </div>
  );
};

export default Todo;
