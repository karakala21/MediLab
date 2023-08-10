import React, { useState } from 'react'
import { Card, CardBody, Form,FormGroup,FormInput } from "shards-react";
import './BookApp.css';
import Radio from "./Radio";
import Tables from "./Tables";

function AppintmentInput(){

  return (
    <div>
      <Card large className="mb-3">
      <CardBody>
      <Form className="add-new-post">
      <div >
      <div class="table1" >
      {/* <h5 class="head">Appointment Details</h5> */}
      <FormGroup>
        <label htmlFor="#username">Patient Name</label>
        <FormInput id="#username" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Radio/>
      </FormGroup>
      <FormGroup>
        <label htmlFor="#dateofbirth">Date Of Birth</label>
        <FormInput id="#dateofbirth" type = "date" placeholder="" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="#mobileno">Mobile Number</label>
        <FormInput id="#mobileno" placeholder="" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="#emaiId">Email ID</label>
        <FormInput id="#emailId" type = "email" placeholder="" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="#appdate">Appointment Date</label>
        <FormInput id="#appdate" type = "date" placeholder="" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="#time">Appointment Time</label>
        <FormInput id="#time" type = "time" placeholder="" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="#presc">Prescription(if any)</label>
        <FormInput id="#presc" type = "file" placeholder="" />
      </FormGroup>
      <h6>Select Test</h6>
      <Tables/>
      </div >
      <div class="Book">
        <button onclick="editTableDisplay()">BookAppointment </button>
      </div>
    </div>
      </Form>
    </CardBody>
    </Card>
    </div>
  )
}


export default AppintmentInput
