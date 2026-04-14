import Link from 'next/link';
import { posts } from '@/lib/data/blog';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata('Blog', 'Insights on certification, testing, and international market access.', '/blog');

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <section className="section">
      <h1 className="section-title">Blog</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/${locale}/blog/${post.slug}`} className="rounded-2xl border border-brand-dark/10 p-6 hover:bg-brand-mist">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-3 text-sm text-brand-dark/70">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
