import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const team = [
    {
      name: 'Sam Smith',
      role: 'Business Development Manager',
      email: 'sam.smith@rankriseusa.com',
      phone: '+1 (555) 123-4567',
      gradient: 'from-orange-400 to-pink-500',
      social: { linkedin: '#', twitter: '#', email: 'sam.smith@rankriseusa.com' }
    },
    {
      name: 'Sid Miller',
      role: 'Senior Developer',
      email: 'sid.miller@rankriseusa.com',
      phone: '+1 (555) 123-4568',
      gradient: 'from-blue-400 to-purple-500',
      social: { linkedin: '#', twitter: '#', email: 'sid.miller@rankriseusa.com' }
    },
    {
      name: 'Sarah Wilson',
      role: 'Marketing Head',
      email: 'sarah.wilson@rankriseusa.com',
      phone: '+1 (555) 123-4569',
      gradient: 'from-green-400 to-teal-500',
      social: { linkedin: '#', twitter: '#', email: 'sarah.wilson@rankriseusa.com' }
    },
    {
      name: 'Michael Brown',
      role: 'Sales Director',
      email: 'michael.brown@rankriseusa.com',
      phone: '+1 (555) 123-4570',
      gradient: 'from-pink-400 to-rose-500',
      social: { linkedin: '#', twitter: '#', email: 'michael.brown@rankriseusa.com' }
    },
    {
      name: 'Jessica Davis',
      role: 'Project Manager',
      email: 'jessica.davis@rankriseusa.com',
      phone: '+1 (555) 123-4571',
      gradient: 'from-cyan-400 to-blue-500',
      social: { linkedin: '#', twitter: '#', email: 'jessica.davis@rankriseusa.com' }
    },
    {
      name: 'David Johnson',
      role: 'Business Development Executive',
      email: 'david.johnson@rankriseusa.com',
      phone: '+1 (555) 123-4572',
      gradient: 'from-violet-400 to-purple-500',
      social: { linkedin: '#', twitter: '#', email: 'david.johnson@rankriseusa.com' }
    },
  ];

  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 4;
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 4;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const maxIndex = Math.max(0, team.length - itemsPerView);
  const slidePercentage = 100 / itemsPerView;

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 md:w-72 md:h-72 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-3 md:mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-xs md:text-sm font-semibold border border-primary/20 backdrop-blur-sm">
              ✨ Our Team
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
            Meet Our Experts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
            Our dedicated team of professionals is committed to delivering exceptional service and driving your business growth.
          </p>
        </motion.div>

        {/* Team Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6 lg:gap-8 px-2"
              animate={{ x: `-${currentIndex * slidePercentage}%` }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div 
                    className="relative group cursor-pointer h-full"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Visiting Card */}
                    <div className="relative bg-card rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 backdrop-blur-sm h-full min-h-[320px] flex flex-col">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                      
                      {/* Card Content */}
                      <div className="relative p-6 md:p-8 flex flex-col h-full">
                        {/* Logo Section */}
                        <div className="flex justify-center mb-6">
                          <div className="relative w-32 h-12">
                            <img 
                              src="/assets/images/logo.png" 
                              alt="RankRise Logo" 
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>

                        {/* Member Info */}
                        <div className="text-center space-y-4 flex-grow">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 mb-2">
                              {member.name}
                            </h3>
                            <p className="text-sm md:text-base text-muted-foreground font-semibold bg-gradient-to-r from-primary/20 to-purple-500/20 py-1 px-3 rounded-full inline-block">
                              {member.role}
                            </p>
                          </div>

                          {/* Contact Information */}
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center justify-center gap-2 text-muted-foreground">
                              <Mail className="w-4 h-4" />
                              <span className="break-all">{member.email}</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-muted-foreground">
                              <Phone className="w-4 h-4" />
                              <span>{member.phone}</span>
                            </div>
                          </div>
                        </div>

                        {/* Social Icons */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ 
                            opacity: hoveredIndex === index ? 1 : 0,
                            y: hoveredIndex === index ? 0 : 10
                          }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="flex justify-center gap-3 pt-4 mt-4 border-t border-border/50"
                        >
                          <motion.a 
                            href={member.social.linkedin}
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br ${member.gradient} hover:shadow-lg flex items-center justify-center transition-all duration-300 group/icon`}
                          >
                            <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                          </motion.a>
                          <motion.a 
                            href={member.social.twitter}
                            whileHover={{ scale: 1.15, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br ${member.gradient} hover:shadow-lg flex items-center justify-center transition-all duration-300 group/icon`}
                          >
                            <Twitter className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                          </motion.a>
                          <motion.a 
                            href={`mailto:${member.social.email}`}
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br ${member.gradient} hover:shadow-lg flex items-center justify-center transition-all duration-300 group/icon`}
                          >
                            <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                          </motion.a>
                        </motion.div>
                      </div>

                      {/* Bottom Accent Line with Animation */}
                      <div className="relative h-1 overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${member.gradient}`}
                          initial={{ x: "-100%" }}
                          animate={{ x: hoveredIndex === index ? "0%" : "-100%" }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Navigation Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-center gap-4 md:gap-6 mt-10 md:mt-16"
        >
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 hover:bg-primary hover:text-white hover:border-primary hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 group shadow-md"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
          </Button>

          {/* Pagination Dots */}
          <div className="flex gap-1.5 md:gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 md:w-10 bg-gradient-to-r from-primary to-purple-500'
                    : 'w-1.5 md:w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`} />
              </motion.button>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 hover:bg-primary hover:text-white hover:border-primary hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 group shadow-md"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
          </Button>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-8 md:mt-12"
        >
          <Button 
            className="px-6 md:px-8 py-4 md:py-6 rounded-full bg-gradient-to-r from-primary to-purple-500 hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm md:text-base font-semibold"
          >
            View All Team Members
          </Button>
        </motion.div>
      </div>
    </section>
  );
}