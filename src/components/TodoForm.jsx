import { useState } from "react";

// Componente para criar uma nova tarefa
const TodoForm = ({ addTarefa }) => {
  // Estados para o texto da tarefa e a categoria
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifica se o texto e a categoria estão preenchidos
    if (!text || !category) {
      return alert("Preencha todos os campos");
    }
    // Chama a função para adicionar a tarefa
    addTarefa(text, category);
    // Limpa os campos de texto e categoria após o envio
    setText("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      {/* Título do formulário */}
      <h2>Criar Nova Tarefa</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo de entrada de texto para o título da tarefa */}
        <input
          type="text"
          placeholder="Digite o título"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        {/* Dropdown para seleção da categoria da tarefa */}
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">Selecione uma categoria</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
          <option value="Trabalho">Trabalho</option>
        </select>
        {/* Botão para criar a tarefa */}
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
