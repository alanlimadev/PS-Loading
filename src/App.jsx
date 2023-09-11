import { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  // Estado para as tarefas
  const [todos, setTodos] = useState([]);

  // Estados para filtros e pesquisa
  const [filter, setFilter] = useState("All");
  const [category, setCategory] = useState("All");
  const [order, setOrder] = useState("Asc");
  const [search, setSearch] = useState("");

  // Função para adicionar uma tarefa
  const addTarefa = (text, category) => {
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    };

    // Atualiza a lista de tarefas
    setTodos([...todos, newTask]);
  };

  // Função para remover uma tarefa
  const removerTarefa = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // Função para finalizar uma tarefa
  const finalizarTarefa = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // Efeito para carregar os dados do localStorage quando o componente é montado
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Filtragem e ordenação das tarefas
  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "All") return true;
      if (filter === "Completed") return todo.isCompleted;
      if (filter === "Uncompleted") return !todo.isCompleted;
      return false;
    })
    .filter((todo) => {
      if (category === "All") return true;
      return todo.category === category;
    })
    .filter((todo) =>
      todo.text.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (order === "Asc") return a.text.localeCompare(b.text);
      if (order === "Desc") return b.text.localeCompare(a.text);
      return 0;
    });

  return (
    <div className="app">
      <h1>TO-DO Loading</h1>
      <TodoForm addTarefa={addTarefa} />
      <div className="todo-list">
        <Search search={search} setSearch={setSearch} />
        <Filter
          filter={filter}
          setFilter={setFilter}
          category={category}
          setCategory={setCategory}
          setOrder={setOrder}
        />
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removerTarefa={removerTarefa}
            finalizarTarefa={finalizarTarefa}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
