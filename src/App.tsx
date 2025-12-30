import TodoForm from "./components/TodoForm"
import { useTodos } from "./hooks/useTodos"

function App() {
  const { addTodo, deleteTodo, toggleTodo, todos }=useTodos()
  return (
    <div>
        <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
