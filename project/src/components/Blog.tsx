import React from 'react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Software Development",
      excerpt: "Explore how artificial intelligence is revolutionizing the way we write and maintain code.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "John Smith",
      date: "Feb 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Best Practices for Modern Web Development",
      excerpt: "Learn the latest techniques and tools for building fast, scalable web applications.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Sarah Johnson",
      date: "Feb 12, 2024",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Securing Your Applications in 2024",
      excerpt: "Essential security practices every developer should know to protect their applications.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Mike Wilson",
      date: "Feb 10, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="py-20 bg-dark-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-accent-primary bg-opacity-20 text-accent-primary font-medium text-sm mb-4">
            Latest Updates
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white relative inline-block">
            From Our Blog
            <span className="absolute -inset-1 rounded-lg blur-lg bg-accent-primary/30"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay up to date with the latest trends, tips, and insights in software development.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-dark-200 rounded-xl overflow-hidden border border-gray-800 hover:border-accent-primary transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-accent-primary/20 group-hover:bg-accent-primary/30 transition-colors z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <BookOpen size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {post.excerpt}
                </p>

                <button className="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors group/btn">
                  Read More 
                  <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-accent-primary hover:bg-opacity-90 text-white rounded-lg font-medium transition-all transform hover:scale-[1.02] relative group">
            <span className="absolute inset-0 rounded-lg blur-lg bg-accent-primary/50 group-hover:bg-accent-primary/70 transition-all"></span>
            <span className="relative flex items-center">
              View All Posts
              <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
