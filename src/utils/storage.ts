import type { Todo } from "../types/Todo";

const KEY = 'todos'

export const loadTodos=():Todo[]=>{
  try{
    const todos = localStorage.getItem(KEY)
    if(todos){
      return JSON.parse(todos)
    }else{
      return []
    }
  }catch{
    return []
  }
}

export const saveTodos=(todos:Todo[])=>{
      return localStorage.setItem(KEY,JSON.stringify(todos))
}