
import React, { useState, useRef, useEffect } from 'react';
import { aiService } from '../services/gemini';
import { ChatMessage } from '../types';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "안녕하세요! HwanCoding의 AI 컨설턴트입니다. 어떤 프로젝트를 도와드릴까요?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    const response = await aiService.getResponse(userMsg, history);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-[380px] h-[500px] bg-white border border-black/5 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col mb-4 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Header */}
          <div className="bg-black p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest">HwanCoding Bot</h4>
                <span className="text-[10px] text-blue-400 font-bold tracking-widest uppercase">온라인 상태</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 bg-[#fcfcfc]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] font-medium leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-black text-white rounded-tr-none' 
                  : 'bg-black/[0.03] border border-black/5 text-black/70 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-black/[0.03] p-4 rounded-2xl rounded-tl-none">
                  <Loader2 className="w-4 h-4 text-black animate-spin" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 bg-white border-t border-black/5">
            <div className="relative">
              <input 
                type="text" 
                placeholder="문의 사항을 입력하세요..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                className="w-full bg-[#f9f9f9] border border-black/5 rounded-xl py-4 pl-5 pr-12 text-[13px] font-medium focus:outline-none focus:border-black transition-all text-black placeholder:text-black/20"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black rounded-lg flex items-center justify-center hover:bg-zinc-800 transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
          isOpen ? 'bg-black rotate-90' : 'bg-black hover:scale-110 active:scale-95'
        }`}
      >
        {isOpen ? <X className="text-white" /> : <MessageSquare className="text-white" />}
      </button>
    </div>
  );
};

export default AIConsultant;
