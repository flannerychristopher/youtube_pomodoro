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
      currentTime: null,
      newTime: { hours: 0, minutes: 0, seconds: 0 },
      searchTerm: '',
      videoPlaying: null,
      videos: []
    }
  }

  componentDidMount() {
    setInterval(() => this.countDown(), 1000);
  }

  // TIMER

  countDown() {
    let nextSecond = this.state.currentTime - 1;
    if (nextSecond > -1) {
      this.setState({ currentTime: nextSecond });
    } else {
      this.setState({ videoPlaying: null, videos: [] })
    }
  }

  onTimerControlChange(key, value) { // key is hours/minutes/seconds
    this.setState({ newTime: { ...this.state.newTime, [key]: value } })
  }

  objectToSeconds(obj) { //convert state.newTime obj to seconds for state.currentTime
    return obj['seconds'] + (obj['minutes'] * 60) + (obj['hours'] * 3600);
  }

  // SEARCH

  onSearchChange(searchTerm) {
    this.setState({ searchTerm })
  }

  onKeyPress(event) {
    if (event.key === 'Enter') this.search();
  }

  search() { // search for results, set state, start countdown
    let options = {
      maxResults: 3,
      key: API_KEY,
      topicId: '/m/04rlf',
      type: 'video',
      q: this.state.searchTerm
    }
    YouTube(options, videos => {
      this.setState({
        videos,
        videoPlaying: videos[0],
        currentTime: this.objectToSeconds(this.state.newTime)
      })
    });
  }

  // VIDEO

  onVideoClick(video) {
    this.setState({ videoPlaying: video });
  }

  onVideoEnd() {
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
          currentTime={this.state.currentTime}
          countDown={this.countDown.bind(this)}
        />

        <TimerControl
          newTime={this.state.newTime}
          onChange={this.onTimerControlChange.bind(this)}
        />

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