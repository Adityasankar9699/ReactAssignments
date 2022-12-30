import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'reactstrap'
import {useNavigate} from 'react-router-dom'
const Todos = () => {
  const [todos,setTodods]=useState([])
  const navigate=useNavigate();
  const fetchTodos=async()=>{
    const data=await fetch("http://localhost:5000/todos")
        const parsedData=await data.json()
        setTodods(parsedData)
  }

  const deleteTodo=async(id)=>{
    const data=await fetch(`http://localhost:5000/todos/${id}`,{method:'delete'})
    const response=await data.json();
    fetchTodos();
  }

const getTodoById=async(id)=>{
  const data=await fetch(`http://localhost:5000/todos/${id}`)
  const response=await data.json();
  console.log(response)
  navigate('/updatetodo',{state:{todo:response}})
}

  useEffect(()=>{
    fetchTodos()
  },[])
  return (
    <Container>
      <Table>
        <thead>
          <th>ID</th>
          <th>TASK</th>
          <th>Prerequisites</th>
          <th>ISDONE</th>
          <th>UPDATE</th>
          <th>DELETE</th>
        </thead>
        <tbody>
        {todos.map((todo)=>{
        return <tr>
          <td>{todo.id}</td>
          <td>{todo.task}</td>
          <td>{todo.prerequisites}</td>
          <td>{todo.isDone.toString()}</td>
          <td><Button color='success' onClick={()=>getTodoById(todo.id)}>Update</Button></td>
          <td><Button color='danger' onClick={()=>deleteTodo(todo.id)}>Delete</Button></td>
        </tr>
      })}
        </tbody>
        
      </Table>
      
      
    </Container>
  )
}

export default Todos