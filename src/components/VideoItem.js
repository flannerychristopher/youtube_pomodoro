import React from 'react';
import '../style/App.css';

const VideoItem = ({ video, onClick }) => {
  return (
    <div className="VideoItem" onClick={e => onClick(video)}>
      <img src={video.snippet.thumbnails.default.url} />
      <div className="VideoInfo">
        <span className="VideoTitle">{video.snippet.title}</span>
        <span>{video.snippet.channelTitle}</span>
        <span>{video.snippet.description}</span>
      </div>
    </div>
  );
}

export default VideoItem;