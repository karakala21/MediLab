import React, { useState } from 'react';
import { Card, CardBody } from "shards-react";
import PageTitle from '../../../components/common/PageTitle';
import { Container, Row, Col } from "shards-react";
import TestsData from './testsData';
import { appData } from '../../../components/add-new-post/AppointmentData';

function StatusAction() {
  const [appData1, setAppData1] = useState(TestsData.getAppData().map(appointment => ({
    ...appointment,
    status: "pending",
  })));

  const handleApproval = (appointmentId, newStatus) => {
    debugger
    const updatedAppData = appData1.map((appointment) =>
      appointment.id === appointmentId
        ? { ...appointment, status: newStatus }
        : appointment
    );
    setAppData1(updatedAppData);
  };

  let data = appData1.map((data,i) => (
    <tr key={data.id}>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.gender}</td>
      <td>{data.dob}</td>
      <td>{data.mobile}</td>
      <td>{data.mail}</td>
      <td>{data.appointment}</td>
      <td>{data.time}</td>
      <td>{data.selectTest}</td>
      <td style={{ color: "blue" }}>{data.status}</td>
      <td>
        {data.status === "pending" && (
          <div style={{display:"flex",alignItems:"center"}}>
            <button style={{backgroundColor:"green",borderRadius:"5px",color:"#FFF", border:"none",padding:"6px",margin:"5px", cursor:"pointer"}} onClick={() => handleApproval(data.id, "approved")}>Approve</button>
            <button style={{backgroundColor:"red", borderRadius:"5px",color:"#FFF", border:"none",padding:"6px", cursor:"pointer"}} onClick={() => handleApproval(data.id, "rejected")}>Reject</button>
          </div>
        )}
      </td>
    </tr>
  ));
  
  return (
    <div>
      <Container fluid className="main-content-container">
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Appointment data" className="text-sm-left" />
        </Row>
        <Row>
          <Col lg="12 " md="12" xs='12'>
            <Card large className="mb-3">
              <CardBody>
                <table>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>DateOfBirth</th>
                      <th>Mobile</th>
                      <th>Mail</th>
                      <th>Appointment Date</th>
                      <th>Appointment Time</th>
                      <th>Selected Tests</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>{data}</tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default StatusAction;
