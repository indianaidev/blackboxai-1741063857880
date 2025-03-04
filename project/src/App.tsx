import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ChevronDown, 
  Star, 
  ShoppingCart, 
  ArrowRight, 
  Menu, 
  X,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronUp,
  Code,
  Database,
  BarChart,
  Zap,
  Shield,
  Users,
  Settings,
  Terminal,
  Cloud,
  Cpu
} from 'lucide-react';
import { products } from './data/products';
import { testimonials } from './data/testimonials';
import { faqs } from './data/faqs';
import { features } from './data/features';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  // Filter products based on search term and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-300 text-gray-200">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-dark-200 shadow-md backdrop-blur-sm bg-opacity-90">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white flex items-center">
              <Code className="mr-2 text-accent-primary" />
              <span>Pragyantra</span>
              <span className="text-accent-primary">.in</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="font-medium hover:text-accent-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('features')} className="font-medium hover:text-accent-primary transition-colors">Features</button>
            <button onClick={() => scrollToSection('products')} className="font-medium hover:text-accent-primary transition-colors">Products</button>
            <button onClick={() => scrollToSection('testimonials')} className="font-medium hover:text-accent-primary transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection('faq')} className="font-medium hover:text-accent-primary transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="font-medium hover:text-accent-primary transition-colors">Contact</button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-400 focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-200 border-t border-gray-800 py-2">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <button onClick={() => scrollToSection('hero')} className="py-2 font-medium hover:text-accent-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('features')} className="py-2 font-medium hover:text-accent-primary transition-colors">Features</button>
              <button onClick={() => scrollToSection('products')} className="py-2 font-medium hover:text-accent-primary transition-colors">Products</button>
              <button onClick={() => scrollToSection('testimonials')} className="py-2 font-medium hover:text-accent-primary transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('faq')} className="py-2 font-medium hover:text-accent-primary transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="py-2 font-medium hover:text-accent-primary transition-colors">Contact</button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative bg-gradient-to-r from-dark-200 to-dark-100 py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-200 to-transparent"></div>
          
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-block px-3 py-1 rounded-full bg-accent-primary bg-opacity-20 text-accent-primary font-medium text-sm mb-6">
                Next-Gen Developer Tools
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
                Supercharge Your <span className="text-accent-primary">Development Workflow</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Professional coding tools designed to boost productivity, streamline collaboration, and accelerate your development process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('products')}
                  className="bg-accent-primary hover:bg-opacity-90 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-glow flex items-center justify-center text-white"
                >
                  Explore Tools <ArrowRight size={18} className="ml-2" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-transparent border-2 border-gray-600 hover:border-accent-primary hover:text-accent-primary px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  Request Demo
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg blur opacity-75"></div>
                <img 
                  src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Developer Tools Dashboard" 
                  className="relative rounded-lg shadow-2xl max-w-full h-auto transform hover:scale-105 transition-transform duration-500 border border-gray-700"
                />
              </div>
            </div>
          </div>
          
          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
              <path fill="#11111B" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-dark-300">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-accent-primary bg-opacity-20 text-accent-primary font-medium text-sm mb-4">
                Powerful Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Designed for Modern Developers</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our suite of developer tools is built to handle the complexity of today's software development challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-dark-200 p-6 rounded-xl border border-gray-800 hover:border-accent-primary transition-all duration-300 hover:shadow-glow"
                >
                  <div className="w-12 h-12 bg-accent-primary bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-dark-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-accent-primary bg-opacity-20 text-accent-primary font-medium text-sm mb-4">
                Our Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Professional Developer Tools</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore our collection of high-quality tools designed to help developers build better software faster.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-dark-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary text-white"
                />
                <Search className="absolute left-3 top-3.5 text-gray-500" size={20} />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                <button 
                  onClick={() => setActiveCategory('all')}
                  className={`px-4 py-2 rounded-full ${activeCategory === 'all' ? 'bg-accent-primary text-white' : 'bg-dark-100 hover:bg-dark-300 text-gray-300'}`}
                >
                  All
                </button>
                <button 
                  onClick={() => setActiveCategory('ide')}
                  className={`px-4 py-2 rounded-full ${activeCategory === 'ide' ? 'bg-accent-primary text-white' : 'bg-dark-100 hover:bg-dark-300 text-gray-300'}`}
                >
                  IDE Tools
                </button>
                <button 
                  onClick={() => setActiveCategory('testing')}
                  className={`px-4 py-2 rounded-full ${activeCategory === 'testing' ? 'bg-accent-primary text-white' : 'bg-dark-100 hover:bg-dark-300 text-gray-300'}`}
                >
                  Testing
                </button>
                <button 
                  onClick={() => setActiveCategory('devops')}
                  className={`px-4 py-2 rounded-full ${activeCategory === 'devops' ? 'bg-accent-primary text-white' : 'bg-dark-100 hover:bg-dark-300 text-gray-300'}`}
                >
                  DevOps
                </button>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-dark-100 rounded-xl border border-gray-800 overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-accent-primary group"
                  >
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-dark-200 to-dark-300">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80"
                      />
                      {product.discount && (
                        <div className="absolute top-4 right-4 bg-accent-danger text-white text-sm font-bold px-3 py-1 rounded-full">
                          {product.discount}% OFF
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white">{product.name}</h3>
                        <div className="flex items-center">
                          <Star className="text-yellow-400 fill-current" size={16} />
                          <span className="ml-1 text-sm font-medium text-gray-300">{product.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 mb-4">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          {product.oldPrice ? (
                            <div className="flex items-center">
                              <span className="text-gray-500 line-through text-sm mr-2">${product.oldPrice}</span>
                              <span className="text-xl font-bold text-accent-primary">${product.price}</span>
                            </div>
                          ) : (
                            <span className="text-xl font-bold text-accent-primary">${product.price}</span>
                          )}
                        </div>
                        <button className="bg-accent-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
                          <ShoppingCart size={18} className="mr-2" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-dark-100 rounded-xl border border-gray-800">
                <p className="text-xl text-gray-400">No products found matching your criteria.</p>
                <button 
                  onClick={() => {setSearchTerm(''); setActiveCategory('all');}}
                  className="mt-4 text-accent-primary hover:text-accent-secondary font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-dark-300">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-accent-primary bg-opacity-20 text-accent-primary font-medium text-sm mb-4">
                Testimonials
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Developers Say</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what professionals who use our tools have to say.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="bg-dark-100 p-8 rounded-xl border border-gray-800 hover:border-accent-primary transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-accent-primary"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-700"} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-400 italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-dark-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-accent-primary bg-opacity-20 text-accent-primary font-medium text-sm mb-4">
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Find answers to common questions about our developer tools and services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="mb-4 border border-gray-800 rounded-lg overflow-hidden bg-dark-100"
                >
                  <button 
                    className="w-full px-6 py-4 text-left font-medium flex justify-between items-center focus:outline-none text-white"
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  >
                    <span>{faq.question}</span>
                    {activeAccordion === index ? 
                      <ChevronUp size={20} className="text-accent-primary" /> : 
                      <ChevronDown size={20} className="text-gray-500" />
                    }
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 py-4 bg-dark-200 border-t border-gray-800">
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-accent-primary to-accent-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
              <p className="mb-8 opacity-90">
                Subscribe to our newsletter to receive updates on new tools, features, and developer resources.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 justify-center">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white w-full sm:w-auto flex-grow max-w-md focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-white text-accent-primary hover:bg-opacity-90 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-sm opacity-80">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-dark-300">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-accent-primary bg-opacity-20 text-accent-primary font-medium text-sm mb-4">
                Contact Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get in Touch</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Have questions or need assistance? Our team is here to help you get the most out of our developer tools.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 bg-dark-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent text-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 bg-dark-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent text-white"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 bg-dark-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-3 bg-dark-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent text-white"
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-accent-primary hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div className="bg-dark-100 p-8 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-6 text-white">Connect With Us</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="text-accent-primary mr-4 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-white">Email Us</h4>
                      <p className="text-gray-400">support@devtoolspro.com</p>
                      <p className="text-gray-400">sales@devtoolspro.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-accent-primary mr-4 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-white">Call Us</h4>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                      <p className="text-gray-400">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-accent-primary mr-4 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-white">Visit Us</h4>
                      <p className="text-gray-400">123 Developer Avenue</p>
                      <p className="text-gray-400">San Francisco, CA 94107</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-white">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-500 hover:text-accent-primary transition-colors">
                        <Facebook size={20} />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-accent-primary transition-colors">
                        <Twitter size={20} />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-accent-primary transition-colors">
                        <Instagram size={20} />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-accent-primary transition-colors">
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark-100 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                <Code className="mr-2 text-accent-primary" />
                <span>DevTools</span>
                <span className="text-accent-primary">Pro</span>
              </h3>
              <p className="text-gray-500 mb-4">
                Empowering developers with professional-grade tools since 2020.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-accent-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-accent-primary transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-accent-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-accent-primary transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('hero')} className="text-gray-500 hover:text-accent-primary transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('features')} className="text-gray-500 hover:text-accent-primary transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('products')} className="text-gray-500 hover:text-accent-primary transition-colors">Products</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-500 hover:text-accent-primary transition-colors">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="text-gray-500 hover:text-accent-primary transition-colors">FAQ</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-500 hover:text-accent-primary transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-accent-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-500 hover:text-accent-primary transition-colors">API Reference</a></li>
                <li><a href="#" className="text-gray-500 hover:text-accent-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-500 hover:text-accent-primary transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-gray-500 hover:text-accent-primary transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-accent-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-accent-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-500 hover:text-accent-primary transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-accent-primary transition-colors">GDPR Compliance</a></li>
                <li><a href="#" className="text-gray-500 hover:text-accent-primary transition-colors">Licensing</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DevToolsPro. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-accent-primary text-sm transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-accent-primary text-sm transition-colors">Terms</a>
              <a href="#" className="text-gray-500 hover:text-accent-primary text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-accent-primary hover:bg-opacity-90 text-white p-3 rounded-full shadow-glow transition-colors z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;