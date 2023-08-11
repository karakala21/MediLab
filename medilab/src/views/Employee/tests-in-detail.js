import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { testsData } from '../../data/Tests-list';


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

const TestDetails = () => {
  const testId = localStorage.getItem('id');
  const testDetails= testsData[testId];

  if (!testDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='card' style={{marginTop:"20px",marginBottom:"400px",padding:"20px", marginLeft:"20px",marginRight:"20px"}}>
      <Link to={'/viewTests'} onClick={localStorage.removeItem('id')}>..back</Link><br/>  
      <h3>Test Details</h3>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <th style={thStyle}>Test Name:</th>
            <td style={tdStyle}>{testDetails.title}</td>
          </tr>
          <tr>
            <th style={thStyle}>Test Description:</th>
            <td style={tdStyle}>{testDetails.desc}</td>
          </tr>
          <tr>
            <th style={thStyle}>Price:</th>
            <td style={tdStyle}>{testDetails.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TestDetails;
