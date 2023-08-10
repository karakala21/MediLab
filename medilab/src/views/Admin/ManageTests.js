import React, { useCallback, useEffect, useState } from 'react'
import { Card, CardBody } from "shards-react";
import PageTitle from "../../components/common/PageTitle"
import { Container, Row, Col,Button,ButtonGroup } from "shards-react"
import './ManageTests.css'
import { testsData } from '../../data/Tests-list';
import TestsData  from './services/testsData';



function ManageTests() {
  //debugger


const testsData =  TestsData.getTestsData()
const [tests,setTests]= useState(testsData)

  let data=tests.map((test,index)=>(
    <tr key={test.id}>
        <td>{index+1}</td>
        <td>{test.title}</td>
        <td>{test.desc}</td>
        <td>{test.price}</td>
        <td><ButtonGroup size="sm">

               <Button outline pill theme="danger" onClick={()=>onDelete(test.id)} active=''>
                 <span className="text-danger" >
                   <i className="material-icons">delete_forever</i>
                 </span>{" "}
                 Delete
               </Button>
               <Button outline pill theme="info">
                 <span className="text-primary">
                   <i className="material-icons">more_vert</i>
                 </span>{" "}
                 Edit
               </Button>
             </ButtonGroup>
        </td>
    </tr>
  ));

  const onDelete= useCallback(async(id)=>{
    debugger
    const data= await TestsData.deleteTestData(id)
      setTests(data)
    // setTests((current)=>{
    //   return current.filter(tests=>tests.id!==id)
    // }
    // )
  },[tests]);


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
                <th>Description</th>
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

export default ManageTests;
