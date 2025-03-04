import React from 'react';
import { LogIn, Mail, Lock, X } from 'lucide-react';

interface SignInProps {
  onClose: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-dark-200 w-full max-w-md rounded-2xl border border-accent-primary shadow-[0_0_30px_rgba(124,58,237,0.5)] p-8 relative animate-fadeIn">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors p-2 hover:bg-dark-100 rounded-lg"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-accent-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <LogIn size={32} className="text-accent-primary animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2 relative inline-block">
            Sign In
            <span className="absolute -inset-1 rounded-lg blur-lg bg-accent-primary/30"></span>
          </h2>
          <p className="text-gray-400">Welcome back! Please sign in to continue.</p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center">
              <Mail size={16} className="mr-2 text-accent-primary" />
              Email Address
            </label>
            <input 
              type="email" 
              className="w-full px-4 py-3 bg-dark-100 border border-gray-800 rounded-lg focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary text-white transition-all"
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center">
              <Lock size={16} className="mr-2 text-accent-primary" />
              Password
            </label>
            <input 
              type="password" 
              className="w-full px-4 py-3 bg-dark-100 border border-gray-800 rounded-lg focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary text-white transition-all"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-600 text-accent-primary focus:ring-accent-primary focus:ring-offset-0 bg-dark-100" />
              <span className="ml-2 text-sm text-gray-400">Remember me</span>
            </label>
            <button className="text-sm text-accent-primary hover:text-accent-secondary transition-colors">
              Forgot password?
            </button>
          </div>

          <button 
            type="submit" 
            className="w-full bg-accent-primary hover:bg-opacity-90 text-white py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] relative group"
          >
            <span className="absolute inset-0 rounded-lg blur-lg bg-accent-primary/50 group-hover:bg-accent-primary/70 transition-all"></span>
            <span className="relative">Sign In</span>
          </button>

          <div className="text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <button className="text-accent-primary hover:text-accent-secondary transition-colors">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
