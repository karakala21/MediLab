import React, { useState } from 'react'
import { Card, CardBody } from "shards-react";
import PageTitle from "../../components/common/PageTitle"
import { Container, Row, Col } from "shards-react"
import '../Admin/ManageTests.css'
import { testsData } from '../../data/Tests-list';


function ViewTests() {
  const [tests,setTests]=useState(testsData);

  let data=tests.map((test)=>(
    <tr>
       <td>{test.id}</td>
       <td>{test.title}</td>
       <td>{test.price}</td>
       <td><a onClick={() => handleLinkClick(test.id)}><center style={{color:'#4ea3fe',cursor:'pointer'}}><i class='material-icons'>visibility</i></center></a></td>
    </tr>
  ));

  const handleLinkClick=(testId)=>{
    localStorage.setItem('id',testId)
    window.location.href = `/test/${testId}`;
  }

  return (
    <div>
    <Container fluid className="main-content-container " >
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Manage Tests" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12 " md="12" xs='12'>
        <Card large className="mb-3">
            <CardBody>
              <table>
              <tr>
                <th>S.No</th>
                <th>Test</th>
                <th>price</th>
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
