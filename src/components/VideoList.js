import React from 'react';

const VideoList = ({ videos }) => {
  return (
    <div>
      {
        videos.map(video => {
          return <li key={video.id.videoId}>{video.snippet.title}</li>
        })
      }
    </div>
  );
}

export default VideoList;