import React from 'react';
import TimerControlSelect from './TimerControlSelect';

import '../style/App.css';

const hours = [...Array(25).keys()];
const minutes = [...Array(60).keys()];
const seconds = [...Array(60).keys()];

const TimerControl = ({ newTime, onChange }) => {
  return (
    <div className="TimerControl">
      <TimerControlSelect
        name='hours'
        value={newTime['hours']}
        values={hours}
        onChange={onChange}
      />
      <TimerControlSelect
        name='minutes'
        value={newTime['minutes']}
        values={minutes}
        onChange={onChange}
      />
      <TimerControlSelect
        name='seconds'
        value={newTime['seconds']}
        values={seconds}
        onChange={onChange}
      />
    </div>
  );
}

export default TimerControl;