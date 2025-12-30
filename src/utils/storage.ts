import type { Todo } from "../types/Todo"

const KEY = "todos"

export const saveTodos = (todos: Todo[]) => {
  localStorage.setItem(KEY, JSON.stringify(todos))
}

export const loadTodos = (): Todo[] => {
  const data = localStorage.getItem(KEY)
  return data ? JSON.parse(data) : []
}
