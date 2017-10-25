import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onClick }) => {

  const videoItems = videos.map(video => {
    return (
      <VideoItem
        onClick={onClick}
        key={video.id.videoId}
        video={video}
      />
    );
  });

  return (
    <div className="VideoList">
      {videoItems}
    </div>
  );
}

export default VideoList;