import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const headlines = [
  "Elevate Your Business with Cutting Edge Software Solutions",
  "Transform Tomorrow with AI-Powered Innovation",
  "Architect the Future of Digital Excellence",
  "Unleash Enterprise Potential Through Smart Technology",
  "Pioneer Next-Gen Solutions with Advanced AI",
  "Revolutionize Business with Intelligent Systems",
  "Accelerate Growth with Future-Ready Solutions",
  "Drive Innovation with Enterprise-Grade Technology",
  "Shape Tomorrow's Digital Landscape Today",
  "Empower Success Through Technical Excellence"
];

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Fullscreen Spline Background */}
      <div className="absolute inset-0 w-full h-full">
        <spline-viewer url="https://prod.spline.design/qSJQNnUNNRkHiaJA/scene.splinecode"></spline-viewer>
      </div>
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
      
      {/* Centered Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container-custom mx-auto px-4">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight min-h-[180px]">
              <TypeAnimation
                sequence={headlines.flatMap(headline => [headline, 4000])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gradient"
              />
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium bg-primary hover:bg-primary-dark text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/20"
              >
                Get Started
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;