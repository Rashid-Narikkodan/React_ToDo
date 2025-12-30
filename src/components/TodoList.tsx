import TodoItem from "./TodoItem";
import type { TodoListProps } from "../types/TodoListProps";
const TodoList = ({deleteTodo,toggleTodo,todos}:TodoListProps) => {
  return (
    <ul className="p-3 gap-2 flex flex-col
        bg-zinc-900 rounded-lg border border-zinc-800
        w-sm mt-2
        min-h-60
        max-h-80
        overflow-y-auto">
      {todos.length?todos.reverse().map(todo=> <TodoItem key={todo.id} onToggle={toggleTodo} onDelete={deleteTodo} todo={todo}/> )
      :<li className="text-zinc-400 flex justify-center items-center h-100">Nothing To Do</li> }
    </ul>
  )
}

export default TodoList