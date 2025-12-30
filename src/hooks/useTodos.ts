import { useEffect, useState } from 'react'
import type { Todo } from '../types/Todo'
import type { UseTodos } from '../types/useTodos'
import { loadTodos, saveTodos } from '../utils/storage'



export const useTodos=():UseTodos=>{
  const [todos,setTodos]=useState<Todo[]>(()=>loadTodos())

  useEffect(()=>{
    saveTodos(todos)
  },[todos])

  const addTodo=(text:string)=>{
    setTodos((prev)=>[...prev,{id:crypto.randomUUID(),title:text,completed:false}])
  }
  const toggleTodo=(id:string)=>{
    setTodos((prev)=>prev.map(todo=>todo.id == id ? {...todo,completed:!todo.completed} : todo ))
  }
  const deleteTodo=(id:string)=>{
    setTodos(prev=>
      prev.filter(todo=>todo.id !== id)
    )
  }
  return { todos, addTodo, deleteTodo, toggleTodo }
}