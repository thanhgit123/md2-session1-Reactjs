import React, { Component } from 'react'
import B6part1 from './B6part1'
import B6part2 from './B6part2'
import B6part3 from './B6part3'
import B6part4 from './B6part4'
import B6part5 from './B6part5'

import "./Baitap6.css"

export default class Baitap6 extends Component {
  render() {
    return (
      <>
        <B6part1></B6part1>
          {/* Header  */}
  
  {/* End header area */}
  {/* End site branding area */}
        <B6part2></B6part2>
  {/* End mainmenu area */}
        <B6part3></B6part3>
  {/* List product */}
        <B6part4></B6part4>
  {/* Footer area */}
        <B6part5></B6part5>
      </>
    )
  }
}



