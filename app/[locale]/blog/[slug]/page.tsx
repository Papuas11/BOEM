import { notFound } from 'next/navigation';
import { posts } from '@/lib/data/blog';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <article className="section max-w-3xl">
      <h1 className="section-title">{post.title}</h1>
      <nav className="mt-8 rounded-2xl border border-brand-dark/10 p-5 text-sm">
        <p className="font-medium">Table of contents</p>
        <ol className="mt-2 list-decimal pl-5">
          <li>Overview</li>
          <li>Implementation guidance</li>
          <li>Recommended next steps</li>
        </ol>
      </nav>
      <div className="mt-10 space-y-5 text-brand-dark/80">
        {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </article>
  );
}
