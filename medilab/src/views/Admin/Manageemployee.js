import React, { useCallback,useState } from 'react'
import { Card, CardBody } from "shards-react";
import PageTitle from "../../components/common/PageTitle"
import { Container, Row, Col,Button,ButtonGroup } from "shards-react"
import './ManageTests.css'
import { employeeList } from '../../data/Employee-list';
import TestsData  from './services/testsData';


function Manageemployee() {
  const [users,setUsers]=useState(employeeList);

  let data=users.map((user,index)=>(
    <tr key={user.id}>
        <td>{index+1}</td>
        <td>{user.emp_id}</td>
        <td>{user.name}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td><ButtonGroup size="sm">

               <Button outline theme="danger">
                 <span className="text-danger" onClick={()=>Delete(user.id)}>
                   <i className="material-icons">delete_forever</i>
                 </span>{" "}
                 Delete
               </Button>
               <Button outline theme="info">
                 <span className="text-primary">
                   <i className="material-icons">more_vert</i>
                 </span>{" "}
                 Edit
               </Button>
             </ButtonGroup>
        </td>
    </tr>
  ));

  const Delete= useCallback(async(id)=>{
    debugger
    const data= await TestsData.deleteEmpData(id)
      setUsers(data)
  },[users]);

  return (
    <div>
    <Container fluid className="main-content-container " >
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Manage Employee" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12 " md="12">
        <Card large className="mb-3">
            <CardBody>
              <table>
              <tr>
                <th>S.No</th>
                <th>Employee_id</th>
                <th>Employee_name</th>
                <th>Employee_phone</th>
                <th>Employee_email</th>
                <th>Action</th>
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

export default Manageemployee
