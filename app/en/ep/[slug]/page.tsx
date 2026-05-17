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
    title: `${ep.title.en} — Pepper Build Log`,
    description: ep.summary.en,
    alternates: {
      canonical: `https://pepper.kimsheritage.com/en/ep/${slug}`,
      languages: {
        ko: `https://pepper.kimsheritage.com/ep/${slug}`,
        en: `https://pepper.kimsheritage.com/en/ep/${slug}`,
      },
    },
    openGraph: {
      type: 'article',
      title: `${ep.title.en} — Pepper`,
      description: ep.summary.en,
      url: `https://pepper.kimsheritage.com/en/ep/${slug}`,
      siteName: 'Pepper — A Build Log by Danny Kim',
    },
    twitter: {
      card: 'summary',
      title: `${ep.title.en} — Pepper`,
      description: ep.summary.en,
    },
  };
}

export default async function EpisodePageEn({ params }: Props) {
  const { slug } = await params;
  const episode = episodes.find((e) => e.slug === slug);

  if (!episode || !episode.published) {
    notFound();
  }

  let body = '';
  try {
    const bodyPath = path.join(process.cwd(), 'content/episodes', `${slug}.en.md`);
    body = fs.readFileSync(bodyPath, 'utf-8');
  } catch {
    // graceful fallback
  }

  const nextEpisode = episodes.find((e) => e.id > episode.id && e.published) ?? null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: episode.title.en,
    description: episode.summary.en,
    author: { '@type': 'Person', name: 'Danny Kim', url: 'https://kimsheritage.com' },
    publisher: { '@type': 'Organization', name: 'Kims Heritage Holdings' },
    datePublished: episode.date,
    inLanguage: 'en',
    url: `https://pepper.kimsheritage.com/en/ep/${slug}`,
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
        <EpisodeList episodes={episodes} activeSlug={slug} lang="en" />
        <EpisodeContent episode={episode} body={body} lang="en" nextEpisode={nextEpisode} />
      </div>
    </>
  );
}
