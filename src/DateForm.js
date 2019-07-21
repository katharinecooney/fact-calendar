import React, { Component } from 'react';
import './DateForm.css';

class DateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      month: null,
      day: null
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
      <form className="DateForm" onSubmit={this.handleSubmit}>
        <label htmlFor="month">Month</label>
      <input  
          value={this.state.month} 
          onChange={this.handleChange} 
          type="text" 
          name="month"
          id="month"
        />
        <label htmlFor="day">Day</label>
        <input  
          value={this.state.day} 
          onChange={this.handleChange} 
          type="text" 
          name="day"
          id="day"
        />
        
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default DateForm;