import type { Metadata } from 'next';

export function makeMetadata(title: string, description: string, path: string): Metadata {
  const base = 'https://example.com';
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${base}${path}`,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}
