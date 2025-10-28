import React, { useEffect, useState } from 'react'
import './App.css'
import { AppBar, Container, Toolbar, Typography, Stack, TextField, Button } from '@mui/material'
import Todo_Items from './components/Todo_Items'
import { getTodos, saveTodos } from './utility/Features'
const App = () => {
  const [todos, setTodos] = useState<todoItemType[]>(getTodos())

  const [title , setTitle] = useState<todoItemType['tittle']>('')



  const completeHandler = (id:todoItemType['id']):void => {
    
    const index  = todos.findIndex((todo) => todo.id == id)
    console.log(id , index);
    if(index !== -1){
        todos[index].isCompleted = !todos[index].isCompleted
        setTodos([...todos])
     }
  }

  const deleteHandler = (id:todoItemType['id']):void => {
    const filteredTodos:todoItemType[] = todos.filter((todo) => todo.id !== id)
    setTodos(filteredTodos)
  }

  const editTask = (id:todoItemType['id'] , newTitle : todoItemType['tittle']) => {
    const index  = todos.findIndex((todo) => todo.id == id)
    if(index !== -1){
        todos[index].tittle = newTitle
        setTodos([...todos])
     }
  }

  const submitHandler = ():void => {

    if(title.trim() === '') return;

      const newTodo:todoItemType = {
        tittle : title,
        isCompleted : false,
        id : Date.now().toString()
      }

      setTodos([...todos , newTodo])
      setTitle('')
  }

  useEffect(() => {
  saveTodos(todos)
  }, [todos])


  return (
    <Container maxWidth="md" sx={{ height: "80vh" }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography>My App</Typography>
        </Toolbar>
      </AppBar>

      <Stack height={'80%'} direction={'column'} spacing={'1rem'} p={'1rem'}>
        {
          todos.map((todo) => (
            <Todo_Items
             completeHandler={completeHandler}
             deleteHandler={deleteHandler}
             editTask={editTask}
              key={todo.id}
              todo={todo}
            />
          ))
        }
      </Stack>
      <Container>

        <TextField value={title} onChange={(e) => {setTitle(e.target.value)}} fullWidth label={'New Task'} onKeyDown={(e) => {
           if(e.key == 'Enter') submitHandler()
        }} />
        <Button sx={{ margin: '1rem  0' }} fullWidth variant='contained' onClick={submitHandler}>Add</Button>
      </Container>
    </Container>
  )
}

export default App