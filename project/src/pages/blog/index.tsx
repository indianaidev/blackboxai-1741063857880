import { BlogList } from '../../components/Blog/BlogList';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Blog Posts</h1>
        <p className="text-gray-400">
          Read our latest articles and stay up to date with the newest tech trends
        </p>
      </div>

      <BlogList />
    </div>
  );
}
