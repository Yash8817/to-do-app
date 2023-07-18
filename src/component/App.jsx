import React, { useState , useEffect } from "react";
let globalId = 0

function App()
{

    const [todos, setToDos] = useState([ ])  
    const [task, setTak] = useState("")

    function addTodo(event){
        event.preventDefault()
        setTak('')
            setToDos(allTodos => {
                return [...allTodos , {task : task , id  : globalId++ } ]
            })
    }

    function DeleteTask(itemId)
    {
        setToDos(oldTodo => oldTodo.filter(item => item.id !== itemId))
    }


    return <div>
        <form onSubmit={addTodo}>
        <h1>Best TO-DO App Ever</h1>

        <input 
        type="text" 
        value={task} 
        onChange={event => {
            setTak(event.target.value)
        }}
        />

        <button onClick={addTodo}>Add Task</button>
        <ul>
            {todos.map((item,index) => {
                return <div key={item.id}>
                <li> {item.task} ({item.id}) </li>
                <button onClick={() => DeleteTask(item.id)}>Delete</button>
                </div>
            })}
        </ul>
    </form>
    </div>
}

export default App