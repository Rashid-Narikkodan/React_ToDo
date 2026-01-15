import { useState } from "react"
import { todos } from "./mock"
import { Todo } from "../types/Todo"
const Todo=()=>{
    const [todos,setTodos]=useState<Todo>(todos)
    const [value,setValue]=useState('')
    const handleSubmit=(e)=>{
        setTodos(prev=>[...prev,{}])
    }
    return (
        <div>
            <ul>
                
            {
                todos.map((todo)=><li>{todo.title}</li>)
            }
                </ul>
        </div>
    )
}
export default Todo