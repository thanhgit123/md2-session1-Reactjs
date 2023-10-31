import React, { Component } from 'react'

export default class Baitap1 extends Component {
  render() {
    const listLanguage = ["HTML","Javascrip","Python","C#"];
    return (
        <>
         <h1>Danh Sách Khóa Học</h1>
        {
            listLanguage.map((item,index)=>(
                <li key={index}>{item}</li> 
            ))
        }
        </>
    )
  }
}
