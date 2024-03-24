import React from 'react';

  
// 修改组件，接收videoUrl, title, description作为props
const VideoCard= ({ videoUrl, title, description }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="w-full aspect-video">
          <video controls className="w-full h-full object-cover">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
      </div>
    );
  };
export default VideoCard;