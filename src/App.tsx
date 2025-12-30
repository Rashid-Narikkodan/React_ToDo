import TodoForm from "./components/TodoForm"
import { useTodos } from "./hooks/useTodos"
import TodoList from "./components/TodoList"
import Greet from "./components/Greet"

function App() {
  const { addTodo, deleteTodo, toggleTodo, todos }=useTodos()
  return (
    <main className="bg-black min-h-screen flex flex-col items-center justify-center">
        <Greet />
        <TodoForm addTodo={addTodo}/>
        <TodoList deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={todos} />
    </main>
  )
}

export default App
