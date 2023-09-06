import {useState} from 'react'

const TodoForm = () => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text || !category) return alert("Preencha todos os campos");
    console.log(text, category);
  }


  return (
    <div className="todo-form">
        <h2>Criar Nova Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite o título" onChange={(e) =>setText(e.target.value)}/>
            <select onChange={(e) =>setCategory(e.target.value)}>
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