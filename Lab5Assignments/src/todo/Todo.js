import React from 'react'
import { Button } from 'reactstrap'

const Todo = (props) => {
    const ACTIONS={
        ADD_TODO:'addtask',
        TOGGLE_TODO:'toggletodo',
        DELETE_TODO:'deletetodo'
    }
  return (
    <div>
        <span style={{color:props.todo.complete?'#AAA':'#123'}}>
        {props.todo.name}
        </span>
       
        &nbsp;&nbsp;&nbsp;&nbsp; <Button color='success'onClick={()=>props.dispatch({
            type:ACTIONS.TOGGLE_TODO,payload:{id:props.todo.id}
        })}>Toggle</Button>
        &nbsp;&nbsp;&nbsp;&nbsp; <Button color='danger' onClick={()=>props.dispatch({
            type:ACTIONS.DELETE_TODO,payload:{id:props.todo.id}
        })}>Delete</Button>
    </div>
  )
}

export default Todo