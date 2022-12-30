import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Form,FormGroup,Label,Input,Button,Alert} from 'reactstrap';
const Login = (props) => {
  const navigate=useNavigate()
  const[user,setUser]=useState({username:'',password:''})
  const[success,setSuccess]=useState(true)
  const clickHandler=(e,name)=>{
    e.preventDefault();
    if(user.username=='Aditya' && user.password=='Aditya@9699')
    {
      props.login(user.username)
      setSuccess(true)
      navigate('/Welcome',{state:{name:user.username,message:'hello master developer'}})
    }
    else
    {
      
      setSuccess(false)
      setTimeout(()=>{
        setSuccess(true)
      },3000)
    }
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
  </Form>
    </div>
  )
}

export default Login