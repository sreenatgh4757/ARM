import React from 'react';
import { Clock, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedLogo from './AnimatedLogo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card/80 backdrop-blur-sm pt-16 pb-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <AnimatedLogo className="mb-4" />
            
            <p className="text-gray-400 mb-6">
              We provide cutting-edge software solutions to help businesses transform their digital presence and operations.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-gray-300 text-sm">Est. 2023</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Software Development',
                'UI/UX Design',
                'DevOps & Cloud',
                'Mobile App Development',
                'Web Applications',
                'E-commerce Solutions'
              ].map((service, index) => (
                <li key={index}>
                  <Link to="/#services" className="text-gray-400 hover:text-primary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/#services' },
                { name: 'About', href: '/#about' },
                { name: 'Contact', href: '/contact' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' }
              ].map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-400">
                  Regus, Oxford Point,<br/>
                  Bournemouth, England,<br/>
                  BH10 4DZ
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@armtechnologies.ltd" className="text-gray-400 hover:text-primary transition-colors">
                  info@armtechnologies.ltd
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+447823857523" className="text-gray-400 hover:text-primary transition-colors">
                  +44 7823857523
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} A.R.M Technologies Limited. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;