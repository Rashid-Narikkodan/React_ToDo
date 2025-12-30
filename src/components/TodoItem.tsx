import type { TodoItemProps } from "../types/TodoItemProps"
import Button from "./Button"
import CheckBox from "./CheckBox"
const TodoItem = ({onDelete,onToggle,todo}:TodoItemProps) => {
  const handleDelete=()=>onDelete(todo.id)
  const handleToggle=()=>onToggle(todo.id)
  
  return (
<li className="flex justify-between items-center w-full p-3 rounded-md text-white border border-zinc-800 bg-zinc-900">
  <span className={`flex-1 min-w-0 wrap-break-word ${todo.completed?'line-through text-zinc-400':''}`}>
    {todo.title}
  </span>

  <div className="flex items-center gap-2 ml-4">
    <CheckBox
      checked={todo.completed}
      onClick={handleToggle}
    />
    <Button onClick={handleDelete}>×</Button>
  </div>
</li>

  )
}

export default TodoItem