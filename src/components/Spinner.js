import React, { Component } from 'react'
import loader from "./1475.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div className='spinner'>
        <img src={loader} alt="loading" />
      </div>
    )
  }
}
