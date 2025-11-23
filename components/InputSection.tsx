import React, { useState, useCallback } from 'react';
import { Search, Link as LinkIcon, X } from 'lucide-react';

interface InputSectionProps {
  onSearch: (url: string) => void;
  isLoading: boolean;
}

const InputSection: React.FC<InputSectionProps> = ({ onSearch, isLoading }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onSearch(url);
    }
  };

  const handleClear = () => {
    setUrl('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-12 relative z-10 animate-fade-in">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center bg-dark-800 border border-gray-700/50 rounded-2xl p-2 shadow-xl focus-within:border-brand-500/50 focus-within:ring-1 focus-within:ring-brand-500/50 transition-all duration-300">
          <div className="pl-4 pr-3 text-gray-400">
            <LinkIcon size={20} />
          </div>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="여기에 YouTube 링크를 붙여넣으세요..."
            className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-lg py-3"
            disabled={isLoading}
          />
          {url && !isLoading && (
            <button
              type="button"
              onClick={handleClear}
              className="p-2 text-gray-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          )}
          <button
            type="submit"
            disabled={!url || isLoading}
            className={`ml-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center gap-2
              ${!url || isLoading 
                ? 'bg-gray-700 cursor-not-allowed text-gray-400' 
                : 'bg-brand-600 hover:bg-brand-500 shadow-lg shadow-brand-600/20 active:scale-95'
              }`}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>분석하기</span>
                <Search size={18} />
              </>
            )}
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 mt-4 text-sm">
        지원 형식: MP4, MP3, WEBM (최대 4K 지원)
      </p>
    </div>
  );
};

export default InputSection;