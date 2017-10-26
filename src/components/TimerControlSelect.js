import React from 'react';

const TimerControlSelect = ({ name, value, values, onChange }) => {

  const valueList = values.map((value, i) => {
    return (
      <option key={i} value={value}>{value} {name}</option>
    );
  });

  return (
    <div>
      <select
        value={value}
        onChange={e => onChange(name, parseInt(e.target.value))}
      >
        {valueList}
      </select>
    </div>
  );
}

export default TimerControlSelect;