import { useState } from "react"
import Button from "./Button"
import Input from "./Input"

type Props={
    addTodo:(text:string)=>void
}

const TodoForm = ({addTodo}:Props) => {
    const [value,setValue]=useState('')
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        if(!value.length) return
        addTodo(value.trim())
        setValue('')
    }
    return (
    <form onSubmit={handleSubmit}>
        <Input value={value} placeholder={"Enter Your Todo"} onChange={setValue}/>
        <Button type={"submit"}>ADD</Button>
    </form>
  )
}

export default TodoForm