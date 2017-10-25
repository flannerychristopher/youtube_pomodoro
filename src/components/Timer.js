import React from 'react';

const secondsToArray = input => { // input in total seconds, return array
  let hours = ('0' + Math.floor(input / 3600)).substr(-2);
  let minutes = ('0' + Math.floor((input % 3600) / 60)).substr(-2);
  let seconds = ('0' + Math.ceil((input % 60) % 60)).substr(-2);
  return [hours, minutes, seconds];
}

const Timer = ({ currentTime }) => {
  let displayTime = secondsToArray(currentTime);
  return (
    <div className="Timer">
      {displayTime[0]}:{displayTime[1]}:{displayTime[2]}
    </div>
  );
}

export default Timer;