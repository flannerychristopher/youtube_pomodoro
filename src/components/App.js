import React, { Component } from 'react';
import YouTube from 'youtube-search-api-with-axios';

import '../style/App.css';
// import API_KEY from './API_KEY';
const API_KEY = process.env.API_KEY;

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlaying from './VideoPlaying';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPlaying: null,
      searchTerm: 'rancid',
      videos: []
    }
  }

  onSearchChange(searchTerm) {
    this.setState({ searchTerm })
  }

  search() {
    let options = {
      maxResults: 3,
      key: API_KEY,
      topicId: '/m/04rlf',
      type: 'video',
      q: this.state.searchTerm
    }
    YouTube(options, videos => {
      this.setState({ videos, videoPlaying: videos[0] })
    });
  }

  onKeyPress(event) {
    if (event.key === 'Enter') this.search();
  }

  onVideoClick(video) {
    this.setState({ videoPlaying: video });
  }

  onVideoEnd() {
    console.log('video over');
    let nextVideoIndex = this.state.videos.indexOf(this.state.videoPlaying) + 1;
    if (nextVideoIndex) {
      this.setState({ videoPlaying: this.state.videos[nextVideoIndex] });
    } else {
      this.setState({ videoPlaying: this.state.video[0] })
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          value={this.state.searchTerm}
          onChange={this.onSearchChange.bind(this)}
          onKeyPress={this.onKeyPress.bind(this)}
        />
        <button onClick={e => this.search()}>search</button>

        <VideoPlaying
          video={this.state.videoPlaying}
          onVideoEnd={this.onVideoEnd.bind(this)}
        />

        <VideoList
          onClick={this.onVideoClick.bind(this)}
          videos={this.state.videos}
        />
      </div>
    );
  }
}