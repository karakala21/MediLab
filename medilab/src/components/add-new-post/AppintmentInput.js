import "./BookApp.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Form, FormGroup, FormInput } from "shards-react";
import { Container, Row, Col} from "shards-react"
import TestsData from "../../views/Admin/services/testsData";
import { testsData } from "../../data/Tests-list";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";
import { appData } from "./AppointmentData";

function AppintmentInput() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState();
  const [mail, setMail] = useState("");
  const [appointment, setAppointment] = useState("");
  const [time, setTime] = useState("");
  const [presc, setPresc] = useState("");
  const [selectedTests, setSelectedTests] = useState([]); // Store selected tests here
  const [msg, setMsg] = useState("");
  const handleCheckboxChange = (test, isChecked) => {
    if (isChecked) {
      setSelectedTests([...selectedTests, test]);
    } else {
      setSelectedTests(
        selectedTests.filter(selectedTest => selectedTest !== test)
      );
    }
  };

  const handleSubmit = async () => {
    const Formdata = {
      id: appData.length+1,
      name: name,
      gender: gender,
      dob: dob,
      mobile: mobile,
      mail: mail,
      appointment: appointment,
      time: time,
      presc: presc,
      selectTest: selectedTests.join(", "),
      status: "pending",
    };
    const test1 = await TestsData.addData(Formdata);
    
    

    navigate("/employee-appointment-history");
  };
  const handleMobile= async (e) => {
    e.preventDefault();
    if(mobile.length !== 10 ){
      setMsg("Mobile number should contain 10 digits!")
    }
    else{
      handleSubmit();
    }
  }
  return (
    <div>
      <Card large className="mb-3">
        <CardBody>
          <Form className="add-new-post" onSubmit={handleMobile}>
            <div>
              <FormGroup>
                <label htmlFor="username">Patient Name<span style={{color:"red"}}>*</span></label>
                <FormInput
                  id="username"
                  placeholder=""
                  required
                  onChange={e => setName(e.target.value)}
                />
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
                    onChange={e => setGender(e.target.value)}
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                    onChange={e => setGender(e.target.value)}
                  />
                </RadioGroup>
              </FormGroup>
              <FormGroup>
                <label htmlFor="dateofbirth">Date Of Birth<span style={{color:"red"}}>*</span></label>
                <FormInput
                  id="dateofbirth"
                  type="date"
                  placeholder=""
                  required
                  onChange={e => setDob(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="mobileno">Mobile Number<span style={{color:"red"}}>*</span></label>
                <FormInput
                  id="mobileno"
                  placeholder=""
                  required
                  type="number"
                  onChange={e => setMobile(e.target.value)}
                />
              
              </FormGroup>
              <p style={{color:"red", margin:"5px"}}>{msg}</p>
              
              <FormGroup>
                <label htmlFor="emailId">Email ID<span style={{color:"red"}}>*</span></label>
                <FormInput
                  id="emailId"
                  type="email"
                  placeholder=""
                  required
                  onChange={e => setMail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="appdate">Appointment Date<span style={{color:"red"}}>*</span></label>
                <FormInput
                  id="appdate"
                  type="date"
                  placeholder=""
                  required
                  onChange={e => setAppointment(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="time">Appointment Time<span style={{color:"red"}}>*</span></label>
                <FormInput
                  id="time"
                  type="time"
                  placeholder=""
                  required
                  onChange={e => setTime(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="presc">Prescription(if any)</label>
                <FormInput
                  id="presc"
                  type="file"
                  placeholder=""
                  onChange={e => setPresc(e.target.value)}
                />
              </FormGroup>
              <Container fluid className="main-content-container ">
                <Row>
                  <Col lg="11 " md="12" xs="12">
                    <Card large className="mb-3">
                      <CardBody>
                        <table>
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Test Name</th>
                              <th>Price</th>
                              <th>Checkbox</th>
                            </tr>
                          </thead>
                          <tbody>
                            {testsData.map(test => (
                              <tr key={test.id}>
                                <td>{test.id}</td>
                                <td>{test.title}</td>
                                <td>{test.price}</td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={selectedTests.includes(test.title)}
                                    onChange={e =>
                                      handleCheckboxChange(
                                        test.title,
                                        e.target.checked
                                      )
                                    }
                                  />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
            <center><button type="submit"  style={{backgroundColor:"green",borderRadius:"5px",color:"#FFF", border:"none",padding:"10px",margin:"5px", cursor:"pointer"}}>Submit</button></center>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default AppintmentInput;