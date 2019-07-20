import React, { Component } from 'react'

class DateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      month: 1,
      day: 1
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  } 

  handleSubmit(event){
    event.preventDefault();
    let {month, day} = this.state;
    this.props.getDate(month, day);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input  
          value={this.state.day} 
          onChange={this.handleChange} 
          type="text" 
          name="day"
        />
        <input  
          value={this.state.month} 
          onChange={this.handleChange} 
          type="text" 
          name="month"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default DateForm;