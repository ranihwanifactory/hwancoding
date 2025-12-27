
import React from 'react';
import { 
  Cpu, 
  ShoppingBag, 
  Layout, 
  GraduationCap, 
  Globe, 
  ShieldCheck, 
  Code2,
  MessageSquare
} from 'lucide-react';
import { NavItem, ServiceItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '기술 스택', href: '#tech' },
  { label: '제공 서비스', href: '#services' },
  { label: '주요 프로젝트', href: '#projects' },
  { label: '문의하기', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-dev',
    title: 'AI & 시스템 개발',
    description: '최신 AI 기술을 접목한 웹 서비스 및 기업 맞춤형 업무 시스템을 구축합니다.',
    icon: 'cpu',
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'branding',
    title: '쇼핑몰 & 브랜딩',
    description: '매출을 극대화하는 UX/UI 디자인과 온라인 브랜딩 전략을 제공합니다.',
    icon: 'shopping',
    gradient: 'from-purple-500 to-indigo-400'
  },
  {
    id: 'web-page',
    title: '웹 기능 페이지 제작',
    description: '반응형 웹사이트, 랜딩 페이지 등 목적에 맞는 고성능 웹을 제작합니다.',
    icon: 'layout',
    gradient: 'from-emerald-500 to-teal-400'
  },
  {
    id: 'consulting',
    title: 'AI 교육 & 컨설팅',
    description: '실무 중심의 AI 활용 교육 및 디지털 전환을 위한 전문 컨설팅을 진행합니다.',
    icon: 'education',
    gradient: 'from-orange-500 to-rose-400'
  }
];

export const PROJECTS = [
  {
    title: "AI 기반 법률 상담 챗봇",
    category: "AI System Development",
    description: "최신 웹 기술과 LLM을 활용하여 구축된 지능형 상담 시스템입니다.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "프리미엄 코스메틱 커머스",
    category: "E-Commerce & Branding",
    description: "브랜드 아이덴티티를 극대화한 감각적인 쇼핑 경험을 제공합니다.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "실시간 물류 관제 대시보드",
    category: "System Admin Page",
    description: "복잡한 데이터를 직관적으로 시각화하여 운영 효율을 높입니다.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "교육 플랫폼 LMS 구축",
    category: "Web Platform",
    description: "학습 관리와 사용자 편의성을 모두 잡은 에듀테크 솔루션입니다.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
  }
];

export const getIcon = (name: string, className?: string) => {
  switch (name) {
    case 'cpu': return <Cpu className={className} />;
    case 'shopping': return <ShoppingBag className={className} />;
    case 'layout': return <Layout className={className} />;
    case 'education': return <GraduationCap className={className} />;
    case 'globe': return <Globe className={className} />;
    case 'code': return <Code2 className={className} />;
    case 'chat': return <MessageSquare className={className} />;
    default: return null;
  }
};
