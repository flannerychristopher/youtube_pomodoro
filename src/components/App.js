import React, { Component } from 'react';
import YouTube from 'youtube-search-api-with-axios';

import '../style/App.css';
import API_KEY from './API_KEY';

import SearchBar from './SearchBar';
import Timer from './Timer';
import TimerControl from './TimerControl';
import VideoList from './VideoList';
import VideoPlaying from './VideoPlaying';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPlaying: null,
      searchTerm: 'rancid',
      videos: [],
      time: 900,
      timerControl: null
    }
  }

  countDown() {
    let new_time = this.state.time - 1;
    if (new_time > -1) {
      this.setState({ time: new_time });
    } else {
      // do stuff to end timer
    }
  }

  onTimerControlChange(input) { // input as seconds
    this.setState({ time: input });
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
    if (nextVideoIndex > this.state.videos.length - 1) {
      this.setState({ videoPlaying: this.state.videos[0] })
    } else {
      this.setState({ videoPlaying: this.state.videos[nextVideoIndex] });
    }
  }

  render() {
    return (
      <div className="App">
        <Timer
          time={this.state.time}
          countDown={this.countDown.bind(this)}
        />
        <TimerControl onChange={this.onTimerControlChange.bind(this)} />

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