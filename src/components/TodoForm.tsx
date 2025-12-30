import { useState } from "react"
import Button from "./Button"
import Input from "./Input"
import type { TodoFromProps } from "../types/TodoFormProps"

const TodoForm = ({addTodo}:TodoFromProps) => {
    const [value,setValue]=useState('')
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        if(!value.length) return
        addTodo(value.trim())
        setValue('')
    }
    return (
   <form
  onSubmit={handleSubmit}
  className="flex items-center gap-3 p-4 bg-zinc-900 rounded-lg border border-zinc-800"
>
  <Input
    value={value}
    onChange={setValue}
    placeholder="Enter your todo"
    className="
      flex-1
      bg-transparent
      border border-cyan-400
      rounded-md
      px-3 py-2
      text-white
      placeholder:text-zinc-400
      focus:outline-none
      focus:ring-2
      focus:ring-cyan-500
    "
  />

  <Button
    type="submit"
    className="
      px-4 py-2
      rounded-md
      bg-cyan-500
      text-black
      font-medium
      hover:bg-cyan-400
      active:scale-95
      transition
      disabled:opacity-50
    "
  >
    <span>+</span>
  </Button>
</form>

  )
}

export default TodoForm