import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';


function App() {
  const [todos, setTodos] = useState([]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [category, setCategory] = useState("All");

  const [order, setOrder] = useState("Asc");

  const addTarefa = (text, category) => {
    const newTodos = [
      ...todos, 
      {
        id: Math.floor(Math.random() * 10000), 
        text, 
        category, 
        isCompleted: false,
      }
    ];
    setTodos(newTodos);
  };

  const removerTarefa = (id) => {
    const newTodos = [...todos];

    const filteredTodos = newTodos.filter((todo) => {
      if(todo.id !== id) {
        return todo;
      }
      return null;
    });

    setTodos(filteredTodos);
  };

  const finalizarTarefa = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => {
      if(todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return <div className="app">
    <h1>TO-DO Loading</h1>
    <TodoForm addTarefa={addTarefa}/>
    <div className="todo-list">
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} category={category} setCategory={setCategory} setOrder={setOrder}/>
      {todos
        .filter((todo) => {
          if(filter === "All") {
            return todo;
          } else if(filter === "Completed") {
            if(todo.isCompleted) {
              return todo;
            }
          } else if(filter === "Uncompleted") {
            if(!todo.isCompleted) {
              return todo;
            }
          }
          return null;
        })
        .filter((todo) => {
          if(category === "All") {
            return todo;
          } else if(category === "Pessoal") {
            if(todo.category === "Pessoal") {
              return todo;
            }
          } else if(category === "Trabalho") {
            if(todo.category === "Trabalho") {
              return todo;
            }
          } else if(category === "Estudos") {
            if(todo.category === "Estudos") {
              return todo;
            }
          }
          return null;
        })
        .sort((a, b) => {
          if(order === "Asc") {
            return a.text.localeCompare(b.text);
          } else if(order === "Desc") {
            return b.text.localeCompare(a.text);
          }
          return null;
        })
        .filter((todo) => 
          todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .map((todo) => (
          <Todo 
            key={todo.id} 
            todo={todo} 
            removerTarefa={removerTarefa} 
            finalizarTarefa={finalizarTarefa}
          />
        ))}
    </div>
  </div>
}

export default App;
