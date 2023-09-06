import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

  return <div className="app">
    <h1>TO-DO Loading</h1>
      <TodoForm />
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} />
        ))}
    </div>
  </div>
}

export default App;