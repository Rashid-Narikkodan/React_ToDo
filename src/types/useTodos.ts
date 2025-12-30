import type { Todo } from "./Todo"

export type UseTodos={
  todos:Todo[]
  addTodo:(text:string)=>void,
  toggleTodo:(id:string)=>void,
  deleteTodo:(id:string)=>void
}