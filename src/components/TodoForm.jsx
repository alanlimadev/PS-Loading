import {useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text || !category) return alert("Preencha todos os campos");
    addTodo(text, category);
    setText("");
    setCategory("");
    
  }


  return (
    <div className="todo-form">
        <h2>Criar Nova Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite o título" onChange={(e) =>setText(e.target.value)} value={text}/>
            <select onChange={(e) =>setCategory(e.target.value)} value={category}>
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