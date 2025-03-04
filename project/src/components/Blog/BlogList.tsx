import { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { BlogCard } from './BlogCard';
import { type Blog } from '../../lib/db/schema';
import { getBlogs, deleteBlog } from '../../lib/db';

export function BlogList() {
  const { user } = useUser();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadBlogs();
  }, []);

  async function loadBlogs() {
    try {
      const data = await getBlogs();
      setBlogs(data);
    } catch (error) {
      console.error('Failed to load blogs:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete(id: number) {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      await deleteBlog(id);
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (error) {
      console.error('Failed to delete blog:', error);
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {user?.publicMetadata?.role === 'admin' && (
        <div className="flex justify-end">
          <a
            href="/blog/new"
            className="bg-accent-primary hover:bg-opacity-90 text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-[1.02] inline-flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            New Blog
          </a>
        </div>
      )}

      {blogs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No blogs found</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onEdit={() => window.location.href = `/blog/${blog.id}/edit`}
              onDelete={() => handleDelete(blog.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
