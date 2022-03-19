



import React from "react";
import { BrowserRouter, Routes, Route, NavLink,  } from "react-router-dom";
import Home from "./myComponents/home/Home";
import AddUser from "./myComponents/AddUser";
import AllUser from "./myComponents/AllUser";
import NotFound from "./myComponents/NotFound";
import UpdateUser from "./myComponents/UpdateUser";

const navigation ={
  padding:'20px'
}

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavLink style={navigation} to={"/"} >Home</NavLink>
      <NavLink style={navigation} to={"/all"} >ALL User</NavLink>
      <NavLink style={navigation} to={"/add"} >Add User</NavLink>
        
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/all" element={<AllUser/>} />
        <Route path="/add" element={<AddUser/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/update/:id" element={<UpdateUser/>} />
       
      </Routes>
          
        
        
      
     
      

      </BrowserRouter>




    </div>
  );
}

export default App;
