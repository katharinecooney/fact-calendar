import React, { Component } from 'react';
import axios from 'axios';
import DateForm from './DateForm';

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      month: 3,
      day: 16
    }
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
        <DateForm />
      </div>
    )
  }
}

export default Calendar;



