import React, { useState } from 'react';
import { VideoMetadata } from '../types';
import { Play, Clock, Eye } from 'lucide-react';

interface VideoPreviewProps {
  metadata: VideoMetadata;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ metadata }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-dark-800 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl animate-slide-up">
      <div className="grid md:grid-cols-5 gap-0">
        <div className="md:col-span-2 relative group overflow-hidden bg-black aspect-video md:aspect-auto">
          <img
            src={metadata.thumbnailUrl}
            alt={metadata.title}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } group-hover:scale-110`}
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
             <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="fill-white text-white ml-1" size={20} />
             </div>
          </div>
        </div>
        
        <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
           <div className="flex items-center gap-2 mb-3">
             <span className="bg-brand-600/10 text-brand-500 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
               YouTube
             </span>
             <span className="text-gray-500 text-xs flex items-center gap-1">
               <Clock size={12} /> {metadata.duration}
             </span>
             <span className="text-gray-500 text-xs flex items-center gap-1">
               <Eye size={12} /> {metadata.views}
             </span>
           </div>
           
           <h2 className="text-2xl font-bold text-white mb-2 leading-tight line-clamp-2">
             {metadata.title}
           </h2>
           
           <p className="text-gray-400 font-medium mb-6">
             {metadata.author}
           </p>
           
           <div className="w-full h-px bg-gray-800 mb-6"></div>
           
           <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase font-semibold">품질 분석</span>
                <span className="text-green-400 text-sm font-medium">최대 1080p 가능</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase font-semibold">오디오</span>
                <span className="text-blue-400 text-sm font-medium">Stereo HQ</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;