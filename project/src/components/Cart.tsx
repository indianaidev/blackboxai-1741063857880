import React from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end"
      onClick={handleBackdropClick}
    >
      <div className="w-96 bg-dark-200/95 h-screen border-l border-gray-800 shadow-2xl overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <ShoppingCart className="mr-2 text-accent-primary" />
              Your Cart
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-dark-100 rounded-lg"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="space-y-6">
            {/* Sample Cart Item */}
            <div className="bg-dark-100 rounded-lg p-4 border border-gray-800 hover:border-accent-primary transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg bg-dark-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                    alt="Product" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium group-hover:text-accent-primary transition-colors">Code Analyzer Pro</h3>
                  <p className="text-gray-400 text-sm">Advanced code analysis tool</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-white transition-colors p-1">
                        <Minus size={16} />
                      </button>
                      <span className="text-white">1</span>
                      <button className="text-gray-400 hover:text-white transition-colors p-1">
                        <Plus size={16} />
                      </button>
                    </div>
                    <span className="text-accent-primary font-medium">$149.99</span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500 transition-colors p-2">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="flex justify-between mb-4">
              <span className="text-gray-400">Subtotal</span>
              <span className="text-white font-medium">$149.99</span>
            </div>
            <button className="w-full bg-accent-primary hover:bg-opacity-90 text-white py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
