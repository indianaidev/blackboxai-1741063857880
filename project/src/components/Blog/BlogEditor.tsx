import { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { createBlog, updateBlog } from '../../lib/db';
import { type Blog } from '../../lib/db/schema';

interface BlogEditorProps {
  blog?: Blog;
  isEdit?: boolean;
}

export function BlogEditor({ blog, isEdit = false }: BlogEditorProps) {
  const { user } = useUser();
  const [title, setTitle] = useState(blog?.title || '');
  const [content, setContent] = useState(blog?.content || '');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!user || user.publicMetadata.role !== 'admin') {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 text-lg">You don't have permission to access this page.</p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !user) return;

    setIsSubmitting(true);
    try {
      if (isEdit && blog) {
        await updateBlog(blog.id, { title, content });
      } else {
        await createBlog({ title, content, authorId: user.id });
      }
      window.location.href = '/blog';
    } catch (error) {
      console.error('Failed to save blog:', error);
      alert('Failed to save blog. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 bg-dark-100 border border-gray-800 rounded-lg focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary text-white transition-all"
          placeholder="Enter blog title"
          required
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-2">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={12}
          className="w-full px-4 py-3 bg-dark-100 border border-gray-800 rounded-lg focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary text-white transition-all resize-none"
          placeholder="Write your blog content here..."
          required
        />
      </div>

      <div className="flex justify-end space-x-4">
        <a
          href="/blog"
          className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Cancel
        </a>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-accent-primary hover:bg-opacity-90 text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? 'Saving...' : isEdit ? 'Update Blog' : 'Create Blog'}
        </button>
      </div>
    </form>
  );
}
