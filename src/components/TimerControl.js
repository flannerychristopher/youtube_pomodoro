import React, { Component } from 'react';
import TimerControlOption from './TimerControlOption';

const hours = [...Array(25).keys()];
const minutes = [...Array(60).keys()];
const seconds = [...Array(60).keys()];

export default class TimerControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 15,
      seconds: 38
    }
  }

  onChange(key, value) {
    console.log(key, value);
    this.setState({ [key]: value });
  }

  render() {
    return (
      <div className="TimerControl">
        <TimerControlOption
          name='hours'
          values={hours}
          value={this.state.hours}
          onChange={this.onChange.bind(this)}
        />
        <TimerControlOption
          name='minutes'
          values={minutes}
          value={this.state.minutes}
          onChange={this.onChange.bind(this)}
        />
        <TimerControlOption
          name='seconds'
          values={seconds}
          value={this.state.seconds}
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}
