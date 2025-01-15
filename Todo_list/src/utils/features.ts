
export const saveTodos = (todo : TodoItems[]):void => {
     localStorage.setItem("allTodo" , JSON.stringify(todo))
}

export const getTodos = ():TodoItems[] => {
   const todo = localStorage.getItem("allTodo")
   return todo ? JSON.parse(todo) : []
}


