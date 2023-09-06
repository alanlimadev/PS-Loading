import React from 'react'

const TodoForm = () => {
  return (
    <div className="todo-form">
        <h2>Criar Nova Tarefa</h2>
        <form>
            <input type="text" placeholder="Digite o título" />
            <select>
                <option value="">Selecione uma categoria</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
                <option value="Trabalho">Trabalho</option>
            </select>
            <button type="submit">Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm