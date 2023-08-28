import React, { Component } from 'react'
import { testsData } from '../../../data/Tests-list'
import { employeeList } from '../../../data/Employee-list'
import { appData } from '../../../components/add-new-post/AppointmentData'
import { passupdate } from '../../../components/add-new-post/PassUpdate'


let data= testsData
let data1=employeeList
let data2=appData
let data3=passupdate

export class TestsData extends Component {

  static getTestsData(){
    return data
  }
  static getAppData(){
    return data2
  }

  static getEmpData(){
    return data1
  }
  static getpassData(){
    return data3
  }

static async addText(testdata){
  data.push(testdata)
  return data
}

static async addemp(empdata){
  data1.push(empdata)
  return data1
}

static async addData(formData){
data2.push(formData)
    return data2
}



static async addPass(confirm){
  data3.push(confirm)
      return data3
  }
static async editemp(empdata,empId){

  const newState = data1.map(obj => {
    if (obj.id === empId) {
      return {...obj,
        name:empdata.name,
        phone:empdata.phone,
        email:empdata.email,
        password:empdata.pass
      };
    }

    return obj;
  });

  return newState

}

static async edittest(testdata,testId){

  const newState = data.map(obj => {
    if (obj.id === testId) {
      return {...obj,
        title:testdata.title,
        desc:testdata.desc,
        price:testdata.price
      };
    }

    return obj;
  });

  return newState

}


static async deleteTestData(id){
debugger
  for(let i=0; i<data.length;i++){
    if(data[i].id==id){
      data.splice(i,1)
    }
}
return data
}

static async deleteEmpData(id){
  debugger
    for(let i=0; i<data1.length;i++){
      if(data1[i].id==id){
        data1.splice(i,1)
      }
  }
  return data1
  }


  static async editEmpData(id, updatedEmployeeData) {
    const employeeIndex = data1.findIndex(employee => employee.id === id);
    if (employeeIndex !== -1) {
      data1[employeeIndex] = { ...data1[employeeIndex], ...updatedEmployeeData };
    }
    return data1;
  }


  static async editTestData(id, updatedTestData) {
    const testIndex = testsData.findIndex(test => test.id === id);
    if (testIndex !== -1) {
      testsData[testIndex] = { ...testsData[testIndex], ...updatedTestData };
    }
    return testsData;
  }


}



export default TestsData
