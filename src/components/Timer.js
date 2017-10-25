import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    console.log('timer mounted');
    setInterval(() => this.formatTime(this.props.time), 1000);
  }

  componentDidMount() {
    setInterval(() => this.props.countDown(), 1000);
  }

  padZero(number) {
    return ('0' + number).substr(-2);
    // return (`0${number}`).substr(-2);
  }

  formatTime(input) { // input in total seconds
    var hours = this.padZero(Math.floor(input / 3600));
    var minutes = this.padZero(Math.floor((input % 3600) / 60));
    let seconds = this.padZero(Math.ceil((input % 60) % 60));
    this.setState({ hours, minutes, seconds });
  }

  render() {
    return (
      <div className="Timer">
        {this.state.hours}:{this.state.minutes}:{this.state.seconds}
      </div>
    );
  }
}

export default Timer;