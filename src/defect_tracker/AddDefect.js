import React, { useReducer, useState } from 'react'
import api from '../api/Defects'
import { useNavigate,Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, Col, Card,CardBody ,CardTitle} from 'reactstrap';

const { v4: uuidv4 } = require('uuid');
const AddDefect = () => {
  const navigate=useNavigate()
  const [defects,setDefects]=useState([])
  const onchangeHandler=(e)=>{
    setDefects({...defects,[e.target.name]:e.target.value})
}
  const addDefectHandler=async()=>{
  
   let user=sessionStorage.getItem('autenticatedUser')
    const requestOptions={
        'method':'POST',
        'body':JSON.stringify({
          defectcategory:defects.defectcategory,description:defects.description,priority:defects.priority,status:true,user:user
        }),
        'headers':{"Content-type":"application/json"}
    }
    const data=await fetch(`http://localhost:3000/defects`,requestOptions)
    const response=await data.json()
    console.log(defects.defectcategory)
    navigate("/ViewDefects")
  }
  return (
    <div className='container mx-2 my-3' style={{ width: '50%' }}>
       <Link to='/ViewDefects'>ViewDefects</Link>
      <Card
        style={{
          width: '50rem'
        }}
      >
        <CardBody>
        <CardTitle tag="h5" align='center'>
      Add Defects
    </CardTitle>
        <Form>
        
        <FormGroup row>
          <Label
            for="defectcategory"
            sm={2}
          >
            Defect Category
          </Label>
          <Col sm={10}>
            <select
              id="defectcategory"
              name="defectcategory"
              type="select"
              value={defects.defectcategory}
              onChange={onchangeHandler}
                
            >
              <option>
                Functional
              </option>
              <option>
                Change Request
              </option>
              <option>
                UI
              </option>
            </select>
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label
            for="description"
            sm={2}
          >
            Description
          </Label>
          <Col sm={10}>
            <Input
              id="description"
              name="description"
              type="textarea"
              value={defects.description}
              onChange={onchangeHandler}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label
            for="priority"
            sm={2}
          >
           Priority
          </Label>
          <Col sm={10}>
            <Input
              id="priority"
              name="priority"
              placeholder="with a placeholder"
              type="text"
              value={defects.priority}
              onChange={onchangeHandler}
            />
          </Col>
        </FormGroup>
        <FormGroup
          check
          row
        >
          <Col
            sm={{
              offset: 2,
              size: 10
            }}
          >
            <Button onClick={addDefectHandler}>
              Add Defect
            </Button>
          </Col>
        </FormGroup>
      </Form>
        </CardBody>
      </Card>
      
    </div>
  )
}

export default AddDefect