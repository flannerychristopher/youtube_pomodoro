import React from 'react';
import Player from 'react-youtube';
import '../style/App.css';

const VideoPlaying = ({ video, onVideoEnd }) => {
  if (!video) {
    return <div></div>;
  }
  const url = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
  return (
    <div className="VideoPlaying">
      <Player
        className="Player"
        videoId={video.id.videoId} 
        opts={{playerVars: {autoplay: 1} }}
        onEnd={onVideoEnd}
      />
      <div>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoPlaying;