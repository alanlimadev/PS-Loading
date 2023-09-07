import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, category) => {
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

  return <div className="app">
    <h1>TO-DO Loading</h1>
      <TodoForm addTodo={addTodo}/>
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
        ))}
    </div>
  </div>
}

export default App;
