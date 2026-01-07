import { loadTodos } from "./storage"

export const formValdation=(value:string)=>{
    if(!value) return 'Nothiing to add in Input'
    if(value.length<3) return 'Atleast 4 charecters needed'
    const todos =  loadTodos()
    const exist = todos.find(elem=> elem.title == value )
    if(exist) return 'Duplicated Task not allowed'

}