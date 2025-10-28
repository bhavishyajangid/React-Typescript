import { Button, Checkbox, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'

type propsItem = {
    todo : todoItemType,
    deleteHandler : (id : todoItemType['id']) => void,
    completeHandler : (id : todoItemType['id']) => void,
    editTask : (id:todoItemType['id'] , newTitle : todoItemType['tittle']) => void,
}



const Todo_Items = ({todo , deleteHandler , completeHandler , editTask} : propsItem) => {
     const [editActive , setEditActive] = useState<boolean>(false)
     const [editTitle , setEditTittle]  = useState<todoItemType['tittle']>(todo.tittle)

  return (
   <Paper sx={{padding : '1rem'}}>
    <Stack direction={'row'} gap={"1rem"} alignItems={'center'} >

{
  editActive ? 
  <TextField value={editTitle} onChange={(e) => {
     setEditTittle(e.target.value)
  }}
  onKeyDown={(e) => {
    if(e.key === 'Enter' && editTitle.trim() !== ''){
       editTask(todo.id , editTitle)
      setEditActive(false)
    }
  }}
   >
     
  </TextField> :  
  <Typography marginRight={'auto'}>
        {todo.tittle}
    </Typography>
}

       
    <Checkbox checked={todo.isCompleted} onChange={() => {completeHandler(todo.id)}} />
    <Button onClick={() => {setEditActive(prev => !prev)}} sx={{fontWeight : '600'}}>
      {
        editActive ? 'Done' : 'Edit'
      }
      
      </Button>
    <Button onClick={() => {deleteHandler(todo.id)}} sx={{color : 'red' , fontWeight : '600'}}>Delete</Button>
    </Stack>
   </Paper>
  )
}

export default Todo_Items