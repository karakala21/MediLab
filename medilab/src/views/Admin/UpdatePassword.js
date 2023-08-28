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
  const savedata = async (e) => {
    e.preventDefault()
    debugger
    const tests = await TestsData.addPass(confirm)
   alert("Password Updated Successfully!!!")
    
  };
  return (
    <div>
      <PageTitle sm="4" title="Change Password" className="text-sm-left" style={{ margin: "2%" }} />
      <Card large className="mb-3" style={{ margin: "2%" }}>
        <CardBody>
        
          <Form className="add-new-post" onSubmit={savedata}>
           
            <label className='label' >Current Password </label><input type='password' placeholder='' className='Title' id="title" style={{padding:"10px"}}/><br />
            <label className='label'>New Password    </label><input type='password' placeholder='' className='Title' id="price" style={{ marginLeft: "2%",padding:"10px" }} /><br />
            <label className='label'>Confirm Password </label><input type='password' placeholder='' className='Title' id="price" style={{ marginLeft: "-0.5%" ,padding:"10px"}} onChange={(e)=>setConfirm(e.target.value)}/><br />
            <center><button className='button' style={{ alignContent: "center", margin: "2%", padding: "5px", backgroundColor: "green" }}>Change</button></center>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default UpdatePassword
