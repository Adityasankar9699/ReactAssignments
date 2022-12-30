import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container } from 'reactstrap';

const Welcome = () => {
    const location=useLocation();
    const [message,setMessage]=useState("")
    const clickHandler=async()=>{
        const data=await fetch("http://localhost:5000/messages")
        const parsedData=await data.json()
        var randNum=Math.floor(Math.random()*4)+1;
        setMessage(parsedData[randNum].message)
    }
  return (
    <Container>
        <h3>Hello {location.state.name} your login is successful</h3>
         <Link to="/todos">Go to all todos</Link>
        <h5>{location.state.message}</h5>
        <p style={{color:'red'}}>{message}</p>
        <button onClick={clickHandler}>Click here</button>
    </Container>
  )
}

export default Welcome