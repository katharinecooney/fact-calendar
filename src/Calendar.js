import React, { Component } from 'react';
import axios from 'axios';
import DateForm from './DateForm';
import './Calendar.css';

class Calendar extends Component {
  static defaultProps = {
    month: 1,
    day: 1
  }
  constructor(props){
    super(props);
    this.state = {
      month: '',
      day: '',
      fact: ''
    }
    this.getDate = this.getDate.bind(this);
    this.getFact = this.getFact.bind(this);
  }

  getDate(newMonth, newDay){
    this.setState({
      month: newMonth,
      day: newDay
    }, () => this.getFact())
  }

  getFact(){
    let {day, month} = this.state;
    axios.get(`https://numbersapi.com/${month}/${day}/date`)
      .then(res => this.setState({
        fact: res.data
      }))
  }

  

  componentDidMount(){
    let {day, month} = this.props;
    axios.get(`https://numbersapi.com/${month}/${day}/date`)
    .then(res => this.setState({
      fact: res.data
    }))
  }

  render() {
    return (
      <div className="Calendar">
        <h1>Pick a date, any date...</h1>
        <span>(and learn a new fun fact!)</span>
        <div className="Calendar-spiral">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        <div className="Calendar-page">
          <DateForm getDate={this.getDate} />
          <div className="Calendar-factContainer">
            <p className="Calendar-fact">{this.state.fact}</p>
          </div>
          
        </div>
        
      </div>
    )
  }
}

export default Calendar;



