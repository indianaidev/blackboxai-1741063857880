import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import BlogPage from './pages/blog';
import NewBlogPage from './pages/blog/new';
import EditBlogPage from './pages/blog/[id]/edit';

// Make sure to add VITE_CLERK_PUBLISHABLE_KEY in your .env file
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <div className="min-h-screen bg-dark-300 text-white">
          <nav className="bg-dark-200 border-b border-gray-800">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <a href="/" className="text-xl font-bold text-white flex items-center">
                  <span className="text-accent-primary">Blog</span>
                  <span className="ml-1">Platform</span>
                </a>
                <div className="flex items-center space-x-4">
                  <a
                    href="/blog"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Blogs
                  </a>
                </div>
              </div>
            </div>
          </nav>

          <main>
            <Routes>
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/new" element={<NewBlogPage />} />
              <Route path="/blog/:id/edit" element={<EditBlogPage />} />
            </Routes>
          </main>

          <footer className="bg-dark-200 border-t border-gray-800 py-8 mt-16">
            <div className="container mx-auto px-4">
              <p className="text-center text-gray-400">
                © {new Date().getFullYear()} Blog Platform. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;
