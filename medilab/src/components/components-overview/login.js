//import React from 'react'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "shards-react";
import { TextField, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import { employeeList } from "../../data/Employee-list";
import TestsData from "../../views/Admin/services/testsData";

export default function Login() {
  debugger;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(
    localStorage.getItem("isAuthenticated")
  );
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [users, setUsers] = useState(employeeList);
  const pass1 = TestsData.getpassData();
  const login = () => {
    if (email === "admin@gmail.com" && password === pass1[pass1.length - 1]) {
      localStorage.setItem("isAuthenticated", 1);
      setIsAuthenticated(localStorage.setItem("isAuthenticated", 1));
      setUser(localStorage.setItem("user", "admin"));
      navigate("/AdminDashboard");
    } else if (email==="user@gmail.com" && password === "user123") {
      localStorage.setItem("isAuthenticated", 1);
      setIsAuthenticated(localStorage.setItem("isAuthenticated", 1));
      setUser(localStorage.setItem("user", "emp"));
      navigate("/employee");
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#515fe0",
        height: "100vh",
        paddingBottom: "12%",
        paddingTop: "5%",
        paddingLeft:"2%",
        paddingRight:"2%"
      }}
    >
      <Card style={{ width: "100%", height: "120%" }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTletWVRi5M9O71NJbCgnXLmPcNVFH2IOW4WOTUUgw9gTv1mxBlZAOqLJ5qK5GQGgnv1g&usqp=CAU" alt="" height={"15%"} width={"25%"} style={{marginLeft:"35%"}}></img>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div style={{ flex: 1, padding: "20px", marginLeft: "5%" }}>
            
              <div style={{padding:"20px"}}>
              <p style={{ fontStyle:"bold", color:"blue",fontSize:"20px"}}>
                Welcome to Medilab - Your Health is our priority!
                </p>
                <p>
                At Medilab, we understand the importance of your health and
                well-being. Our platform is designed to make booking
                appointments for lab tests quick and convenient, putting your
                health at the forefront.Join thousands of individuals who trust 
                Medilab for their lab testing needs.<br/><br/>
                <p style={{ fontStyle:"bold", color:"#0b8715",fontSize:"20px"}}>
                 Log in now to take control of your health journey with Medilab.
                 </p>
              </p>
              </div>
            
          </div>
          <div style={{ flex: 1, paddingTop: "10px",paddingLeft:"10%" }}>
            <Card style={{ width: "400px", height: "350px" }}>
              <div style={{ padding: "30px" }}>
                <h5>Sign In with your MediLab Account</h5>
                {error ? (
                  <Alert severity="error">Invalid Credintails</Alert>
                ) : (
                  ""
                )}
                <TextField
                  type="email"
                  placeholder="Email"
                  onChange={e => setEmail(e.target.value)}
                  sx={{ marginBottom: "20px", marginTop: "20px",marginLeft:"50px" }}
                />
                <TextField
                  type="password"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                  style={{ marginBottom: "20px",marginLeft:"50px" }}
                /><br/>
                <Button variant="contained" onClick={login} style={{marginLeft:"130px"}}>
                  Login
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}
