import React, { useState } from 'react'
const Counter = (props) => {
const bstyle={
    backgroundColor:'greeen',
    color:'red',
}

  return (
    <div>
    <h5>this is a button with incement value {props.incr}</h5>
    <button style={bstyle} onClick={()=>props.incrFunction(props.incr)}>{props.incr}</button>
    
    </div>
    
  )
}

export default Counter