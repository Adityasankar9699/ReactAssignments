import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container,Form,Input,Label,Button ,FormGroup} from 'reactstrap'

const UpdateTodo = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const [todo,setTodo]=useState({})
    useEffect(()=>{
        setTodo(location.state.todo)
    },[])
    const onchangeHandler=(e)=>{
        setTodo({...todo,[e.target.name]:e.target.value})
    }

    const clickHandler=async()=>{
        const requestOptions={
            'method':'PUT',
            'body':JSON.stringify({
                task:todo.task,prerequisites:todo.prerequisites,isDone:todo.isDone
            }),
            'headers':{"Content-type":"application/json"}
        }
        const data=await fetch(`http://localhost:5000/todos/${todo.id}`,requestOptions)
        const response=await data.json()
        
        navigate('/todos')
    }
  return (
    <Container>
        
<Form>
  <FormGroup>
    <Label for="task">
      Task
    </Label>
    <Input
      id="task"
      name="task"
      placeholder="with a placeholder"
      type="text"
      value={todo.task}
      onChange={onchangeHandler}
    />
  </FormGroup>
  <FormGroup>
    <Label for="prerequisites">
    Prerequisites
    </Label>
    <Input
      id="prerequisites"
      name="prerequisites"
      placeholder="with a placeholder"
      type="text"
      value={todo.prerequisites}
      onChange={onchangeHandler}
    />
  </FormGroup>
  <FormGroup check>
    <Input type="checkbox" />
    {' '}
    <Label check>
      Check me out
    </Label>
  </FormGroup>
  <Button color='success' onClick={clickHandler}>
    Submit
  </Button>
  </Form>
    </Container>
  )
}

export default UpdateTodo