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


// import {useState, useRef} from 'react';
// function Child({onIncrease,count}) {
// 	return (
// 		<>
// 			<button onClick={()=>onIncrease(count+1)}>Click</button>
// 		</>
// 	)
// }

// function Parent() {
// 	textconst [count, setCount] = useState(0)
//   const inputRef=useRef()
//     return (
//       <>
// 			<h1 className={`${count%2!==0?'text-red-400':''}`}>Count : {count}</h1>
// 			<Child onIncrease={setCount} count={count}/>
//       <input type="text" ref={inputRef} />
// 		</>
// 	)

// }

// export default Parent