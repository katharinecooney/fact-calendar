import React, { Component } from 'react';
import axios from 'axios';
import DateForm from './DateForm';

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      month: 1,
      day: 1
    }
    this.getDate = this.getDate.bind(this);
  }

  getDate(newMonth, newDay){
    this.setState({
      month: newMonth,
      day: newDay
    })
  }

  componentDidMount(){
    let {day, month} = this.state;
    axios.get(`http://numbersapi.com/${month}/${day}/date`)
    .then(res => console.log(res.data))

  }

  render() {
    return (
      <div>
        <h1>hi! i love you!</h1>
        <DateForm getDate={this.getDate} />
      </div>
    )
  }
}

export default Calendar;



