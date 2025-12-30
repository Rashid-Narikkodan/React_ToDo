import { useEffect, useState } from 'react'
import type { Todo } from '../types/Todo'
import { loadTodos, saveTodos } from '../utils/storage'

type useTodos={
  todos:Todo[]
  addTodo:(text:string)=>void,
  toggleTodo:(id:string)=>void,
  deleteTodo:(id:string)=>void
}

export const useTodos=():useTodos=>{
  const [todos,setTodos]=useState<Todo[]>(()=>loadTodos())

  useEffect(()=>{
    saveTodos(todos)
  },[todos])

  const addTodo=(text:string)=>{
    setTodos((prev)=>[...prev,{id:crypto.randomUUID(),title:text,completed:true}])
  }
  const toggleTodo=(id:string)=>{
    setTodos((prev)=>prev.map(todo=>todo.id == id ? {...todo,completed:true} : todo ))
  }
  const deleteTodo=(id:string)=>{
    setTodos(prev=>
      prev.filter(todo=>todo.id !== id)
    )
  }
  return { todos, addTodo, deleteTodo, toggleTodo }
}