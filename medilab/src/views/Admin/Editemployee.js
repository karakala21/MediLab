import React,{useState} from 'react'
import { Link} from 'react-router-dom';
import { employeeList } from '../../data/Employee-list';
import TestsData from '../../views/Admin/services/testsData';
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

function Editemployee() {
    const empId = localStorage.getItem('empid');
    var id=Number(empId);
    const empDetails= employeeList[id-1];
    const navigate = useNavigate()
    const [name,setName]=useState('')
    const [phone,setPhone]= useState()
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const [add,setAdd]=useState('')

    const savedata=async()=>{
      const data={
        name:name,
        phone:phone,
        email:email,
        add:add,
        password:pass
      }
      const tests= await TestsData.editemp(data,empId)
      localStorage.removeItem('empid')
      navigate('/manage-employee')
    };

    if (!empDetails) {
      return <div>Loading...</div>;
    }

    return (
      <div className='card' style={{marginTop:"20px",marginBottom:"400px",padding:"20px", marginLeft:"20px",marginRight:"20px"}}>
        <Link to={'/manage-employee'} onClick={localStorage.removeItem('empid')}>..back</Link><br/>
        <h3>Test Details</h3>
        <table style={tableStyle}>
          <tbody>
            <tr>
              <th style={thStyle}>Employee_id :</th>
              <td style={tdStyle}>{empDetails.emp_id}<br/></td>
            </tr>
            <tr>
              <th style={thStyle}>Employee_name:</th>
              <td style={tdStyle}><input type='text' placeholder='id' className='Title' defaultValue={empDetails.name||''} onChange={(e)=>setName(e.target.value)}/><br/></td>
            </tr>
            <tr>
              <th style={thStyle}>Employee_Phone_no:</th>
              <td style={tdStyle}><input type='text' placeholder='id' className='Title' defaultValue={empDetails.phone||''} onChange={(e)=>setPhone(e.target.value)}/><br/></td>
            </tr>
            <tr>
              <th style={thStyle}>Employee_email:</th>
              <td style={tdStyle}><input type='text' placeholder='id' className='Title' defaultValue={empDetails.email||''} onChange={(e)=>setEmail(e.target.value)}/><br/></td>
            </tr>
            <tr>
              <th style={thStyle}>Employee_address:</th>
              <td style={tdStyle}><textarea className='textarea' rows={7} placeholder='address' defaultValue={empDetails.add||''} style={{marginLeft:'-2%',marginTop:'2%'}} onChange={(e)=>setAdd(e.target.value)}></textarea><br/></td>
            </tr>
            <tr>
              <th style={thStyle}>Employee_password:</th>
              <td style={tdStyle}><input type='password' placeholder='id' className='Title' defaultValue={empDetails.password||''} onChange={(e)=>setPass(e.target.value)}/><br/></td>
            </tr>
          </tbody>
        </table>
        <center><button className='button' onClick={savedata}>Update</button></center>
      </div>
    );
}

export default Editemployee
