import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    }
  }

  render() {
    return (
      <input
        value={this.state.value}
        onChange={e => this.setState({ value: e.target.value })}
      />
    
    );
  }
}