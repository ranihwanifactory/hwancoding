import { 
  Bot, 
  ShoppingBag, 
  Code2, 
  GraduationCap, 
  Database,
  Cpu,
  Globe,
  Smartphone,
  Layout
} from 'lucide-react';
import { Service, PortfolioItem, TechItem } from './types';

export const APP_NAME = "HwanCoding";

export const CONTACT_INFO = {
  email: "hwanace@naver.com",
  phone: "010-7545-0038"
};

export const NAV_ITEMS = [
  { label: '서비스', href: '#services' },
  { label: '기술 스택', href: '#tech' },
  { label: '포트폴리오', href: '#portfolio' },
  { label: '문의하기', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "AI & 시스템 개발",
    description: "최신 AI 기술을 접목한 웹 서비스 및 기업 맞춤형 업무 시스템을 구축합니다.",
    icon: Bot,
  },
  {
    id: 2,
    title: "쇼핑몰 & 브랜딩",
    description: "매출을 극대화하는 UX/UI 디자인과 온라인 브랜딩 전략을 제공합니다.",
    icon: ShoppingBag,
  },
  {
    id: 3,
    title: "웹 기능 페이지 제작",
    description: "반응형 웹사이트, 랜딩 페이지, 프로모션 페이지 등 목적에 맞는 웹을 제작합니다.",
    icon: Layout,
  },
  {
    id: 4,
    title: "AI 교육 & 컨설팅",
    description: "실무 중심의 AI 활용 교육 및 디지털 전환을 위한 전문 컨설팅을 진행합니다.",
    icon: GraduationCap,
  },
];

export const TECH_STACK: TechItem[] = [
  { name: "React / Next.js", icon: Code2, level: "Advanced" },
  { name: "AI Integration", icon: Cpu, level: "Specialist" },
  { name: "Node.js API", icon: Database, level: "Advanced" },
  { name: "Responsive Web", icon: Globe, level: "Expert" },
  { name: "App Development", icon: Smartphone, level: "Intermediate" },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "AI 기반 법률 상담 챗봇",
    category: "AI System Development",
    imageUrl: "https://picsum.photos/seed/law/600/400",
  },
  {
    id: 2,
    title: "프리미엄 코스메틱 커머스",
    category: "E-Commerce & Branding",
    imageUrl: "https://picsum.photos/seed/cosmetic/600/400",
  },
  {
    id: 3,
    title: "실시간 물류 관제 대시보드",
    category: "System Admin Page",
    imageUrl: "https://picsum.photos/seed/dashboard/600/400",
  },
  {
    id: 4,
    title: "교육 플랫폼 LMS 구축",
    category: "Web Platform",
    imageUrl: "https://picsum.photos/seed/edu/600/400",
  },
];