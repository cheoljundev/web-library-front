# 온라인 도서관 프론트엔드

## 📌 소개
이 레포지토리는 [온라인 도서관](https://devcj.kr/web-library/) 프로젝트의 프론트엔드 부분을 담당합니다.

이 프로젝트는 시립 도서관 사이트에서 영감을 받아 개발된 1인 프로젝트로, 도서 대출 및 반납 기능, 관리자용 도서 및 회원 관리 기능을 제공합니다.

사용자는 사이트에서 도서를 대출한 후, 도서관에서 관리자의 확인을 거쳐 픽업할 수 있습니다.

## 🚀 주요 기능
- **로그인 및 회원가입**: 사용자 인증 및 계정 생성 기능을 제공합니다.
- **도서 검색**: 다양한 필터와 검색 옵션을 통해 원하는 도서를 쉽게 찾을 수 있습니다.
- **도서 대출 및 반납**: 온라인으로 도서를 대출하고, 반납할 수 있습니다.
- **도서 관리**: 관리자는 도서 정보를 추가, 수정, 삭제할 수 있습니다.
- **회원 관리**: 관리자는 회원 권한을 수정하거나, 회원을 삭제할 수 있습니다.
- **마이페이지**: 사용자는 자신의 정보를 확인하고, 대출한 도서를 확인 및 반납할 수 있습니다.

## 📦 기술 스택
- **프레임워크**: Next.js
- **스타일링**: Tailwind CSS, ShadCN
- **상태 관리 및 폼 처리**: React Hook Form, Zod

## 📂 프로젝트 구조
```
web-library-front/
├── .idea/                  # 프로젝트 설정 파일
├── app/                    # Next.js의 App 디렉토리
├── components/             # 재사용 가능한 UI 컴포넌트
├── fonts/                  # 웹 폰트 파일
├── lib/                    # 라이브러리 및 헬퍼 함수
├── types/                  # TypeScript 타입 정의
├── .gitignore              # Git에서 추적하지 않을 파일 및 디렉토리 목록
├── components.json         # 컴포넌트 관련 설정 파일
├── config.ts               # 프로젝트 전역 설정 파일
├── eslint.config.mjs       # ESLint 설정 파일
├── middleware.ts           # 미들웨어 설정 파일
├── next.config.ts          # Next.js 설정 파일
├── package-lock.json       # 정확한 패키지 버전 관리를 위한 파일
├── package.json            # 프로젝트 메타데이터 및 의존성 목록
├── postcss.config.mjs      # PostCSS 설정 파일
├── tailwind.config.ts      # Tailwind CSS 설정 파일
├── tsconfig.json           # TypeScript 설정 파일
└── utils.ts                # 유틸리티 함수 모음
```

## 🔧 설치 및 설정

### 1. 레포지토리 클론
```bash
git clone https://github.com/cheoljundev/web-library-front.git
cd web-library-front
```

### 2. 의존성 설치
```bash
npm install  # 또는 yarn install
```

### 3. 개발 서버 실행
```bash
npm run dev  # 또는 yarn dev
```

이 프로젝트는 2025년 1월 8일부터 2025년 2월 28일까지 개인 프로젝트로 진행되었습니다. 프로젝트의 백엔드 레포지토리와 Swagger 문서는 아래 링크에서 확인하실 수 있습니다.

- **백엔드 레포지토리**: [GitHub 링크](https://github.com/cheoljundev/web-library)
- **Swagger 문서**: [Swagger 링크](https://43.200.65.98:8080)

프로젝트에 대한 자세한 정보와 문서는 [온라인 도서관](https://devcj.kr/web-library/)에서 확인하실 수 있습니다.

