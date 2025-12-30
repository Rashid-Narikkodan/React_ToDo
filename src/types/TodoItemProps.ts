import type { Todo } from "./Todo";

export type TodoItemProps={
    onToggle:(id:string)=>void,
    onDelete:(id:string)=>void,
    todo:Todo
}