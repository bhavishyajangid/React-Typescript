export const saveTodos = (todos: todoItemType[]) : void => {
    localStorage.setItem('todos' , JSON.stringify(todos))
}

export const getTodos = () : todoItemType[] => {
   const todos = localStorage.getItem('todos')
   return todos ? JSON.parse(todos) : []
 }
