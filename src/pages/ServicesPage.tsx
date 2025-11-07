import { motion } from 'framer-motion';
import { Search, Share2, Code, Brain, Megaphone, BarChart3, CheckCircle, ArrowRight, Rocket, Target, Zap, Users, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Dominate search rankings with our proven SEO strategies that drive organic traffic and qualified leads to your business.',
      features: ['Advanced Keyword Research', 'On-Page Optimization', 'Strategic Link Building', 'Technical SEO Audit'],
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10',
    },
    {
      icon: Share2,
      title: 'Social Media Growth',
      description: 'Build an engaged community and skyrocket your brand presence across all major social platforms.',
      features: ['Content Strategy Planning', 'Daily Community Engagement', 'Targeted Paid Campaigns', 'Performance Analytics'],
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Get a blazing-fast, conversion-optimized website that turns visitors into loyal customers.',
      features: ['Custom Website Design', 'Mobile-First Responsive', 'E-commerce Solutions', 'CMS Integration'],
      color: 'from-green-500 to-emerald-500',
      gradient: 'bg-gradient-to-br from-green-500/10 to-emerald-500/10',
    },
    {
      icon: Brain,
      title: 'AI Automation',
      description: 'Streamline operations and boost efficiency with cutting-edge AI-powered automation solutions.',
      features: ['AI Chatbot Integration', 'Predictive Analytics', 'Workflow Automation', 'Data Intelligence'],
      color: 'from-orange-500 to-red-500',
      gradient: 'bg-gradient-to-br from-orange-500/10 to-red-500/10',
    },
    {
      icon: Megaphone,
      title: 'Brand Strategy',
      description: 'Create a powerful brand identity that resonates with your audience and stands out in the market.',
      features: ['Brand Positioning', 'Visual Identity Design', 'Content Marketing', 'Brand Guidelines'],
      color: 'from-indigo-500 to-blue-500',
      gradient: 'bg-gradient-to-br from-indigo-500/10 to-blue-500/10',
    },
    {
      icon: BarChart3,
      title: 'Growth Analytics',
      description: 'Make data-driven decisions with comprehensive analytics that reveal growth opportunities.',
      features: ['Business Intelligence', 'Data Visualization', 'KPI Tracking', 'Custom Reporting'],
      color: 'from-yellow-500 to-orange-500',
      gradient: 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10',
    },
  ];

  const process = [
    { 
      step: '01', 
      title: 'Discovery & Audit', 
      description: 'In-depth analysis of your business goals, target audience, and current digital presence',
      icon: Target
    },
    { 
      step: '02', 
      title: 'Strategy Development', 
      description: 'Customized digital roadmap tailored to your specific business objectives',
      icon: Rocket
    },
    { 
      step: '03', 
      title: 'Execution & Implementation', 
      description: 'Seamless implementation of solutions with precision and technical excellence',
      icon: Zap
    },
    { 
      step: '04', 
      title: 'Optimization & Scaling', 
      description: 'Continuous monitoring, optimization, and scaling for sustained growth',
      icon: TrendingUp
    },
  ];

  const stats = [
    { number: '250+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5x', label: 'Average ROI' },
    { number: '24/7', label: 'Support' },
  ];

  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-medium">Premium Digital Services</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Digital Presence</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              End-to-end digital solutions that drive measurable growth and accelerate your business success
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Growth Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Premium Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to drive growth and maximize your online potential
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -15,
                  transition: { duration: 0.3 }
                }}
                className={`relative rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 ${service.gradient} backdrop-blur-sm`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <motion.li 
                        key={feature}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-sm font-medium"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="mt-6 flex items-center gap-2 text-primary font-semibold cursor-pointer"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Timeline */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Proven Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach that ensures exceptional results and seamless collaboration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 transform translate-y-8" />
            
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gradient mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white mb-6"
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Limited Time Offer</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to Dominate Your Market?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Get a comprehensive digital audit and discover exactly how we can accelerate your growth
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-2xl">
                  Get Your Free Strategy Session
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Our Work
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}