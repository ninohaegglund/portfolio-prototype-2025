import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: 'Building Scalable Microservices with ASP.NET Core',
    excerpt: 'Learn how to design and implement production-ready microservices using ASP.NET Core, including patterns for resilience and observability.',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    category: 'Architecture',
    slug: '#',
  },
  {
    title: 'Kubernetes Best Practices for .NET Applications',
    excerpt: 'A comprehensive guide to deploying and managing .NET applications on Kubernetes with focus on performance and reliability.',
    date: 'Jan 8, 2024',
    readTime: '12 min read',
    category: 'DevOps',
    slug: '#',
  },
  {
    title: 'Event-Driven Architecture with Azure Service Bus',
    excerpt: 'Implementing event-driven systems using Azure Service Bus for decoupled, scalable applications.',
    date: 'Dec 28, 2023',
    readTime: '10 min read',
    category: 'Cloud',
    slug: '#',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Thoughts on .NET development, cloud architecture, and software engineering.
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0">
            View All Posts
            <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <a
              key={post.title}
              href={post.slug}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder */}
              <div className="h-40 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs bg-background/80 text-foreground backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
