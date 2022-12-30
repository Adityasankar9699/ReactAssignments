import React from 'react'

const Employee = (props) => {
  return (
    
<div className="card" style="width: 18rem;">
  <div className="card-body">
    <h5 className="card-title">Employee details</h5>
    <p className="card-text">{props.emp.name}</p>
    <p className="card-text">{props.emp.subject}</p>
  </div>
</div>
  )
}

export default Employee