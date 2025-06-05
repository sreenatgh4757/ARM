import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AnimatedLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <Link to="/" className={`block ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col"
      >
        <span className="text-2xl font-bold leading-tight animate-logo-text">A.R.M</span>
        <span className="text-sm animate-logo-subtext">Technologies Ltd</span>
      </motion.div>
    </Link>
  );
};

export default AnimatedLogo;