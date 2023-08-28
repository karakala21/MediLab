import React,{useState} from 'react'
import { Card, CardBody } from "shards-react";
import PageTitle from "../../components/common/PageTitle"
import { Container, Row, Col,Button,ButtonGroup } from "shards-react"
import { appData } from '../../components/add-new-post/AppointmentData';

//import './ManageTests.css'
import TestsData from '../Admin/services/testsData';



function AppointmentHistory() {


const app1Data =  TestsData.getAppData()
const [appData1,setappData1]= useState(app1Data)

  let data=appData1.map((i,index)=>(
    <tr key={i.id}>
        <td>{index+1}</td>
        <td>{i.name}</td>
        <td>{i.gender}</td>
        <td>{i.dob}</td>
        <td>{i.mobile}</td>
        <td>{i.mail}</td>
        <td>{i.appointment}</td>
        <td>{i.time}</td>
        <td>{i.selectTest}</td>
        
    </tr>
  ));

  return (
    <div>
    <Container fluid className="main-content-container " >
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Appointment data" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12 " md="12" xs='12'>
        <Card large className="mb-3">
            <CardBody>
              <table>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Dob</th>
                <th>Mobile</th>
                <th>Mail</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Selected Tests</th>
                
              </tr>
                {data}
              </table>
          </CardBody>
          </Card>
      </Col>
    </Row>
    </Container>
    </div>
  )
}

export default AppointmentHistory ;
