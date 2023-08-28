import React, { useState } from 'react'
import { Card, CardBody } from "shards-react";
import PageTitle from "../../components/common/PageTitle"
import { Container, Row, Col } from "shards-react"
import '../Admin/ManageTests.css'
import { testsData } from '../../data/Tests-list';
import Colors from '../../components/components-overview/Colors';
import { useNavigate } from "react-router-dom";


function ViewTests() {
  const navigate = useNavigate();
  const [tests,setTests]=useState(testsData);

  let data=tests.map((test,index)=>(
    <tr>
       <td>{index+1}</td>
       <td>{test.title}</td>
       <td>{test.price}</td>
       <td><a onClick={() => handleLinkClick(index+1)}><center style={{color:'#4ea3fe',cursor:'pointer'}}><i class='material-icons'>visibility</i></center></a></td>
    </tr>
  ));

  const handleLinkClick=(testId)=>{
    debugger
    localStorage.setItem('id',testId)
    navigate("/test/${testId}");
  }

  return (
    <div>
    <Container fluid className="main-content-container " >
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Test Details" className="text-sm-left" />
    </Row>

    <Row>
      <Col lg="12 " md="12" xs='12'>
        <Card large className="mb-3">
            <CardBody>
              <table>
              <tr>
                <th>S.No</th>
                <th>Test</th>
                <th>Price</th>
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

export default ViewTests;
