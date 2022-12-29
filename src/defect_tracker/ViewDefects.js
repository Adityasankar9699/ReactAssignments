import React, { useEffect, useState } from 'react'
import {Table,Badge, Button } from 'reactstrap';
const ViewDefects = () => {
  const [defects, setDefects] = useState([])
  const fetchDefects = async () => {
    const data = await fetch(" http://localhost:3000/defects")
    const parsedData = await data.json()
    let user=sessionStorage.getItem('autenticatedUser')
    if(user=='admin'){
      setDefects(parsedData)
    }
    else{
      const filteredData=parsedData.filter((reqUser)=>reqUser.user==user)

      setDefects(filteredData)
    }
   
  }

  useEffect(() => {
    fetchDefects()
  }, [])
  return (
    <div>
      <h3>Hello</h3>
      <Table
      >
        <thead>
          <tr>
            <th>
              Defect Category
            </th>
            <th>
              Description
            </th>
            <th>
              Priority
            </th>
            <th>
              Status
            </th>
            <th>
              Change Status
            </th>
          </tr>
        </thead>
        <tbody>
          {defects.map((defect) => {

            return <tr>
              <td>{defect.defectcategory}</td>
              <td>{defect.description}</td>
              <td>{defect.priority}</td>
              <td>{defect.status.toString()}</td>
              <td>{<Button>Close Defect</Button>}</td>

            </tr>
          })}


        </tbody>
      </Table>
    </div>
  )
}

export default ViewDefects