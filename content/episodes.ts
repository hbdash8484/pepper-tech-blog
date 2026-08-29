export interface Episode {
  id: number;
  slug: string;
  date: string;
  readTime: number;
  tags: string[];
  published: boolean;
  title: {
    ko: string;
    en: string;
  };
  summary: {
    ko: string;
    en: string;
  };
}

export const episodes: Episode[] = [
  {
    id: 0,
    slug: '00',
    date: '2026-05-17',
    readTime: 4,
    tags: ['origin', 'family', 'motivation'],
    published: true,
    title: {
      ko: '페퍼 프로젝트의 시작',
      en: 'How the Pepper Project Started',
    },
    summary: {
      ko: '개발 지식이 거의 없는 테크 회사 임원이 가족을 위한 AI 어시스턴트를 만들기로 결심하기까지.',
      en: 'A tech executive with almost no development background decides to build an AI assistant for his family — and what made him actually start.',
    },
  },
  {
    id: 1,
    slug: '01',
    date: '2026-05-17',
    readTime: 6,
    tags: ['concept', 'architecture', 'state-machine'],
    published: true,
    title: {
      ko: '페퍼는 챗봇이 아니다',
      en: 'Pepper Is Not a Chatbot',
    },
    summary: {
      ko: 'Family Graph, Family Vault, 그리고 STATE A/B/C. 페퍼가 일반 챗봇과 근본적으로 다른 이유.',
      en: 'Family Graph, Family Vault, and STATE A/B/C. Why Pepper is fundamentally different from a regular chatbot.',
    },
  },
  {
    id: 2,
    slug: '02',
    date: '2026-05-17',
    readTime: 6,
    tags: ['architecture', 'design', 'documentation'],
    published: true,
    title: {
      ko: '코드보다 먼저 — 아키텍처 설계',
      en: 'Before the Code — Architecture Design',
    },
    summary: {
      ko: '코드 한 줄 치기 전에 반나절을 설계에 썼다. 비개발자가 AI와 함께 시스템 구조를 잡는 방법.',
      en: 'Half a day of design before a single line of code. How a non-developer builds system architecture with AI.',
    },
  },
  {
    id: 3,
    slug: '03',
    date: '2026-05-17',
    readTime: 7,
    tags: ['build-log', 'supabase', 'vercel'],
    published: true,
    title: {
      ko: 'Day 1 구현기 — "어, 이게 진짜 되네?"',
      en: 'Day 1 Build Log — "Wait, This Actually Works?"',
    },
    summary: {
      ko: '반나절 기획, 2시간 구현, 세션 51%. 모노레포 골격부터 Vercel 배포까지 — Day 1의 기록.',
      en: 'Half day planning, two hours building, 51% of session used. From monorepo skeleton to Vercel deploy — the Day 1 log.',
    },
  },
  {
    id: 4,
    slug: '04',
    date: '2026-05-21',
    readTime: 4,
    tags: ['documentation', 'architecture', 'logging'],
    published: true,
    title: {
      ko: 'context.md는 계속 진화한다',
      en: 'context.md Keeps Evolving',
    },
    summary: {
      ko: '코드 한 줄 없이 페퍼가 자란 날. pepper_logs, STATE C 지시문, Google I/O — 문서가 먼저 바뀌고 코드가 따라온다.',
      en: 'The day Pepper grew without a single line of code. pepper_logs, STATE C as instructions, Google I/O — the document changes first, the code follows.',
    },
  },
  {
    id: 5,
    slug: '05',
    date: '2026-05-25',
    readTime: 5,
    tags: ['architecture', 'documentation', 'design-system'],
    published: true,
    title: {
      ko: '지도가 없으면 길을 잃는다',
      en: 'Without a Map, You Get Lost',
    },
    summary: {
      ko: 'PEPPER_MAP과 UI Spec — 컴포넌트가 16개 넘어가면서 생긴 질문. "어디를 고쳐야 하는지"를 Claude Code가 알게 하는 법.',
      en: 'PEPPER_MAP and UI Spec — what to do when your project outgrows what you can hold in your head.',
    },
  },
  {
    id: 6,
    slug: '06',
    date: '2026-05-25',
    readTime: 6,
    tags: ['realtime', 'database', 'debugging'],
    published: true,
    title: {
      ko: '연결됐는데 안 온다',
      en: "Connected But Nothing's Coming Through",
    },
    summary: {
      ko: 'SUBSCRIBED인데 메시지가 안 왔다. RLS 재귀 루프와 JWT 타이밍 문제 — 에러 메시지 없이 조용히 실패하는 두 가지 원인.',
      en: 'Status said SUBSCRIBED. Nothing came through. Two silent causes: RLS recursion and JWT timing.',
    },
  },
  {
    id: 7,
    slug: '07',
    date: '2026-05-25',
    readTime: 5,
    tags: ['mobile', 'ux', 'debugging'],
    published: true,
    title: {
      ko: '채팅방이 이렇게 어렵다고?',
      en: 'Chat UI Is This Hard?',
    },
    summary: {
      ko: '키보드, 스와이프 답장, 히스토리 쿼리 버그, 낙관적 업데이트 충돌 — 채팅 UI 하나에 숨어있던 것들.',
      en: 'Keyboard layout, swipe-to-reply, history query bugs, optimistic update conflicts — everything hiding inside a chat UI.',
    },
  },
  {
    id: 8,
    slug: '08',
    date: '2026-05-25',
    readTime: 5,
    tags: ['performance', 'latency', 'ux'],
    published: true,
    title: {
      ko: '2480ms를 815ms로',
      en: 'From 2480ms to 815ms',
    },
    summary: {
      ko: '병목은 LLM이 아니라 로깅이었다. 그리고 빠른 것보다 빠르게 느껴지는 게 왜 더 중요한지.',
      en: "The bottleneck wasn't the LLM — it was logging. And why feeling fast matters more than being fast.",
    },
  },
  {
    id: 9,
    slug: '09',
    date: '2026-05-25',
    readTime: 6,
    tags: ['memory', 'context', 'embedding'],
    published: true,
    title: {
      ko: '페퍼한테 기억을 심는 법',
      en: 'How to Give Pepper a Memory',
    },
    summary: {
      ko: 'LLM은 기억이 없다. 최근 10턴, 60개 메시지 요약, 임베딩 Vault 검색 — 페퍼가 기억을 가진 척하는 세 가지 레이어.',
      en: 'LLMs have no memory. Three layers that create the illusion of one — last 10 turns, summarized history, and embedding-based Vault search.',
    },
  },
  {
    id: 10,
    slug: '10',
    date: '2026-05-25',
    readTime: 7,
    tags: ['architecture', 'triage', 'llm'],
    published: true,
    title: {
      ko: '페퍼야, 이게 뭔지 알아?',
      en: 'Pepper, Do You Know What This Is?',
    },
    summary: {
      ko: 'triage 3가지에서 6가지로. 경계 케이스, 멀티스텝, 50개 테스트 94% 통과 — 페퍼가 덜 멍청해진 방법.',
      en: 'Triage expanded from 3 to 6 categories. Edge cases, multi-step stubs, 50 test cases at 94% — how Pepper got less confused.',
    },
  },
  {
    id: 11,
    slug: '11',
    date: '2026-08-29',
    readTime: 12,
    tags: ['prompt-engineering', 'llm', 'debugging'],
    published: true,
    title: {
      ko: '94%는 착각이었다 — triage 33%에서 90%로',
      en: '33% to 90% — What Was Actually Broken',
    },
    summary: {
      ko: '50개 테스트 94%는 착각이었다. 500개로 다시 재니 33%. temperature 0, 영어 프롬프트, 파싱 버그 — triage를 90%로 끌어올린 진짜 작업.',
      en: '94% on 50 tests was an illusion. 500 cases said 33%. temperature 0, English prompts, a parsing bug — the real work of dragging triage to 90%.',
    },
  },
  {
    id: 12,
    slug: '12',
    date: '2026-08-29',
    readTime: 5,
    tags: ['decision', 'scope', 'architecture'],
    published: true,
    title: {
      ko: '골인 지점을 옮겼다',
      en: 'I Moved the Finish Line',
    },
    summary: {
      ko: 'EP 10에서 골인 지점이라 부른 STATE B를 Phase 2로 미뤘다. 출시되지 않는 자가진화보다, 오늘 아침 브리핑을 주는 앱을 먼저.',
      en: "STATE B — the finish line from EP 10 — pushed to Phase 2. A product that never ships isn't a product. Why I moved the goal.",
    },
  },
  {
    id: 13,
    slug: '13',
    date: '2026-08-29',
    readTime: 6,
    tags: ['mobile', 'onboarding', 'auth'],
    published: true,
    title: {
      ko: '뇌에서 앱으로',
      en: 'From Brain to App',
    },
    summary: {
      ko: '온보딩 순서가 곧 설계다. family_code, 서버사이드 OAuth, FaceID, 5개 탭, Attention Gate — 뇌를 가족이 손에 쥘 앱으로 감싸기.',
      en: 'Onboarding order is the design. family_code, server-side OAuth, FaceID, five tabs, the Attention Gate — wrapping the brain into an app a family can hold.',
    },
  },
  {
    id: 14,
    slug: '14',
    date: '2026-08-29',
    readTime: 6,
    tags: ['vault', 'multimodal', 'embedding'],
    published: true,
    title: {
      ko: 'Vault가 살아났다 — 라벨 한 장으로',
      en: 'The Vault Comes Alive — From a Single Label',
    },
    summary: {
      ko: '와인 라벨 한 장을 찍으면 소믈리에 노트가 붙는다. 멀티모달, 자동 임베딩, 그리고 내가 통제 못 하는 플랫폼 위에 얹혀 산다는 것.',
      en: "Photograph a wine label, get sommelier notes. Multimodal, auto-embedding, and living on top of platforms I don't control.",
    },
  },
  {
    id: 15,
    slug: '15',
    date: '2026-08-29',
    readTime: 6,
    tags: ['proactive', 'cron', 'push'],
    published: true,
    title: {
      ko: '물어보기 전에 챙긴다',
      en: 'Looking Out for You Before You Ask',
    },
    summary: {
      ko: '브리핑은 탭을 열어야 보인다 — 그건 챙김이 아니다. 아침 9시 푸시, pg_cron, 그리고 초 vs 밀리초 한 줄 버그.',
      en: "A briefing you have to open isn't being looked after. A 9 a.m. push, pg_cron, and a one-line seconds-vs-milliseconds bug.",
    },
  },
  {
    id: 16,
    slug: '16',
    date: '2026-08-29',
    readTime: 6,
    tags: ['performance', 'instrumentation', 'debugging'],
    published: true,
    title: {
      ko: '빠른 게 아니라, 빠르게 느껴지게 (2)',
      en: 'Not Fast, but Feeling Fast (Part 2)',
    },
    summary: {
      ko: "카톡은 즉시 뜨는데 페퍼는 스피너가 돈다. 디스크 캐시·prefetch·SWR, 그리고 계측으로 '느리다'를 '46번 리렌더'로 바꾸기.",
      en: "KakaoTalk opens instantly; Pepper spins. Disk cache, prefetch, SWR — and turning 'slow' into '46 re-renders' with instrumentation.",
    },
  },
  {
    id: 17,
    slug: '17',
    date: '2026-08-29',
    readTime: 7,
    tags: ['debugging', 'silent-failure'],
    published: true,
    title: {
      ko: '에러 없이 틀리는 버그들',
      en: 'The Bugs That Fail Without an Error',
    },
    summary: {
      ko: '에러 없이 그냥 틀리는 버그 셋. 박제된 토큰, 늦게 오는 메시지, 0.2 차이로 죽은 임베딩 — 조용히 실패하는 코드가 가장 위험하다.',
      en: 'Three bugs that fail with no error. A frozen token, late messages, an embedding killed by 0.2 — silent failure is the most dangerous code.',
    },
  },
  {
    id: 18,
    slug: '18',
    date: '2026-08-29',
    readTime: 7,
    tags: ['launch', 'reflection'],
    published: true,
    title: {
      ko: '출시 — 와이프가 페퍼를 연다',
      en: 'Launch — My Wife Opens Pepper',
    },
    summary: {
      ko: '앱스토어도 프레스도 없었다. 아내가 아침에 폰을 열어 브리핑을 확인하는 조용한 장면. 3개월의 기록, 그리고 1부의 끝.',
      en: 'No App Store, no press. Just my wife opening her phone to check the briefing. Three months in, and the end of Part 1.',
    },
  },
  {
    id: 19,
    slug: '19',
    date: '',
    readTime: 0,
    tags: [],
    published: false,
    title: { ko: 'Coming Soon', en: 'Coming Soon' },
    summary: { ko: '', en: '' },
  },
];
