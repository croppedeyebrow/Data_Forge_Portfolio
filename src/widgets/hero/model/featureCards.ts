export interface FeatureCard {
  title: string;
  description: string;
  gradient: string;
  glow: string;
  iconPath: string;
}

export const featureCards: FeatureCard[] = [
  {
    title: "기획 의도",
    description: "프로젝트의 목적과 해결하고자 하는 문제를 명확히 정의",
    gradient: "linear-gradient(135deg, #34d399, #059669)",
    glow: "rgba(16, 185, 129, 0.35)",
    iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "활용 기술",
    description: "최신 기술 스택과 아키텍처를 활용한 효율적인 개발",
    gradient: "linear-gradient(135deg, #60a5fa, #3b82f6)",
    glow: "rgba(96, 165, 250, 0.35)",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "트러블슈팅",
    description: "문제 해결 과정과 학습한 내용을 상세히 기록",
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    glow: "rgba(168, 85, 247, 0.35)",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];
