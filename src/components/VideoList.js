import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onClick }) => {
  if (!videos) {
    return <div></div>;
  }

  const videoItems = videos.map(video => {
    return (
      <VideoItem
        video={video}
        key={video.id.videoId}
        onClick={onClick}
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