import { type Blog } from '../../lib/db/schema';
import { useUser } from '@clerk/clerk-react';

interface BlogCardProps {
  blog: Blog;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function BlogCard({ blog, onEdit, onDelete }: BlogCardProps) {
  const { user } = useUser();
  const isAuthor = user?.id === blog.authorId;

  return (
    <div className="bg-dark-200 rounded-lg p-6 hover:shadow-lg transition-all border border-gray-800 hover:border-accent-primary">
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-primary transition-colors">
        {blog.title}
      </h3>
      <p className="text-gray-400 mb-4 line-clamp-3">
        {blog.content}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {new Date(blog.createdAt).toLocaleDateString()}
        </span>
        {isAuthor && (
          <div className="space-x-2">
            <button
              onClick={onEdit}
              className="text-accent-primary hover:text-accent-secondary transition-colors px-3 py-1 rounded-md hover:bg-accent-primary/10"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="text-red-500 hover:text-red-400 transition-colors px-3 py-1 rounded-md hover:bg-red-500/10"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
