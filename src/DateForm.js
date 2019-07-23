import React, { Component } from 'react';
import './DateForm.css';

class DateForm extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      month: '',
      day: ''
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



        <div className="DateForm-date">
          <div className="DateForm-month">
            <label htmlFor="month">Month</label>
            <input  
              value={this.state.month} 
              onChange={this.handleChange} 
              type="text" 
              name="month"
              id="month"
              placeholder="MM"
            />
          </div>
          <div className="DateForm-day">
            <label htmlFor="day">Day</label>
            <input  
              value={this.state.day} 
              onChange={this.handleChange} 
              type="text" 
              name="day"
              id="day"
              placeholder="DD"
            />
          </div>
          
        </div>
        <button type="submit">Submit</button>
        
         
        
        
        
      </form>
    )
  }
}

export default DateForm;