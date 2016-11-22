import React, { Component } from 'react';
import Style from '../style/style.scss';

export default class GridClock extends Component {

  constructor(){
    super();

    this.state = {
      hours: '',
      minutes: '',
      day: '',
      date: '',
      month: ''
    };

  }

  // set the time
  setTime(){
    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    let currentdate = new Date();
    let hours = currentdate.getHours();
    let minutes = currentdate.getMinutes();

    let day = days[currentdate.getDay()];
    let date = currentdate.getDate();
    let month = currentdate.getMonth();

    // format time to add leading 0.
    minutes = minutes + "";
    if( minutes.length == 1 ){ minutes = "0" + minutes; }
    date = date + '';
    if( date.length == 1){ date = '0' + date; }
    month = month + '';
    if( month.length == 1){ month = '0' + month; }

    this.setState({
       hours: hours,
       minutes: minutes,
       day: day,
       date: date,
       month: month
     });
  }

  // On component pre load fetch the current time
  componentWillMount(){
    this.setTime();
  }

  // On component loaded start an internal timer to fire every second.
  componentDidMount(){
     window.setInterval(function () {
      this.setTime();
    }.bind(this), 1000);
  }

  // Create the UI for the component.
  render(){
      return(
        <div className='grid-clock'>
          <span>{this.state.hours}:{this.state.minutes} {this.state.day} {this.state.date}/{this.state.month}</span>
        </div>
      );
  }

}
