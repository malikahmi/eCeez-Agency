export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  role: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  featured?: boolean;
  content?: string; // Markdown content
  seo?: {
    title: string;
    description: string;
    keywords: string[];
    faqSchema?: {
      question: string;
      answer: string;
    }[];
  };
}
