import { motion } from 'framer-motion';
import { Users, Award, Target, Zap, Rocket, TrendingUp, Heart, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function About() {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0, satisfaction: 0 });

  useEffect(() => {
    const targets = { projects: 500, clients: 200, years: 5, satisfaction: 98 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts(prev => ({
        projects: Math.min(prev.projects + Math.ceil(targets.projects / steps), targets.projects),
        clients: Math.min(prev.clients + Math.ceil(targets.clients / steps), targets.clients),
        years: Math.min(prev.years + Math.ceil(targets.years / steps), targets.years),
        satisfaction: Math.min(prev.satisfaction + Math.ceil(targets.satisfaction / steps), targets.satisfaction),
      }));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { 
      label: 'Projects Delivered', 
      value: counts.projects, 
      suffix: '+', 
      icon: Target, 
      color: 'from-blue-500 to-cyan-500',
      description: 'Successfully launched'
    },
    { 
      label: 'Happy Clients', 
      value: counts.clients, 
      suffix: '+', 
      icon: Users, 
      color: 'from-purple-500 to-pink-500',
      description: 'Growing with us'
    },
    { 
      label: 'Years Experience', 
      value: counts.years, 
      suffix: '+', 
      icon: Award, 
      color: 'from-green-500 to-emerald-500',
      description: 'Industry expertise'
    },
    { 
      label: 'Client Satisfaction', 
      value: counts.satisfaction, 
      suffix: '%', 
      icon: Zap, 
      color: 'from-orange-500 to-red-500',
      description: 'Average rating'
    },
  ];

  const values = [
    { 
      title: 'Innovation First', 
      description: 'We don\'t follow trends, we create them. Leveraging cutting-edge tech to solve real problems.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Results Driven', 
      description: 'Every strategy, every campaign is backed by data and focused on delivering measurable ROI.',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      title: 'Client Success', 
      description: 'Your growth is our mission. We succeed only when you succeed. That\'s our promise.',
      icon: Heart,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      title: 'Trust & Quality', 
      description: 'Transparent communication, premium execution, and unwavering commitment to excellence.',
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 relative overflow-hidden bg-gradient-to-br from-white via-purple-50/20 to-blue-50/30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full"
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-5 py-2 rounded-full mb-6 border border-purple-200"
          >
            <Users className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-bold text-purple-800">Who We Are</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"
          >
            We're <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Rankrise</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            A team of digital mavericks helping <span className="font-semibold text-purple-600">ambitious startups</span> and <span className="font-semibold text-blue-600">growing businesses</span> dominate their markets through smart marketing, powerful tech, and AI-driven strategies.
          </motion.p>
        </motion.div>

        {/* Stats Counter - Compact Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-200/50 overflow-hidden h-full">
                {/* Gradient Overlay on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10`}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100`}
                  style={{
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                
                {/* Icon with Rotation Animation */}
                <motion.div
                  className="relative z-10 mb-4 flex justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                </motion.div>
                
                {/* Counter */}
                <div className="relative z-10 text-center">
                  <motion.div 
                    className={`text-4xl sm:text-5xl font-black mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    animate={{ 
                      scale: counts[Object.keys(counts)[index] as keyof typeof counts] === 0 ? 1 : [1, 1.1, 1]
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.value}{stat.suffix}
                  </motion.div>
                  <div className="font-bold text-gray-900 text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Values Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            What Makes Us <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Different</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg"
          >
            The core principles that drive our mission and shape every project we touch
          </motion.p>
        </motion.div>

        {/* Core Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-7 text-center hover:shadow-2xl transition-all border border-gray-200/50 h-full overflow-hidden">
                {/* Background Gradient on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10`}
                  transition={{ duration: 0.4 }}
                />

                {/* Animated Icon */}
                <motion.div
                  className="relative z-10 mb-5 flex justify-center"
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-purple-900 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl text-base font-semibold shadow-xl transition-all"
            >
              <Rocket className="w-5 h-5" />
              Let's Build Something Amazing
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}