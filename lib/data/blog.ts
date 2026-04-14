export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: 'ce-certification-europe',
    title: 'CE Certification for Europe: What Manufacturers Need First',
    excerpt: 'A practical overview of directive mapping, testing sequence, and documentation priorities.',
    content: [
      'Start by identifying applicable directives and harmonized standards based on your product category.',
      'Build a test sequence that reduces rework risk and aligns technical documents from day one.',
      'Prepare declaration and technical file evidence before final conformity steps.'
    ]
  },
  {
    slug: 'atex-certification-basics',
    title: 'ATEX Certification Basics for Hazardous Areas',
    excerpt: 'How to plan Ex protection strategy and avoid delays during conformity review.',
    content: [
      'Define equipment group, category, and intended hazardous zone as your first step.',
      'Run pre-assessment on design and materials before laboratory scheduling.',
      'Keep traceable evidence for technical documentation and quality controls.'
    ]
  }
];
