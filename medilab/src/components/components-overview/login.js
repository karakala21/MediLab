//import React from 'react'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Card } from 'shards-react'
import { TextField, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import { employeeList } from '../../data/Employee-list';
import TestsData from '../../views/Admin/services/testsData';

export default function Login() {
  debugger
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = React.useState(localStorage.getItem("isAuthenticated"))
  const [user,setUser]=useState(localStorage.getItem('user'))
  const [users,setUsers]=useState(employeeList)
  const pass1 = TestsData.getpassData()
  const login = () => {
    if (email === "admin@gmail.com" && password === pass1[pass1.length - 1]){
      localStorage.setItem("isAuthenticated", 1)
      setIsAuthenticated(localStorage.setItem("isAuthenticated", 1))
      setUser(localStorage.setItem('user','admin'))
      navigate('/AdminDashboard')
    }else if (
      users.map((user)=>(
        email === user.id && password === user.password
        ))
      ) {
      localStorage.setItem("isAuthenticated", 1)
      setIsAuthenticated(localStorage.setItem("isAuthenticated", 1))
      setUser(localStorage.setItem('user','emp'))
      navigate('/employee')
    }
    else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }

  return (
    <div style={{backgroundColor:"#515fe0"}}>
      <h3 style={{color:"white",textAlign:"center",paddingTop:"10%"}}>Welcome to MediLab</h3>
      <div style={{justifyContent: 'center',alignItems: 'center',display: 'flex'}}>
      <Card style={{width:"30%" ,padding:"30px", marginTop: '30px',marginBottom:"200px", display: 'flex' }}>
        <h5>Sign In with your MediLab Account</h5>
        {error ? <Alert severity="error">Invalid Credintails</Alert> : ""}
        <TextField type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} sx={{ marginBottom: "20px", marginTop: '40px' }} />
        <TextField type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: '20px' }} />
        <Button variant='contained' onClick={login}>Login</Button>
      </Card>
    </div>
    </div>
  )
}
