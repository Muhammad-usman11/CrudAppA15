


import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getEmployee, deleteEmployee } from '../service/Api';
import { Link } from "react-router-dom";



export default function AllUser () {
  const design = {
    width: '70vw',
    // backgroundColor:'cornsilk ',
    marginTop:'40px'
  }

  const [employees, setEmployee] = useState([]);
 
  
   // react Hook 
 
  useEffect(() =>{
    getAllEmployee();
  },[])

  const getAllEmployee = async () =>{
    const response = await getEmployee();
    console.log(response.data);
    setEmployee(response.data);
  }

  const deleteEmployeeData = async (id) =>{
    await deleteEmployee(id);
    getAllEmployee();
  }

  
  return (
    <div>
      <Table style={design} >
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Employee Name</TableCell>
            <TableCell>Father Name</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Adress</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
          {
            employees.map(employee =>(
              <TableRow>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.name} </TableCell>
                <TableCell>{employee.fatherName}</TableCell>
                <TableCell>{employee.eMail}</TableCell>
                <TableCell>{employee.adress}</TableCell>
                <Button variant='contained' color='success'  component={Link} to={`/update/${employee.id}`}  >Update</Button>
                <Button style={{marginLeft:'10px'}} variant='contained' color='error' onClick={() => deleteEmployeeData(employee.id)}>Delete</Button>
              </TableRow>
            ) )
          }
        </TableBody>



      </Table>

    </div>
  )
}
