import React, { useState } from 'react'
import Employee from './Employee'
const Employees = () => {
    const [emps,setEmps]=useState([
        {name:'Aditya', subject:'Java'},
        {name:'Anuj',subject:'c++'}
    ])
    const empsData=emps.map((emp)=>{
        return <Employee emp={emp} />
    })

  return (
    <div>
    {empsData}
    
    </div>
    
  )
}

export default Employees