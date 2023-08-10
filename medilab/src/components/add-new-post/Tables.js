import React, { useState } from 'react'
import { Card, CardBody } from "shards-react";
import { Container, Row, Col} from "shards-react"
import { testsData } from '../../data/Tests-list';
import Checkbox from './Checkbox';


function ViewTests() {
  const [tests,setTests]=useState(testsData);

  let data=tests.map((test)=>(
    <tr>
        <td>{test.id}</td>
        <td>{test.title}</td>
        <td>{test.price}</td>
        <td><Checkbox/></td>
    </tr>
  ));


  return (
    <div>
    <Container fluid className="main-content-container " >
    <Row>
      {/* Editor */}
      <Col lg="11 " md="12" xs='12'>
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
