import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogEditor } from '../../../components/Blog/BlogEditor';
import { getBlogById } from '../../../lib/db';
import { type Blog } from '../../../lib/db/schema';

export default function EditBlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadBlog() {
      if (!id) return;
      try {
        const data = await getBlogById(parseInt(id));
        setBlog(data);
      } catch (error) {
        console.error('Failed to load blog:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadBlog();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-primary"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 text-lg">Blog post not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Edit Blog Post</h1>
        <p className="text-gray-400">
          Update your blog post content
        </p>
      </div>

      <BlogEditor blog={blog} isEdit />
    </div>
  );
}
