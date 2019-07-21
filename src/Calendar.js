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
      month: null,
      day: null,
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
    axios.get(`http://numbersapi.com/${month}/${day}/date`)
      .then(res => this.setState({
        fact: res.data
      }))
  }

  componentDidMount(){
    let {day, month} = this.props;
    axios.get(`http://numbersapi.com/${month}/${day}/date`)
    .then(res => this.setState({
      fact: res.data
    }))
  }

  render() {
    return (
      <div className="Calendar">
        <h1>Get a Fact!</h1>
        <div className="Calendar-page">
          <DateForm month={this.props.month} day={this.props.day} getDate={this.getDate} />
          <p>{this.state.fact}</p>
        </div>
        
      </div>
    )
  }
}

export default Calendar;



