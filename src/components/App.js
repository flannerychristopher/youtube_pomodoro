import React, { Component } from 'react';
import YouTube from 'youtube-search-api-with-axios';

import API_KEY from './API_KEY';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
      videos: []
    }
  }

  onSearchChange(searchTerm) {
    this.setState({ searchTerm })
  }

  search() {
    let options = {
      maxResults: 30,
      key: API_KEY,
      q: this.state.searchTerm
    }
    YouTube(options, videos => {
      this.setState({ videos })
    });
  }

  onKeyPress(event) {
    if (event.key === 'Enter') this.search();
  }

  render() {
    return (
      <div>
        <SearchBar
          value={this.state.searchTerm}
          onChange={this.onSearchChange.bind(this)}
          onKeyPress={this.onKeyPress.bind(this)}
        />
        <button onClick={e => this.search()}>search</button>

        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}