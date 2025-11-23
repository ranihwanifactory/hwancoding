import React, { useState } from 'react';
import { VideoMetadata } from './types';
import { fetchVideoMetadata, extractVideoId } from './services/youtubeService';
import InputSection from './components/InputSection';
import VideoPreview from './components/VideoPreview';
import DownloadCard from './components/DownloadCard';
import { Youtube, Zap, Shield, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [metadata, setMetadata] = useState<VideoMetadata | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (url: string) => {
    const videoId = extractVideoId(url);
    if (!videoId) {
      setError('유효하지 않은 YouTube URL입니다.');
      setMetadata(null);
      return;
    }

    setIsLoading(true);
    setError(null);
    setMetadata(null);

    try {
      const data = await fetchVideoMetadata(videoId);
      setMetadata(data);
    } catch (err) {
      setError('비디오 정보를 가져오는데 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f12] text-white selection:bg-brand-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-900/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center">
        
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">v2.0 업데이트</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Stream<span className="text-brand-500">Flow</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            가장 빠르고 우아한 YouTube 변환기. <br className="hidden md:block"/>
            URL만 입력하면 고품질 비디오와 오디오로 즉시 변환됩니다.
          </p>
        </header>

        {/* Main Input */}
        <InputSection onSearch={handleSearch} isLoading={isLoading} />

        {/* Error Message */}
        {error && (
          <div className="w-full max-w-md bg-red-500/10 border border-red-500/20 text-red-200 px-6 py-4 rounded-xl mb-8 flex items-center justify-center animate-fade-in">
            {error}
          </div>
        )}

        {/* Results Section */}
        {metadata && (
          <div className="w-full max-w-3xl">
            <VideoPreview metadata={metadata} />
            <DownloadCard 
              onDownloadStart={() => {}} 
              onDownloadComplete={() => {}} 
            />
          </div>
        )}

        {/* Features Grid (Only show when no result) */}
        {!metadata && !isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl opacity-50 hover:opacity-100 transition-opacity duration-500">
            <FeatureCard 
              icon={<Zap className="text-yellow-400" />}
              title="초고속 변환"
              desc="지연 시간 없는 즉각적인 포맷 변환 엔진"
            />
            <FeatureCard 
              icon={<Shield className="text-green-400" />}
              title="안전한 보안"
              desc="사용자 데이터를 저장하지 않는 프라이버시 보호"
            />
            <FeatureCard 
              icon={<Sparkles className="text-purple-400" />}
              title="최고 화질"
              desc="최대 4K 비디오 및 320kbps 오디오 지원"
            />
          </div>
        )}
      </div>

      <footer className="py-8 text-center text-gray-600 text-sm relative z-10">
        <p>© 2024 StreamFlow. For educational purposes only.</p>
      </footer>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-gray-800/20 border border-gray-800 p-6 rounded-2xl backdrop-blur-sm">
    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="font-bold text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-500">{desc}</p>
  </div>
);

export default App;