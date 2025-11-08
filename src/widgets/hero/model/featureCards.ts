export interface FeatureCard {
  title: string;
  description: string;
  gradient: string;
  hoverText: string;
  hoverShadow: string;
  iconPath: string;
}

export const featureCards: FeatureCard[] = [
  {
    title: "기획 의도",
    description: "프로젝트의 목적과 해결하고자 하는 문제를 명확히 정의",
    gradient: "from-green-400 to-emerald-500",
    hoverText: "group-hover:text-green-300",
    hoverShadow: "group-hover:shadow-green-500/20",
    iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "활용 기술",
    description: "최신 기술 스택과 아키텍처를 활용한 효율적인 개발",
    gradient: "from-blue-400 to-cyan-500",
    hoverText: "group-hover:text-blue-300",
    hoverShadow: "group-hover:shadow-blue-500/20",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "트러블슈팅",
    description: "문제 해결 과정과 학습한 내용을 상세히 기록",
    gradient: "from-purple-400 to-pink-500",
    hoverText: "group-hover:text-purple-300",
    hoverShadow: "group-hover:shadow-purple-500/20",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];
