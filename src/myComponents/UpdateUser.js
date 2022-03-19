


import React, { useEffect, useState } from 'react'
import { FormGroup, FormControl, InputLabel, Input, Button, Typography } from "@mui/material";
import {  getEmployee, updateEmployee } from '../service/Api';
import { useNavigate, useParams } from "react-router-dom";



// design/styling
const formGroup = {
  width:'50vw',
  margin:'40px 0px 0px 0px'
}
const formControl = {
  margin:'13px 0px 0px 0px'
}
const button = {
  marginTop:'30px',
  width:'10vw'
}
const typography = {
  fontSize:'25px',
  color:'black'
}

const initialValues = {
  name:'',
  fatherName:'',
  eMail:'',
  adress:''
}

export default function UpdateUser() {
  const [enterEmployees, setEnterEmployee ] = useState(initialValues);
  const {name, fatherName, eMail, adress} = enterEmployees;
  const navigate = useNavigate();
  const {id} = useParams();


  useEffect(() =>{
    loadUserData();
  },[]);

  const loadUserData = async () => {
    const response =await getEmployee(id);
    setEnterEmployee(response.data)
  }


  const onValueChange = (e) =>{
    setEnterEmployee({...enterEmployees, [e.target.name]: e.target.value})
  }

  const updateEmployeeDetails = async () =>{
    await updateEmployee(id, enterEmployees)
    navigate('/all')
  }

  return (
    <div>
      <FormGroup style={formGroup} >
        <Typography style={typography}>Update User</Typography>
        <FormControl style={formControl}>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
        </FormControl>
        <FormControl style={formControl}>
          <InputLabel>Father Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='fatherName' value={fatherName} />
        </FormControl>
        <FormControl style={formControl}>
          <InputLabel>E-mail</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='eMail' value={eMail} />
        </FormControl>
        <FormControl style={formControl}>
          <InputLabel>Adress</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='adress' value={adress} />
        </FormControl>
        <Button onClick={() => updateEmployeeDetails()} color='success' variant='contained' style={button}>Update User</Button>
      </FormGroup>
        
    </div>
  )
}
