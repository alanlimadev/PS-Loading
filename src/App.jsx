import { useState, useEffect } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [category, setCategory] = useState("All");

  const [order, setOrder] = useState("Asc");

  // Função para adicionar uma tarefa
  const addTarefa = (text, category) => {
    // Cria uma nova tarefa
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    };

    // Atualiza a lista de tarefas no estado
    const newTodos = [...todos, newTask];
    setTodos(newTodos);

    // Armazena a lista atualizada no localStorage
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  // Função para remover uma tarefa
  const removerTarefa = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);

    // Atualiza o localStorage após a remoção
    localStorage.setItem("todos", JSON.stringify(newTodos));
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

    // Atualiza o localStorage após a alteração do estado
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  // Efeito para carregar os dados do localStorage quando o componente é montado
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

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
        {todos
          .filter((todo) => {
            // Filtra com base no status
            if (filter === "All") {
              return true;
            } else if (filter === "Completed") {
              return todo.isCompleted;
            } else if (filter === "Uncompleted") {
              return !todo.isCompleted;
            }
            return false;
          })
          .filter((todo) => {
            // Filtra com base na categoria
            if (category === "All") {
              return true;
            }
            return todo.category === category;
          })
          .sort((a, b) => {
            // Ordena alfabeticamente
            if (order === "Asc") {
              return a.text.localeCompare(b.text);
            } else if (order === "Desc") {
              return b.text.localeCompare(a.text);
            }
            return 0;
          })
          .filter((todo) =>
            // Filtra com base na pesquisa
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            // Mapeia cada tarefa para o componente Todo
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
