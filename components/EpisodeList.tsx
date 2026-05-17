'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Episode } from '@/content/episodes';

interface Props {
  episodes: Episode[];
  activeSlug: string;
  lang: 'ko' | 'en';
}

export default function EpisodeList({ episodes, activeSlug, lang }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefix = lang === 'en' ? '/en/ep' : '/ep';

  return (
    <>
      <aside className={`episode-list-sidebar ${mobileOpen ? 'mobile-open' : ''}`}>
        <span className="episode-list-label">Episodes</span>
        <ul className="episode-list-items">
          {episodes.map((ep) => {
            const title = lang === 'en' ? ep.title.en : ep.title.ko;
            const isActive = ep.slug === activeSlug;

            if (!ep.published) {
              return (
                <li key={ep.slug}>
                  <div className="episode-item unpublished">
                    <span className="ep-num">EP {ep.slug}</span>
                    <span className="ep-title-small">{title}</span>
                  </div>
                </li>
              );
            }

            return (
              <li key={ep.slug}>
                <Link
                  href={`${prefix}/${ep.slug}`}
                  className={`episode-item ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="ep-num">EP {ep.slug}</span>
                  <span className="ep-title-small">{title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>

      <button
        className="mobile-drawer-toggle"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Toggle episode list"
      >
        {mobileOpen ? 'Close' : 'Episodes'}
      </button>
    </>
  );
}
