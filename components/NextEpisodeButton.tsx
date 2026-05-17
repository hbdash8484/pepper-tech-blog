import Link from 'next/link';
import type { Episode } from '@/content/episodes';

interface Props {
  episode: Episode;
  lang: 'ko' | 'en';
}

export default function NextEpisodeButton({ episode, lang }: Props) {
  const href = lang === 'en' ? `/en/ep/${episode.slug}` : `/ep/${episode.slug}`;
  const title = lang === 'en' ? episode.title.en : episode.title.ko;

  return (
    <div className="next-episode-wrapper">
      <hr className="next-episode-rule" />
      <Link href={href} className="next-episode-link">
        <span className="next-label-text">Next</span>
        <span className="next-arrow-char">→</span>
        <span className="next-ep-num-text">EP {episode.slug}</span>
        <span className="next-ep-dot">·</span>
        <span className="next-ep-title-text">{title}</span>
      </Link>
    </div>
  );
}
