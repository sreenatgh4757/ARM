import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Activity, Cpu, Code, PenTool, Users, BarChart, Cloud, GitBranch, LineChart } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, color, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={`bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-${color}/20 h-full`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className={`h-12 w-12 rounded-lg bg-${color}/20 flex items-center justify-center mb-4`}>
        <div className={`text-${color}`}>{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const ServiceCategory: React.FC<{
  title: string;
  description: string;
  services: { name: string; description: string; icon: React.ReactNode }[];
  imageUrl: string;
  color: string;
  alignRight?: boolean;
}> = ({ title, description, services, imageUrl, color, alignRight = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-16 relative">
      <div className={`container-custom mx-auto ${alignRight ? 'flex flex-col md:flex-row-reverse' : 'flex flex-col md:flex-row'}`}>
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center items-center"
          ref={ref}
          initial={{ opacity: 0, x: alignRight ? 20 : -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: alignRight ? 20 : -20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full h-[400px]">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover rounded-2xl" 
            />
          </div>
        </motion.div>
        
        <div className="w-full md:w-1/2 px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className={`text-${color}`}>{title}</span>
            </h2>
            <p className="text-gray-300 mb-8">{description}</p>
            
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className={`mt-1 text-${color}`}>{service.icon}</div>
                  <div>
                    <h4 className="font-medium">{service.name}</h4>
                    <p className="text-sm text-gray-400">{service.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-[-1]"></div>
      
      <div className="container-custom mx-auto">
        <motion.div
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient">Services</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We provide comprehensive technology solutions tailored to your business needs. Our team of experts will help you navigate the digital landscape with confidence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="Software Development"
            description="Custom software solutions designed to meet your specific business requirements."
            icon={<Code size={24} />}
            color="primary"
            delay={0.1}
          />
          
          <ServiceCard
            title="UI/UX Design"
            description="User-centered design solutions that enhance user experience and engagement."
            icon={<PenTool size={24} />}
            color="secondary"
            delay={0.2}
          />
          
          <ServiceCard
            title="DevOps & Cloud"
            description="Streamline your development operations with our DevOps and cloud services."
            icon={<Cloud size={24} />}
            color="accent"
            delay={0.3}
          />
        </div>
      </div>
      
      <ServiceCategory
        title="Software Development"
        description="Our team of expert developers creates custom software solutions that address your unique business challenges. We follow industry best practices to deliver high-quality, scalable, and maintainable software."
        services={[
          { 
            name: "Custom Design & Development", 
            icon: <Code size={18} />,
            description: "Tailored solutions to meet your specific business needs."
          },
          { 
            name: "Responsive & SEO-friendly", 
            icon: <Activity size={18} />,
            description: "Optimized for all devices and search engines."
          },
          { 
            name: "API Integration", 
            icon: <Cpu size={18} />,
            description: "Seamless connection with third-party services and systems."
          },
          { 
            name: "Ongoing Support", 
            icon: <Users size={18} />,
            description: "Continuous assistance and maintenance to ensure optimal performance."
          }
        ]}
        imageUrl="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        color="primary"
      />
      
      <ServiceCategory
        title="UI/UX Design"
        description="We design intuitive user interfaces and seamless user experiences that delight your customers and drive engagement. Our design process is focused on creating solutions that are both beautiful and functional."
        services={[
          { 
            name: "Wire Framing & Prototyping", 
            icon: <PenTool size={18} />,
            description: "Visual representations of your product before development."
          },
          { 
            name: "User Research & Testing", 
            icon: <Users size={18} />,
            description: "Understanding your users to create better experiences."
          },
          { 
            name: "Final Design Handoff", 
            icon: <BarChart size={18} />,
            description: "Comprehensive design deliverables for development."
          }
        ]}
        imageUrl="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        color="secondary"
        alignRight={true}
      />
      
      <ServiceCategory
        title="DevOps & Cloud"
        description="Our DevOps and cloud services help you streamline your development operations, improve efficiency, and reduce time-to-market. We leverage the latest technologies to optimize your infrastructure."
        services={[
          { 
            name: "CI/CD Pipeline Setup", 
            icon: <GitBranch size={18} />,
            description: "Automated workflows for consistent and reliable deployments."
          },
          { 
            name: "Cloud Deployment & Management", 
            icon: <Cloud size={18} />,
            description: "Efficient cloud infrastructure setup and ongoing management."
          },
          { 
            name: "Monitoring & Optimization", 
            icon: <LineChart size={18} />,
            description: "Continuous tracking of performance and resource utilization."
          }
        ]}
        imageUrl="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        color="accent"
      />
    </section>
  );
};

export default Services;