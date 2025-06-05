import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AnimatedLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <Link to="/" className={`block relative ${className}`}>
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-4xl font-bold leading-none tracking-wider relative z-10 animate-gradient">
          <span className="block">A.R.M</span>
          <span className="text-lg font-medium block mt-1">Technologies Ltd</span>
        </div>
        <div className="absolute inset-0 animate-glow blur-sm z-0" />
      </motion.div>
    </Link>
  );
};

export default AnimatedLogo;