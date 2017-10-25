import React from 'react';

const TimerControlOption = ({ name, value, values, onChange }) => {

  const valueList = values.map((value, i) => {
    return (
      <option key={i} value={value}>{value} {name}</option>
    );
  });

  return (
    <select value={value} onChange={e => onChange(name, parseInt(e.target.value))}>
      {valueList}
    </select>
  );
}

export default TimerControlOption;