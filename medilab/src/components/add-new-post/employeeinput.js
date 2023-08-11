import {React,useState} from 'react'
import { Card, CardBody, Form } from "shards-react";
import "../add-new-post/TestInput.css"
import { employeeList } from '../../data/Employee-list';
import TestsData from '../../views/Admin/services/testsData';
import {useNavigate} from 'react-router-dom'

function EmployeeInput(){
  return(
    <div>
      <Card large className="mb-3">
      <CardBody>
      <Form className="add-new-post">
        <label className='label'>Employee_id : </label><input type='text' placeholder='id' className='Title'/><br/>
        <label className='label'>Employee_name: </label><input type='text' placeholder='alex' className='Title' style={{marginLeft:'-1.5%'}}/><br/>
        <label className='label'>Employee_Phone_no: </label><input type='number' placeholder='0909094563' className='Title' style={{marginLeft:'-4%'}}/><br/>
        <label className='label'>Employee_email: </label><input type='text' placeholder='albus@email.com' className='Title' style={{marginLeft:'-1.5%'}}/><br/>
        <label className='label'>Employee_address: </label><br/><textarea className='textarea' rows={7} placeholder='address' style={{marginLeft:'15%'}}></textarea><br/>
        <label className='label'>Employee_password: </label><input type='text' placeholder='xxxxxxx' className='Title' style={{marginLeft:'-4%'}}/><br/>
        <center><button className='button'>save</button></center>
      </Form>
      </CardBody>
      </Card>
    </div>
  );
}

export default EmployeeInput
