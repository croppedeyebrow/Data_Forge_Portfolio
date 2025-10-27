import { TechStackCategory } from "./types";

export const techStackCategories: TechStackCategory[] = [
  {
    name: "백엔드",
    stacks: [
      {
        category: "Java + Spring Boot",
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Spring Data JPA",
        ],
        description: "엔터프라이즈급 애플리케이션 개발",
      },
      {
        category: "Python",
        technologies: ["Python", "FastAPI", "Flask"],
        description: "AI/ML 및 API 서버 개발",
      },
      {
        category: "Node.js",
        technologies: ["Node.js", "Express", "NestJS"],
        description: "고성능 웹 서버 및 마이크로서비스 개발",
      },
    ],
  },
  {
    name: "데이터베이스",
    stacks: [
      {
        category: "RDBMS",
        technologies: ["MySQL", "PostgreSQL"],
        description: "관계형 데이터베이스 설계 및 최적화",
      },
      {
        category: "NoSQL",
        technologies: ["MongoDB"],
        description: "문서 기반 데이터 저장 및 처리",
      },
      {
        category: "Cache",
        technologies: ["Redis"],
        description: "캐싱 및 세션 관리",
      },
    ],
  },
  {
    name: "DevOps",
    stacks: [
      {
        category: "Containerization",
        technologies: ["Docker"],
        description: "컨테이너 기반 배포 및 관리",
      },
      {
        category: "CI/CD",
        technologies: ["GitHub Actions"],
        description: "자동화된 빌드 및 배포",
      },
    ],
  },
  {
    name: "프론트엔드",
    stacks: [
      {
        category: "React Ecosystem",
        technologies: ["React", "Next.js", "TypeScript"],
        description: "모던 웹 애플리케이션 개발",
      },
      {
        category: "Styling",
        technologies: ["Tailwind CSS"],
        description: "유틸리티 기반 스타일링",
      },
      {
        category: "State Management",
        technologies: ["React Query", "React Router"],
        description: "상태 관리 및 라우팅",
      },
    ],
  },
];
