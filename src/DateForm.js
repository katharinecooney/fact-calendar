import React, { Component } from 'react'

class DateForm extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="placeholder"/>
      </form>
    )
  }
}

export default DateForm;