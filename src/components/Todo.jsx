import React from 'react'

const Todo = ({todo, removerTarefa, finalizarTarefa}) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">{todo.category}</p>
          </div>
          <div>
            <button className="complete" onClick={() => finalizarTarefa(todo.id)}>Finalizar Tarefa</button>
            <button className="remove" onClick={() => removerTarefa(todo.id)}>X</button>
          </div>
        </div>
  )
}

export default Todo