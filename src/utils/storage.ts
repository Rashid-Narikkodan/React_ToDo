import type { Todo } from "../types/Todo";

const KEY = 'todos'

export const loadTodos=():Todo[]|string|void=>{
  try{
    const todos = localStorage.getItem(KEY)
    if(todos){
      return JSON.parse(todos)
    }else{
      throw new Error("No items exist in Todo list");
    }
  }catch(error:unknown){
    if(error instanceof Error) return error.message 
  }
}

export const saveTodos=(todos:Todo[])=>{
      return localStorage.setItem(KEY,JSON.stringify(todos))
}