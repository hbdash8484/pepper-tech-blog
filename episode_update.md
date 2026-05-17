# Pepper — Episode Update

> **Claude Code 사용법 (두 가지 방식 모두 가능)**
>
> **방식 A — 파일로 한꺼번에 (권장)**
> 에피소드 본문을 담은 파일을 프로젝트 폴더에 넣고:
> ```
> [파일명] 보고 에피소드 업데이트 해줘
> ```
> 파일 형식은 자유롭게. 에피소드별로 구분만 되어 있으면 됨.
> Claude Code가 알아서 파싱해서:
> 1. `content/episodes.ts` — 제목·요약·날짜·태그·published: true 업데이트
> 2. `content/episodes/{slug}.ko.md` — 한국어 본문 저장
> 3. `content/episodes/{slug}.en.md` — 영어 본문 저장
> 4. `git add`, `git commit`, `git push` → Vercel 자동 배포
>
> **방식 B — 이 파일에 직접 작성**
> 아래 템플릿을 채운 뒤:
> ```
> episode_update.md 파일 보고 업데이트 해줘
> ```

---

## Episode 정보

| 항목         | 값                        |
|------------|--------------------------|
| Slug       | 04                       |
| Date       | 2025-01-05               |
| Read Time  | 자동 계산                 |
| Tags       | 자동 추출                 |

## Title

- **KO:** (한국어 제목)
- **EN:** (English title)

## Summary (SEO용 — 150자 이내)

- **KO:** (한국어 요약)
- **EN:** (English summary)

---

## Body — Korean

여기에 한국어 본문을 마크다운으로 작성하세요.

---

## Body — English

Write the English body in Markdown here.
