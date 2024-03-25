import React from 'react';
import Image from 'next/image';

// 修改组件，接收videoUrl, title, description作为props
const VideoCard = ({ imageUrl,pageUrl, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <a href={pageUrl} target="_blank" rel="noopener noreferrer">
        <div className="w-full">
          <img src={imageUrl} alt="Image description" className="object-cover" style={{ width: '600px', height: '400px' }}/>
        </div>
      </a>
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

{/* <Image src={videoUrl} width={100} height={80}/> */ }