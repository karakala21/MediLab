import React from 'react'
import {Navigate,useNavigate} from "react-router-dom"


export default function Login() {
    const navigate=useNavigate()
const [isAuthenticated,setIsAuthenticated] = React.useState(localStorage.getItem("isAuthenticated"))


    const login =()=>{
        localStorage.setItem("isAuthenticated",1)
setIsAuthenticated(localStorage.setItem("isAuthenticated",1))
navigate('/blog-overview')
    }

  return (
    <div style={{backgroundColor:'red'}}>
        <button onClick={login}>Login</button>
        
    </div>
  )
}
