import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, GitBranch, Bot, Cloud } from 'lucide-react';

const ArchitectureDiagrams: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const diagrams = [
    {
      title: "AI-Powered Automation Workflow",
      description: "End-to-end intelligent automation pipeline with machine learning integration and real-time decision making.",
      icon: <Bot size={24} />,
      placeholder: "AI Workflow Diagram"
    },
    {
      title: "DevOps CI/CD Pipeline",
      description: "Automated deployment pipeline with integrated testing, security scanning, and cloud deployment orchestration.",
      icon: <GitBranch size={24} />,
      placeholder: "DevOps Pipeline Diagram"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background/95 to-background">
      <div className="container-custom mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Automation Workflows</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Visualize how our intelligent systems integrate with your existing infrastructure 
            to deliver seamless automation solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {diagrams.map((diagram, index) => (
            <motion.div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-card/70 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Diagram Placeholder */}
              <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="text-center z-10">
                  <div className="text-primary mb-4">
                    {diagram.icon}
                  </div>
                  <div className="text-white font-medium">
                    {diagram.placeholder}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">
                    Visual representation
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-primary/30 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-secondary/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Cloud className="text-accent/20" size={48} />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {diagram.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {diagram.description}
                </p>
                
                <button className="text-primary hover:text-primary-dark font-medium flex items-center gap-2 transition-colors">
                  <Download size={16} />
                  Download PDF
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureDiagrams;