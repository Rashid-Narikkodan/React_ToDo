import TodoItem from "./TodoItem";
import type { TodoListProps } from "../types/TodoListProps";
const TodoList = ({deleteTodo,toggleTodo,todos}:TodoListProps) => {
  return (
    <ul className="p-3 gap-2 flex flex-col bg-zinc-900 rounded-lg border border-zinc-800 w-sm mt-2">
      {todos.map(todo=> <TodoItem key={todo.id} onToggle={toggleTodo} onDelete={deleteTodo} todo={todo}/> )}
    </ul>
  )
}

export default TodoList