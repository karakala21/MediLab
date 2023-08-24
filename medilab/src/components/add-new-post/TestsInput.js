import React, { useState } from 'react'
import { Card, CardBody, Form } from "shards-react";
import "../add-new-post/TestInput.css"
import { testsData } from '../../data/Tests-list';
import TestsData from '../../views/Admin/services/testsData';
import {useNavigate} from 'react-router-dom'


function TestInput() {
const navigate = useNavigate()
const [title,setTitle]=useState('')
const [des,setDes]=useState('')
const [price,setPrice]= useState()

  const savedata=async()=>{
    const data={
      id:testsData.length+1,
      title:title,
      desc:des,
      price:price
    }
    const tests= await TestsData.addText(data)
    navigate('/ManageTests')
  };

  return(
    <div>
      <Card large className="mb-3">
      <CardBody>
      <Form className="add-new-post">
        <label className='label'>Test Title: </label><input type='text' placeholder='Title' className='Title' id="title" onChange={(e)=>setTitle(e.target.value)}/><br/>
        <label className='label'>Test Description: </label><br/><textarea className='textarea' rows={7} placeholder='Test Description'  onChange={(e)=>setDes(e.target.value)}></textarea><br/>
        <label className='label'>Price: </label><input type='number' placeholder='1500' className='Title' style={{marginLeft:'2%'}} id="price"  onChange={(e)=>setPrice(e.target.value)}/><br/>
        <center><button className='button' onClick={savedata}>save</button></center>
      </Form>
    </CardBody>
    </Card>
    </div>
  )
}


export default TestInput
