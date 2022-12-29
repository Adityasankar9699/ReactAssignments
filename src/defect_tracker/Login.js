import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Form,FormGroup,Label,Input,Button,Alert} from 'reactstrap';
const Login = (props) => {

  const [users,setUsers]=useState([])
  const fetchUsers=async()=>{
    const data=await fetch("http://localhost:3000/users")
        const parsedData=await data.json()
        setUsers(parsedData)
  }

  const navigate=useNavigate()
  const[user,setUser]=useState({username:'',password:''})
  const[success,setSuccess]=useState(true)
  const clickHandler=async(e)=>{
    const data=await fetch("http://localhost:3000/users")
    const response= await data.json()
    fetchUsers()
    response.map(res=>{
      if(user.username==res.username&user.username!='admin' && user.password==res.password& user.password!='admin')
      {
        props.login(user.username)
        setSuccess(true)
        navigate('/addefect')
      }
      else if(user.username=='admin' && user.password=='admin'){
        props.login(user.username)
        setSuccess(true)
        navigate('/ViewDefects')
      }
      else
      {
        
        setSuccess(false)
        setTimeout(()=>{
          setSuccess(true)
        },3000)
      }
    })
    e.preventDefault();
   
  
}
const registerHandler=()=>{
  navigate('/Register')
}
  const changeHandler=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }



  return (
    <div className='container mx-2 my-3' style={{width:'50%'}}>
      <Form>
        {!success && <Alert color='danger'>Login Failed</Alert>}
  <FormGroup>
    <Label for="exampleEmail">
      Username
    </Label>
    <Input
      id="exampleEmail"
      name="username"
      placeholder="Username"
      type="text"
      value={user.username}
      onChange={changeHandler}
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
      value={user.password}
      onChange={changeHandler}
    />
  </FormGroup>
  <Button onClick={clickHandler}>
    Submit
  </Button>
  <Button onClick={registerHandler}>
   Register
  </Button>
  </Form>
    </div>
  )
}

export default Login