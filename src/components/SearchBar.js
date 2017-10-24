import React, { Component } from 'react';

const SearchBar = ({ value, onChange, onKeyPress }) => {
  return (
    <input
      autoFocus
      value={value}
      onChange={e => onChange(e.target.value)}
      onKeyPress={event => onKeyPress(event)}
    />
  );
}

export default SearchBar;