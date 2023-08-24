import "./BookApp.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Form, FormGroup, FormInput } from "shards-react";
import TestsData from "../../views/Admin/services/testsData";
import Tables from "./Tables";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";



function AppintmentInput() {

  const navigate = useNavigate()
const [name,setName]=useState('')
const [gender,setGender]=useState('')
const [dob,setDob]= useState('')
const [mobile,setMobile]=useState()
const [mail,setMail]=useState('')
const [appointment,setAppointment]= useState('')
const [time,setTime]=useState('')
const [presc,setPresc]=useState('')
const [stest,setStest]=useState('')

  const handleSubmit=async()=>{
    const Formdata={
      id:1,
      name:name,
      gender:gender,
      dob:dob,
      mobile:mobile,
      mail:mail,
      appointment:appointment,
      time:time,
      presc:presc
    }
    const test1= await TestsData.addData(Formdata)
    navigate("/employee-appointment-history")
  };



  return (
    <div>
      <Card large className="mb-3">
        <CardBody>
          <Form className="add-new-post" onSubmit={handleSubmit}>
            <div>
              <FormGroup>
                <label htmlFor="username">Patient Name</label>
                <FormInput id="username" placeholder="" onChange={(e)=>setName(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                    onChange={(e)=>setGender(e.target.value)}
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                    onChange={(e)=>setGender(e.target.value)}
                  />
                </RadioGroup>
              </FormGroup>
              <FormGroup>
                <label htmlFor="dateofbirth">Date Of Birth</label>
                <FormInput id="dateofbirth" type="date" placeholder="" onChange={(e)=>setDob(e.target.value)}/>
              </FormGroup>
              <FormGroup>
                <label htmlFor="mobileno">Mobile Number</label>
                <FormInput id="mobileno" placeholder="" onChange={(e)=>setMobile(e.target.value)}/>
              </FormGroup>
              <FormGroup>
                <label htmlFor="emailId">Email ID</label>
                <FormInput id="emailId" type="email" placeholder="" onChange={(e)=>setMail(e.target.value)}/>
              </FormGroup>
              <FormGroup>
                <label htmlFor="appdate">Appointment Date</label>
                <FormInput id="appdate" type="date" placeholder="" onChange={(e)=>setAppointment(e.target.value)}/>
              </FormGroup>
              <FormGroup>
                <label htmlFor="time">Appointment Time</label>
                <FormInput id="time" type="time" placeholder="" onChange={(e)=>setTime(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <label htmlFor="presc">Prescription(if any)</label>
                <FormInput id="presc" type="file" placeholder="" onChange={(e)=>setPresc(e.target.value)}/>
              </FormGroup>
              <Tables />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </CardBody>
      </Card>

    </div>
  );
}

export default AppintmentInput;
