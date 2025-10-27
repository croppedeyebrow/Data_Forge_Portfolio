import { Project, ProjectCategory } from "./types";

export const projects: Project[] = [
  {
    id: "weatherfit",
    title: "Weatherfit",
    description: "날씨 기반 코디 추천 프로젝트",
    type: "team",
    technologies: ["Java", "Spring Boot", "React", "Node.js", "MongoDB"],
    github: {
      frontend:
        "https://github.com/croppedeyebrow/SideProject_weatherfit_front",
      backend: "https://github.com/croppedeyebrow/SideProject_weatherfit_back",
      other: "https://github.com/croppedeyebrow/selenium_pinterest_crowling",
    },
    features: [
      "실시간 날씨 데이터 기반 코디 추천",
      "Pinterest 크롤링을 통한 패션 트렌드 분석",
      "사용자 맞춤형 스타일 추천",
    ],
    challenges: [
      "다양한 날씨 API 통합 및 데이터 정규화",
      "크롤링 데이터의 품질 관리 및 중복 제거",
    ],
    solutions: [
      "Selenium을 활용한 안정적인 크롤링 시스템 구축",
      "Redis 캐싱을 통한 API 응답 속도 최적화",
    ],
  },
  {
    id: "marstock",
    title: "Marstock",
    description: "주식 시장 사이트",
    type: "team",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "Redis"],
    github: {
      frontend: "https://github.com/croppedeyebrow/FINAL_Marstock_Front",
    },
    features: [
      "실시간 주식 데이터 시각화",
      "포트폴리오 관리 기능",
      "투자 분석 도구",
    ],
    challenges: [
      "대용량 실시간 데이터 처리",
      "사용자별 포트폴리오 성능 최적화",
    ],
    solutions: [
      "WebSocket을 활용한 실시간 데이터 스트리밍",
      "인덱싱을 통한 데이터베이스 쿼리 최적화",
    ],
  },
  {
    id: "posture-check",
    title: "Posture Check",
    description: "실시간 자세 분석 및 교정 피드백 프로젝트",
    type: "personal",
    technologies: ["Python", "FastAPI", "React", "OpenCV", "TensorFlow"],
    github: {
      frontend: "https://github.com/croppedeyebrow/posture-check-app",
      backend: "https://github.com/croppedeyebrow/posture-check-backend",
    },
    features: [
      "실시간 자세 분석 및 감지",
      "AI 기반 자세 교정 피드백",
      "사용자별 자세 이력 관리",
    ],
    challenges: [
      "실시간 이미지 처리 성능 최적화",
      "정확한 자세 분석 모델 개발",
    ],
    solutions: [
      "OpenCV와 TensorFlow를 활용한 효율적인 이미지 처리",
      "머신러닝 모델 최적화를 통한 정확도 향상",
    ],
  },
];

export const projectCategories: ProjectCategory[] = [
  {
    name: "팀 프로젝트",
    projects: projects.filter((project) => project.type === "team"),
  },
  {
    name: "개인 프로젝트",
    projects: projects.filter((project) => project.type === "personal"),
  },
];
