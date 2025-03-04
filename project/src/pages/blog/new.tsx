import { BlogEditor } from '../../components/Blog/BlogEditor';

export default function NewBlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Create New Blog Post</h1>
        <p className="text-gray-400">
          Share your thoughts and insights with the community
        </p>
      </div>

      <BlogEditor />
    </div>
  );
}
