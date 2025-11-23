import React, { useState } from 'react';
import { DownloadOption, FormatType, Quality } from '../types';
import { Download, Check, FileVideo, Music, Loader2 } from 'lucide-react';
import { simulateDownload } from '../services/youtubeService';

interface DownloadCardProps {
  onDownloadStart: () => void;
  onDownloadComplete: () => void;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ onDownloadStart, onDownloadComplete }) => {
  const [selectedFormat, setSelectedFormat] = useState<FormatType>(FormatType.VIDEO);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const options: DownloadOption[] = [
    { type: FormatType.VIDEO, quality: Quality.HIGH, size: '45.2 MB', extension: 'mp4' },
    { type: FormatType.VIDEO, quality: Quality.MEDIUM, size: '28.1 MB', extension: 'mp4' },
    { type: FormatType.AUDIO, quality: Quality.AUDIO_HQ, size: '5.4 MB', extension: 'mp3' },
    { type: FormatType.AUDIO, quality: Quality.AUDIO_MQ, size: '3.2 MB', extension: 'mp3' },
  ];

  const filteredOptions = options.filter(opt => opt.type === selectedFormat);

  const handleDownload = async (option: DownloadOption) => {
    const id = `${option.type}-${option.quality}`;
    setDownloadingId(id);
    onDownloadStart();
    
    // Simulate progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 10;
      });
    }, 200);

    try {
      await simulateDownload(`video.${option.extension}`);
      clearInterval(interval);
      setProgress(100);
      
      // Simulate browser download trigger
      setTimeout(() => {
        setDownloadingId(null);
        setProgress(0);
        onDownloadComplete();
        alert(`다운로드가 완료되었습니다: video.${option.extension}`);
      }, 500);
      
    } catch (e) {
      console.error(e);
      setDownloadingId(null);
    }
  };

  return (
    <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
      <div className="bg-dark-800 border border-gray-800 rounded-3xl p-6 shadow-xl">
        {/* Tabs */}
        <div className="flex p-1 bg-gray-900/50 rounded-xl mb-6 w-full md:w-fit mx-auto md:mx-0">
          <button
            onClick={() => setSelectedFormat(FormatType.VIDEO)}
            className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedFormat === FormatType.VIDEO
                ? 'bg-brand-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <FileVideo size={16} />
            비디오 (MP4)
          </button>
          <button
            onClick={() => setSelectedFormat(FormatType.AUDIO)}
            className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedFormat === FormatType.AUDIO
                ? 'bg-purple-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Music size={16} />
            오디오 (MP3)
          </button>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredOptions.map((option) => {
            const isDownloading = downloadingId === `${option.type}-${option.quality}`;
            
            return (
              <div
                key={`${option.type}-${option.quality}`}
                className="flex items-center justify-between p-4 rounded-xl border border-gray-700 bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    option.type === FormatType.VIDEO ? 'bg-brand-900/30 text-brand-500' : 'bg-purple-900/30 text-purple-500'
                  }`}>
                    {option.type === FormatType.VIDEO ? <FileVideo size={20} /> : <Music size={20} />}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{option.quality}</div>
                    <div className="text-xs text-gray-500 uppercase">{option.extension} • {option.size}</div>
                  </div>
                </div>

                <button
                  onClick={() => handleDownload(option)}
                  disabled={downloadingId !== null}
                  className={`
                    relative overflow-hidden px-4 py-2 rounded-lg font-medium text-sm transition-all
                    ${isDownloading 
                      ? 'bg-gray-700 text-gray-300 w-32' 
                      : 'bg-white text-black hover:bg-gray-200 w-24'}
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                >
                  {isDownloading ? (
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xs">{Math.round(progress)}%</span>
                      <Loader2 size={14} className="animate-spin" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-1">
                      <span>받기</span>
                      <Download size={14} />
                    </div>
                  )}
                  
                  {/* Progress Bar Background */}
                  {isDownloading && (
                    <div 
                      className="absolute left-0 bottom-0 h-1 bg-brand-500 transition-all duration-200"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;