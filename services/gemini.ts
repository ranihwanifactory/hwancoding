
import { GoogleGenAI } from "@google/genai";

export class AIConsultantService {
  async getResponse(message: string, history: { role: string; parts: { text: string }[] }[]) {
    try {
      // 가이드라인: 호출 직전에 GoogleGenAI 인스턴스 생성
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...history, { role: 'user', parts: [{ text: message }] }],
        config: {
          systemInstruction: `당신은 HwanCoding(환코딩)의 수석 AI 컨설턴트입니다. 
          HwanCoding은 AI 기술을 접목한 차세대 웹 및 시스템 개발 전문 기업입니다.
          톤앤매너는 전문적이고, 미래 지향적이며, 신뢰감 있는 비즈니스 파트너의 모습이어야 합니다. 
          고객에게 AI 시스템 개발, 온라인 브랜딩, 웹 기능 페이지 제작, AI 교육 및 컨설팅에 대해 설명해주세요.
          답변은 명확하고 간결하며, HwanCoding의 기술적 우수성을 강조해야 합니다.`,
          temperature: 0.7,
        },
      });

      // 가이드라인: .text 속성으로 텍스트 추출
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "죄송합니다. 현재 시스템 연결이 원활하지 않습니다. 잠시 후 다시 시도해 주시거나 대표 번호로 문의해 주세요.";
    }
  }
}

export const aiService = new AIConsultantService();
