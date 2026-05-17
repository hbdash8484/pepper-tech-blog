import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import { episodes } from '@/content/episodes';
import EpisodeList from '@/components/EpisodeList';
import EpisodeContent from '@/components/EpisodeContent';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return episodes
    .filter((ep) => ep.published)
    .map((ep) => ({ slug: ep.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ep = episodes.find((e) => e.slug === slug);
  if (!ep) return {};

  return {
    title: `${ep.title.ko} — Pepper Build Log`,
    description: ep.summary.ko,
    alternates: {
      canonical: `https://pepper.kimsheritage.com/ep/${slug}`,
      languages: {
        ko: `https://pepper.kimsheritage.com/ep/${slug}`,
        en: `https://pepper.kimsheritage.com/en/ep/${slug}`,
      },
    },
    openGraph: {
      type: 'article',
      title: `${ep.title.ko} — Pepper`,
      description: ep.summary.ko,
      url: `https://pepper.kimsheritage.com/ep/${slug}`,
      siteName: 'Pepper — A Build Log by Danny Kim',
    },
    twitter: {
      card: 'summary',
      title: `${ep.title.ko} — Pepper`,
      description: ep.summary.ko,
    },
  };
}

export default async function EpisodePage({ params }: Props) {
  const { slug } = await params;
  const episode = episodes.find((e) => e.slug === slug);

  if (!episode || !episode.published) {
    notFound();
  }

  let body = '';
  try {
    const bodyPath = path.join(process.cwd(), 'content/episodes', `${slug}.ko.md`);
    body = fs.readFileSync(bodyPath, 'utf-8');
  } catch {
    // graceful fallback
  }

  const nextEpisode = episodes.find((e) => e.id > episode.id && e.published) ?? null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: episode.title.ko,
    description: episode.summary.ko,
    author: { '@type': 'Person', name: 'Danny Kim', url: 'https://kimsheritage.com' },
    publisher: { '@type': 'Organization', name: 'Kims Heritage Holdings' },
    datePublished: episode.date,
    inLanguage: 'ko',
    url: `https://pepper.kimsheritage.com/ep/${slug}`,
    isPartOf: {
      '@type': 'Blog',
      name: 'Pepper — A Build Log',
      url: 'https://pepper.kimsheritage.com',
    },
    position: episode.id,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="two-panel">
        <EpisodeList episodes={episodes} activeSlug={slug} lang="ko" />
        <EpisodeContent episode={episode} body={body} lang="ko" nextEpisode={nextEpisode} />
      </div>
    </>
  );
}
