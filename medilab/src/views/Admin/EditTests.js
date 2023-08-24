import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { testsData } from '../../data/Tests-list';
import TestsData from './services/testsData';
import {useNavigate} from 'react-router-dom'


const tableStyle = {
  borderCollapse: 'collapse',
  width: '100%',
};

const thStyle = {
  border: '1px solid #ddd',
  backgroundColor: '#4287f5',
  padding: '8px',
  textAlign: 'center',
  width:"30%"
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'center',
  width:"70%"
};

const EditTestDetails = () => {
  const testId = localStorage.getItem('testid');
  var id=Number(testId);
  const testDetails= testsData[id-1];
  const navigate = useNavigate()
  const [title,setTitle]=useState(testDetails.title)
  const [des,setDes]=useState(testDetails.desc)
  const [price,setPrice]= useState(testDetails.price)

  const savedata=async()=>{
    debugger
    const data={
      title:title,
      desc:des,
      price:price
    }
    const tests= await TestsData.edittest(data,testId)
    localStorage.removeItem('testid')
    navigate('/ManageTests')
  };

  if (!testDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='card' style={{marginTop:"20px",marginBottom:"400px",padding:"20px", marginLeft:"20px",marginRight:"20px"}}>
      <Link to={'/ManageTests'} onClick={localStorage.removeItem('testid')}>..back</Link><br/>
      <h3>Test Details</h3>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <th style={thStyle}>Test Name:</th>
            <td style={tdStyle}><input type='text' className='Title' defaultValue={title} onChange={(e)=>setTitle(e.target.value)}/></td>
          </tr>
          <tr>
            <th style={thStyle}>Test Description:</th>
            <td style={tdStyle}><textarea className='textarea' rows={7} defaultValue={des} style={{marginLeft:'-2%',marginTop:'2%'}} onChange={(e)=>setDes(e.target.value)}></textarea></td>
          </tr>
          <tr>
            <th style={thStyle}>Price:</th>
            <td style={tdStyle}><input type='number' className='Title' defaultValue={price}  onChange={(e)=>setPrice(e.target.value)}/></td>
          </tr>
        </tbody>
      </table>
      <center><button className='button' onClick={savedata}>Update</button></center>
    </div>
  );
};

export default EditTestDetails;
