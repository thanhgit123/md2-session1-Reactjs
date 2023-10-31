import React, { Component } from 'react'

export default class Baitap2 extends Component {
  render() {
    let a = 3;
    let b = 4;
    return (
      <>
      <div>Baitap2</div>
      {
        <h3>Tổng của {a} và {b} là {a+b} </h3>
      }
      </>
    )
  }
}
