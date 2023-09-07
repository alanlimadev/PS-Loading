import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/filter';


function App() {
  const [todos, setTodos] = useState([]);

  const [search, setSearch] = useState("");

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
      <Filter />
      {todos
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
