import React, { useReducer, useState } from 'react'
import { Button, Container } from 'reactstrap'
import Todo from './Todo'   



const TaskReducer = () => {
    const ACTIONS={
        ADD_TODO:'addtask',
        TOGGLE_TODO:'toggletodo',
        DELETE_TODO:'deletetodo'
    }
    function reducer(todos,action){
        switch(action.type){
            case ACTIONS.ADD_TODO:
                return [...todos,{id:Date.now(),name:action.payload.todo,complete:false}]
            case ACTIONS.DELETE_TODO:
                return todos.filter(todo=>todo.id!=action.payload.id)
            case ACTIONS.TOGGLE_TODO:
                return todos.map(todo=>{
                    if(todo.id==action.payload.id)
                        return {...todo,complete:!todo.complete}
                    else
                        return todo

                })
        }
    }
    const[todo,setTodo]=useState("")
    const [todos,dispatch]=useReducer(reducer,[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch({type:ACTIONS.ADD_TODO,payload:{todo:todo}})
    }
    
  return (
    <Container>
        <input type='text' value={todo} onChange={e=>setTodo(e.target.value)}/>
        <Button color='success' onClick={handleSubmit}>Add todo</Button>
        {todos.map((todo)=>{
            return <Todo todo={todo} dispatch={dispatch}/>
        })}
    </Container>
  )
}

export default TaskReducer