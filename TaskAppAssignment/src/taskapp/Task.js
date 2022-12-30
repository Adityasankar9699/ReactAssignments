import React, { useEffect, useState } from 'react'
import {
  Form, FormGroup, Input, Button, Table, Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { MdDelete } from 'react-icons/md'


const Task = () => {
  const [tasks, setTasks] = useState([])
  const [isChecked, setIsChecked]=useState(false)
 
  const onchangeHandler = (e) => {
    setTasks({ ...tasks, [e.target.name]: e.target.value })
  }
  const clickHandler = async () => {
    console.log(tasks.task)
    const requestOptions = {
      'method': 'POST',
      'body': JSON.stringify({
        task: tasks.task
      }),
      'headers': { "Content-type": "application/json" }
    }
    const data = await fetch(`http://localhost:3000/tasks`, requestOptions)
    const response = await data.json()
    window.location.reload(false);
    console.log(tasks.task)
  }
  const [task, setTask] = useState([])
  const fetchHandler = async () => {

    const data = await fetch("http://localhost:3000/tasks")
    const parsedData = await data.json()
    setTask(parsedData)


  }
  const deleteHandler = async () => {
    const data1 = await fetch("http://localhost:3000/tasks")
    const parsedData = await data1.json()

    parsedData.map((task) => {
      const requestOptions = {

        'method': 'Delete',
        'body': JSON.stringify({
        }),
        'headers': { "Content-type": "application/json" }
      }

      console.log(task.id)
      const data = fetch(`http://localhost:3000/tasks/${task.id}`, requestOptions)
      window.location.reload(false);
      const response = data.json()


    })

  }
  const checkHandler=()=>{
    
  }
  useEffect(() => {
    fetchHandler()
  }, [])

  return (
    <div className='container mx-2 my-3' style={{ width: '50%' }}>
      <Form className='d-flex'>
        <FormGroup >
          <Input type="text" name="task" id="task" value={tasks.task}
            onChange={onchangeHandler} placeholder="What needs to be done" />
        </FormGroup>
        <Button onClick={clickHandler}>Add</Button>
      </Form>
      <Container>
        <Card>
          <CardBody>
            <Table
            > <thead>
                <tr>
                  <th>
                    Todo List
                  </th>
                </tr>
              </thead>
              <tbody>
                {task.map((task) => {
                  return <tr>
                    
                    <td style={{textDecoration:isChecked?'line-through':'none'}} ><input type="checkbox" name={task.task} id={task.id} value={true} onChange={()=>setIsChecked(!isChecked)}/>{task.task}&nbsp;</td>
                   <td><input type="checkbox" name={task.task} id={task.id} value={true} onClick={checkHandler}/></td>
                    <td><Button onClick={deleteHandler}><MdDelete></MdDelete></Button></td>

                  </tr>
                })}</tbody>
            </Table>
          </CardBody>
        </Card>
      </Container>

    </div>


  )
}

export default Task