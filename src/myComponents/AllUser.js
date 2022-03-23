


import {Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getEmployee, deleteEmployee } from '../service/Api';
import { Link } from "react-router-dom";
import { fontWeight } from '@mui/system';



export default function AllUser () {
  const tableHeading = {
    fontSize:'16px',
    fontWeight:'bold',
    color:'blue'
  }
  const heading = {
  fontSize:'25px',
  color:'blue',
  marginTop:'40px'
  }
  const design = {
    width: '100vw',
    // backgroundColor:'cornsilk ',
    marginTop:'20px'
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
      <Typography style={heading}>All Users</Typography>
      <Table style={design} >
        <TableHead>
          <TableRow>
            <TableCell style={tableHeading}>ID</TableCell>
            <TableCell style={tableHeading}>Employee Name</TableCell>
            <TableCell style={tableHeading}>Father Name</TableCell>
            <TableCell style={tableHeading}>E-mail</TableCell>
            <TableCell style={tableHeading}>Adress</TableCell>
            <TableCell style={tableHeading}>Action</TableCell>
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
                <Button variant='contained' color='error' onClick={() => deleteEmployeeData(employee.id)}>Delete</Button>
                <Button variant='contained' color='primary' component={Link} to={"/add"}  >Add</Button>
              </TableRow>
            ) )
          }
        </TableBody>



      </Table>

    </div>
  )
}
