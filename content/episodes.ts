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
    date: '',
    readTime: 0,
    tags: [],
    published: false,
    title: { ko: 'Coming Soon', en: 'Coming Soon' },
    summary: { ko: '', en: '' },
  },
  {
    id: 12,
    slug: '12',
    date: '',
    readTime: 0,
    tags: [],
    published: false,
    title: { ko: 'Coming Soon', en: 'Coming Soon' },
    summary: { ko: '', en: '' },
  },
  {
    id: 13,
    slug: '13',
    date: '',
    readTime: 0,
    tags: [],
    published: false,
    title: { ko: 'Coming Soon', en: 'Coming Soon' },
    summary: { ko: '', en: '' },
  },
  {
    id: 14,
    slug: '14',
    date: '',
    readTime: 0,
    tags: [],
    published: false,
    title: { ko: 'Coming Soon', en: 'Coming Soon' },
    summary: { ko: '', en: '' },
  },
  {
    id: 15,
    slug: '15',
    date: '',
    readTime: 0,
    tags: [],
    published: false,
    title: { ko: 'Coming Soon', en: 'Coming Soon' },
    summary: { ko: '', en: '' },
  },
  {
    id: 16,
    slug: '16',
    date: '',
    readTime: 0,
    tags: [],
    published: false,
    title: { ko: 'Coming Soon', en: 'Coming Soon' },
    summary: { ko: '', en: '' },
  },
  {
    id: 17,
    slug: '17',
    date: '',
    readTime: 0,
    tags: [],
    published: false,
    title: { ko: 'Coming Soon', en: 'Coming Soon' },
    summary: { ko: '', en: '' },
  },
  {
    id: 18,
    slug: '18',
    date: '',
    readTime: 0,
    tags: [],
    published: false,
    title: { ko: 'Coming Soon', en: 'Coming Soon' },
    summary: { ko: '', en: '' },
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
