import React, { useState } from 'react'
import {Form,FormGroup,Label,Input,Button,Alert} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate=useNavigate()
  const [users,setUsers]=useState([])
  const onchangeHandler=(e)=>{
    setUsers({...users,[e.target.name]:e.target.value})
  }
  const addUsersHandler=async()=>{
   const requestOptions={
        'method':'POST',
        'body':JSON.stringify({
          username:users.username,password:users.password
        }),
        'headers':{"Content-type":"application/json"}
    }
    const data=await fetch(`http://localhost:3000/users`,requestOptions)
    const response=await data.json()
    navigate('/Login')
  }

  return (
    <div className='container mx-2 my-3' style={{width:'50%'}}>
        <FormGroup>
    <Label for="exampleEmail">
      Username
    </Label>
    <Input
      id="exampleEmail"
      name="username"
      placeholder="Username"
      type="text"
      value={users.username}
      onChange={onchangeHandler}
     
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="Password"
      type="password"
      value={users.password}
      onChange={onchangeHandler}
     
    />
  </FormGroup>
  <Button onClick={addUsersHandler}>
    Register
  </Button>
    </div>
  )
}

export default Register