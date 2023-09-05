import { useState } from 'react';


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
    <h1>TODO</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo">
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">{todo.category}</p>
          </div>
          <div>
            <button>✓</button>
            <button>✕</button>
          </div>
        </div>
      ))}
    </div>
  </div>
}

export default App;
