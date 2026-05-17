import type { Episode } from '@/content/episodes';
import MarkdownRenderer from './MarkdownRenderer';
import NextEpisodeButton from './NextEpisodeButton';

interface Props {
  episode: Episode;
  body: string;
  lang: 'ko' | 'en';
  nextEpisode: Episode | null;
}

export default function EpisodeContent({ episode, body, lang, nextEpisode }: Props) {
  const title = lang === 'en' ? episode.title.en : episode.title.ko;

  const formattedDate = episode.date
    ? (() => {
        const d = new Date(episode.date);
        return lang === 'en'
          ? d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
          : `${d.getFullYear()}년 ${d.getMonth() + 1}월`;
      })()
    : '';

  return (
    <div className="episode-content-panel">
      <article className="episode-content-inner">
        <header>
          <span className="episode-ep-num">EP {episode.slug}</span>
          <h1 className="episode-h1">{title}</h1>
          <hr className="episode-rule" />
          <div className="episode-meta">
            {formattedDate && <span>{formattedDate}</span>}
            {episode.readTime > 0 && (
              <>
                <span className="meta-dot">·</span>
                <span>{episode.readTime} min read</span>
              </>
            )}
            {episode.tags.length > 0 && (
              <>
                <span className="meta-dot">·</span>
                {episode.tags.map((tag) => (
                  <span key={tag} className="episode-tag">
                    #{tag}
                  </span>
                ))}
              </>
            )}
          </div>
        </header>

        <div>
          {body ? (
            <MarkdownRenderer content={body} />
          ) : (
            <p className="coming-soon-text">Coming soon.</p>
          )}
        </div>

        {nextEpisode && <NextEpisodeButton episode={nextEpisode} lang={lang} />}
      </article>
    </div>
  );
}
