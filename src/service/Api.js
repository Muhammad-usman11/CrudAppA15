


import axios from 'axios'


const url = "http://localhost:3003/employee";
export const getEmployee = async (id) =>{
    id = id || '';
    return await axios.get(`${url}/${id}`);
} 

export const addEmployee = async (enterEmployees) => {
    return await axios.post(url,enterEmployees)
}

export const updateEmployee = async (id,enterEmployees) =>{
    return await axios.put(`${url}/${id}`, enterEmployees)
}

export const deleteEmployee = async (id) =>{
    return await axios.delete(`${url}/${id}`)
}
