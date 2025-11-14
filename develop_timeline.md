## 개발 히스토리 (Develop Timeline)

### 2025-10-29 FSD 구조 점검 및 개선 계획 수립

- 현황 분석: App, Entities, Shared, Widgets 레이어는 구성 완료. Features 폴더는 존재하나 비어 있음. Pages 레이어 개념 부재.
- 주요 이슈:
  - Pages 레이어 부재로 페이지 구성 로직이 `src/app/page.tsx`에 집중됨
  - Widgets에 비즈니스 로직(스크롤, 상세 모달 등) 혼재
  - 레이어 내 세그먼트(`ui/`, `model/`, `api/`) 구분 미흡
- 결정사항:
  - Features 레이어 활성화: 스크롤, 프로젝트 상세, 기술스택 필터링 등 기능 이전
  - Pages 레이어 도입: 페이지 구성 로직을 전담하는 디렉터리 추가(Next App Router와 공존)
  - 세그먼트 구조 표준화: 각 레이어 내 `ui/`, `model/`, `api/` 정리
- 다음 액션(우선순위 순):
  1. features/scroll-to-section 초기 구현 및 Hero에서 사용하도록 리팩터링
  2. features/project-detail-modal 생성, ProjectSection와 연동
  3. pages/home 생성 후 `src/app/page.tsx`에서 위임하는 형태로 변환
  4. entities/project 세그먼트화(`model/`, `ui/`) 및 export 정리
  5. shared/ui 컴포넌트 인덱스 구조 정리 및 경로 정규화

### 2025-10-29 Features: scroll-to-section 도입 및 Hero 리팩터링

- 추가: `features/scroll-to-section/model/scrollToSection.ts`에 `scrollToSectionById` 함수 구현
- 추가: `features/scroll-to-section/ui/ScrollToSectionButton.tsx` 컴포넌트 생성
- 추가: `features/scroll-to-section/index.ts` 익스포트 구성
- 변경: `widgets/hero/Hero.tsx`에서 로컬 스크롤 함수 제거, `ScrollToSectionButton` 사용으로 대체
- 비고: 스타일 및 동작은 기존과 동일하게 유지, 의존성 방향 준수 강화

### 2025-10-29 Features: project-detail-modal 도입 및 Pages 레이어 생성

- 추가: `features/project-detail-modal/model/useProjectDetailModal.ts` 훅 구현
- 추가: `features/project-detail-modal/ui/ProjectDetailModal.tsx` 모달 컴포넌트 생성
- 추가: `features/project-detail-modal/index.ts` 익스포트 구성
- 변경: `widgets/project-section/ProjectCard.tsx`에서 상세 정보 간소화, "자세히 보기" 버튼 추가
- 변경: `widgets/project-section/ProjectSection.tsx`에서 모달 상태 관리 및 통합
- 추가: `pages/home/ui/HomePage.tsx` 페이지 컴포넌트 생성
- 추가: `pages/home/index.ts` 익스포트 구성
- 변경: `src/app/page.tsx`에서 `HomePage` 사용으로 위임
- 비고: 프로젝트 카드는 미리보기만, 상세 정보는 모달에서 확인하는 UX 개선

### 2025-10-29 UI 중앙 정렬 개선

- 변경: 모든 섹션의 최대 너비를 `max-w-7xl`에서 `max-w-6xl`로 조정하여 더 집중된 레이아웃 제공
- 변경: Hero, ProjectSection, TechStackSection, ContactSection에 `max-w-6xl mx-auto` 적용
- 변경: Header, Footer에도 `max-w-6xl` 적용하여 전체적인 일관성 확보
- 수정: ContactSection에서 사용하지 않는 Button import 제거
- 비고: 화면 중앙에 더 집중된 콘텐츠 배치로 사용자 경험 개선

### 2025-10-29 1920px 기준 최대 너비 조정

- 변경: 모든 섹션의 최대 너비를 `max-w-7xl`에서 `max-w-[1600px]`로 재조정
- 변경: Hero, ProjectSection, TechStackSection, ContactSection에 `max-w-[1600px] mx-auto` 적용
- 변경: Header, Footer에도 `max-w-[1600px]` 적용
- 비고: 1920px 화면에 최적화된 레이아웃 비율 제공 (1600px = 83% 활용, 양쪽 여백 160px씩)

### 2025-10-29 Hero 섹션 중앙 정렬 개선

- 변경: Hero 섹션의 모든 요소들을 `max-w-[1600px]`로 통일하여 중앙 정렬 강화
- 변경: 기능 카드 그리드를 `max-w-6xl`에서 `max-w-[1600px]`로 확장
- 변경: CTA 버튼 컨테이너에 `max-w-[1600px] mx-auto` 적용
- 변경: 로고/타이틀 컨테이너에 `max-w-[1600px] mx-auto` 적용
- 비고: 설명 텍스트를 제외한 모든 요소들이 1920px 화면에서 완전히 중앙 정렬됨

### 2025-10-29 Header 네비게이션 스타일 개선

- 변경: 네비게이션 버튼 간격을 `space-x-2`에서 `space-x-12`로 확대
- 변경: 버튼 패딩을 `px-8`에서 `px-6`으로 조정
- 제거: `glass` 및 `glass-card-hover` 클래스 제거하여 불투명한 배경 효과 제거
- 제거: `rounded-xl` 클래스 제거하여 둥근 모서리 효과 제거
- 비고: 깔끔하고 간결한 텍스트 기반 네비게이션으로 변경

### 2025-10-29 Header 네비게이션 스타일 추가 개선

- 변경: `space-x-12`에서 `gap-12`로 변경하여 간격 확보 강화
- 변경: 기본 글자색을 `text-gray-700`에서 `text-emerald-500`로 변경
- 추가: `cursor-pointer` 클래스 추가하여 호버 시 포인터 커서 효과 적용
- 비고: 에메랄드 색상의 네비게이션과 명확한 커서 피드백으로 사용자 경험 개선

### 2025-11-14 스타일 전략 전환 합의

- 목표: 함수형 사고 + FSD/FSP 구조를 유지하면서 스타일 가독성을 확보
- 결정사항:
  - Tailwind 의존성을 줄이고 **CSS Modules + PostCSS** 조합을 기본 스타일 시스템으로 채택
  - `clsx` 기반 유틸만 유지하고 Tailwind 의존성은 완전히 제거
  - `project-section`, `hero` 등 주요 위젯부터 단계적으로 CSS Modules 로 이관하면서 기존 Tailwind 클래스를 모두 치환
  - 전역 스타일(`globals.css`)은 기본 토큰/유틸 수준으로만 유지하고 컴포넌트별 스타일은 모듈에 캡슐화
  - PostCSS 플러그인(stack: nesting, autoprefixer 등)을 확장해 재사용 가능한 mixin/토큰 전략 마련
- 비고: 스타일 변경은 섹션 단위로 점진적으로 진행하며, 변경 시 develop timeline에 기록
