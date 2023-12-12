import React from 'react'
import { Card, CardBody, Form, Alert} from "shards-react";
import {useNavigate} from 'react-router-dom'
import PageTitle from "../../components/common/PageTitle";
import { useState } from "react";
import { passupdate } from '../../components/add-new-post/PassUpdate';
import TestsData  from './services/testsData';
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";


function UpdatePassword() {
  debugger
  const navigate = useNavigate()
  
  const [confirm,setConfirm]= useState('')
  const [newPass, setNewPass]= useState('')
  const [msg, setMsg]= useState('')
  const [msg1, setMsg1]= useState('')
  const savedata = async () => {
   
    debugger
    const tests = await TestsData.addPass(confirm)
   alert("Password Updated Successfully!!!")
   navigate('/AdminDashboard')
    
  };
  const handleValidation= (e) =>{
    e.preventDefault()
    //const re = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/'
    // if(confirm !== newPass && newPass !== re.match(newPass)){
    //   setMsg1("Passwords should be same")
    //   setMsg("Password should contain at least one lowercase, uppercase, digit, special character!")
    // }
   if(confirm !== newPass){
    //setMsg("Password should contain at least one lowercase, uppercase, digit, special character!")
      setMsg1("Passwords should be same")
    }
    // if(newPass === re.match(newPass)){
    //   if(confirm !== newPass){
    //     setMsg1("Passwords should be same")
    //   }
    // }
    // if(confirm === newPass){
    //   if(newPass !== re.match(newPass)){
    //     setMsg("Password should contain at least one lowercase, uppercase, digit, special character!")
    //   }
    // }
    
    // else if(newPass !== re.match(newPass)){
    //   setMsg("Password should contain at least one lowercase, uppercase, digit, special character!")
    // }
    else{
      savedata();
    }
   
    
  }
  // 8 to 15 characters which contain at least one lowercase letter, 
  // one uppercase letter, one numeric digit, and one special character
  return (
    <div>
      <PageTitle sm="4" title="Change Password" className="text-sm-left" style={{ margin: "2%" }} />
      <Card large className="mb-3" style={{ margin: "2%" }}>
        <CardBody>
        
          <Form className="add-new-post" onSubmit={handleValidation}>
           
            <label className='label' >Current Password </label><input type='password' placeholder='' className='Title' id="title" style={{padding:"10px"}}/><br />
            <label className='label'>New Password    </label><input type='password' placeholder='' className='Title' id="price" style={{ marginLeft: "2%",padding:"10px" }} onChange={(e)=>setNewPass(e.target.value)}/><br />
            <p style={{color: "red", margin:"5px", textAlign:"center"}}>{msg}</p>
            <label className='label'>Confirm Password </label><input type='password' placeholder='' className='Title' id="price" style={{ marginLeft: "-0.5%" ,padding:"10px"}} onChange={(e)=>setConfirm(e.target.value)}/><br />
           
           <p style={{color:"red", textAlign:"center"}}>{msg1}</p>
            <center><button className='button' style={{ alignContent: "center", margin: "2%", padding: "5px", backgroundColor: "green" }} onClick={handleValidation}>Change</button></center>
            
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default UpdatePassword
