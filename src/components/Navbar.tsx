import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex flex-col">
            <span className="text-white font-bold text-2xl leading-tight bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">A.R.M</span>
            <span className="text-sm bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">Technologies Ltd.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
            <Link to="/#about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="btn-primary">Get Started</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <Link 
              to="/#services" 
              className="text-white px-4 py-2 hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/#about" 
              className="text-white px-4 py-2 hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="btn-primary mx-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;