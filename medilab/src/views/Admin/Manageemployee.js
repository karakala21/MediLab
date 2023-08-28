import React, { useCallback,useState } from 'react'
import { Card, CardBody } from "shards-react";
import PageTitle from "../../components/common/PageTitle"
import { Container, Row, Col,Button,ButtonGroup } from "shards-react"
import './ManageTests.css'
import TestsData  from './services/testsData';
import EditEmployeeForm from './services/EditEmployeeForm';

function Manageemployee() {

  const empData =  TestsData.getEmpData()

  const [users,setUsers]=useState(empData);
  const [editingEmployeeId, setEditingEmployeeId] = useState(null);

  const handleEditClick = (id) => {
    setEditingEmployeeId(id);
  };

  const handleEditSubmit = async (id, updatedEmployeeData) => {
    const updatedUsers = await TestsData.editEmpData(id, updatedEmployeeData);
    setUsers(updatedUsers);
    setEditingEmployeeId(null);
  };

  let data=users.map((user,index)=>(
    <tr key={user.id}>
        <td>{index+1}</td>
        <td>{user.emp_id}</td>
        <td>{user.name}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td><ButtonGroup size="sm">

          
               <Button outline theme="danger" onClick={()=>Delete(user.id)} active=''>
                 <span className="text-danger">
                   <i className="material-icons">delete_forever</i>
                 </span>{" "}
                 Delete
               </Button>
   

               <Button outline theme="info" onClick={() => handleEditClick(user.id)}>
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
    const Empdata= await TestsData.deleteEmpData(id)
    const data= [...users]
    for(let i=0; i<data.length;i++){
      if(data[i].id==id){
        data.splice(i,1)
      }
    }
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
                <th>Id</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Mail</th>
                <th>Action</th>
              </tr>
                {data}
              </table>
          </CardBody>
          </Card>
          {editingEmployeeId && (
                  <EditEmployeeForm
                    employee={users.find(user => user.id === editingEmployeeId)}
                    onSubmit={handleEditSubmit}
                  />
                )}
      </Col>
    </Row>
    </Container>
    </div>
  )
}

export default Manageemployee
