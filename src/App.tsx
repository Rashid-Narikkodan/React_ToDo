import TodoForm from "./components/TodoForm"
import { useTodos } from "./hooks/useTodos"

function App() {
  const { addTodo, deleteTodo, toggleTodo, todos }=useTodos()
  return (
    <main className="bg-black min-h-screen flex items-center justify-center">
        <TodoForm addTodo={addTodo}/>
    </main>
  )
}

export default App
