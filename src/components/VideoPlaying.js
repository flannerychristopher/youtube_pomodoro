import React from 'react';
import '../style/App.css';

const VideoPlaying = ({ video }) => {
  if (!video) {
    return <div></div>;
  }
  const url = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
  return (
    <div className="VideoPlaying">
      <div>
      <iframe src={url}></iframe>
      </div>
      <div>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoPlaying;