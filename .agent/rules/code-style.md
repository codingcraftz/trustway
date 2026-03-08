---
trigger: always_on
---

# Code Style & Technical Rules

## 1. 프레임워크 및 언어
- **Next.js (App Router)**를 기본으로 사용한다.
- **TypeScript**는 사용하지 않는다.

## 2. 컴포넌트 구조
- **Atomic Design**의 원칙을 차용하되, 복잡성을 낮추기 위해 `components/ui`, `components/sections`, `components/shared`로 분리한다.
- 모든 UI 컴포넌트는 `shadcn/ui` 기반으로 작성하며, 재무 컨설팅의 전문성을 위해 커스터마이징한다.

## 3. 스타일링 규칙 (Tailwind CSS)
- 컬러는 `globals.css`의 CSS 변수로 관리한다.
  - `--primary`: 금융의 신뢰를 주는 딥 블루 (#003366 계열)
  - `--secondary`: 포인트 컬러로 사용될 부드러운 골드나 블루
- 반응형 디자인: 모바일 우선(Mobile-first) 접근 방식을 따르며, 금융 정보가 작은 화면에서도 잘 보이도록 설계한다.

## 4. 코드 품질 및 협업
- 모든 페이지 상단에는 해당 페이지의 목적을 주석으로 명시한다.
- **SEO 최적화:** 모든 페이지에 적절한 `metadata`를 설정하고, 이미지에는 `alt` 태그를 반드시 포함한다.
- **접근성(Accessibility):** 시력이 좋지 않은 고객도 정보를 읽기 쉽도록 폰트 크기와 명도 대비를 준수한다.

## 5. 안티그래비티 작업 지침
- 새로운 코드를 생성할 때 `PRD.md`에 정의된 톤앤매너를 유지하고 있는지 스스로 검토하라.
- 재무 관련 폼(Form) 구현 시 사용자 경험(UX)을 저해하는 복잡한 입력은 지양하고 심플하게 유지하라.