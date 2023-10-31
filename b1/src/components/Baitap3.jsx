import React, { Component } from 'react'

export default class Baitap3 extends Component {
   
  render() {
    const today = new Date();
    return (
        <>
      <div>Baitap3</div>
      <h1>Xin chào các bạn!</h1>
      {
        <p>Bây giờ là :{today.toLocaleTimeString()}</p>     
      }     
     </>
   
    )
  }
}
