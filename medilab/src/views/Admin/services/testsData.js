import React, { Component } from 'react'
import { testsData } from '../../../data/Tests-list'

let data= testsData

export class TestsData extends Component {

  static   getTestsData(){
    return data
  }

static async addText(testdata){
  //debugger
data.push(testdata)
return data
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
}

export default TestsData
