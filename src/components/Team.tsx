import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const team = [
    {
      name: 'John Smith',
      role: 'Company CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      gradient: 'from-orange-400 to-pink-500',
      social: { linkedin: '#', twitter: '#', email: 'john@example.com' }
    },
    {
      name: 'David Johnson',
      role: 'Co-Founder',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      gradient: 'from-blue-400 to-purple-500',
      social: { linkedin: '#', twitter: '#', email: 'david@example.com' }
    },
    {
      name: 'Mary Johnson',
      role: 'Property Manager',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
      gradient: 'from-green-400 to-teal-500',
      social: { linkedin: '#', twitter: '#', email: 'mary@example.com' }
    },
    {
      name: 'Patricia Davis',
      role: 'Estate Consultant',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      gradient: 'from-pink-400 to-rose-500',
      social: { linkedin: '#', twitter: '#', email: 'patricia@example.com' }
    },
    {
      name: 'Michael Brown',
      role: 'Sales Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      gradient: 'from-cyan-400 to-blue-500',
      social: { linkedin: '#', twitter: '#', email: 'michael@example.com' }
    },
    {
      name: 'Sarah Wilson',
      role: 'Marketing Head',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      gradient: 'from-violet-400 to-purple-500',
      social: { linkedin: '#', twitter: '#', email: 'sarah@example.com' }
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

  useState(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

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
              ✨ Our Experts
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
            Our dedicated team of experienced real estate professionals is at the heart of what we do, with a deep knowledge of the local market.
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
                    {/* Card */}
                    <div className="relative bg-card rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 backdrop-blur-sm h-full">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      
                      {/* Image Container */}
                      <div className="relative pt-6 md:pt-8 pb-3 md:pb-4 px-4 md:px-6">
                        <div className="relative w-full aspect-square mb-3 md:mb-4 max-w-[200px] sm:max-w-[240px] mx-auto">
                          {/* Animated Gradient Ring */}
                          <motion.div 
                            className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
                            animate={{ 
                              scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: hoveredIndex === index ? Infinity : 0,
                              ease: "easeInOut"
                            }}
                          />
                          
                          {/* Image */}
                          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-xl ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all duration-500">
                            <motion.img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                              whileHover={{ scale: 1.15, rotate: 3 }}
                              transition={{ duration: 0.5 }}
                            />
                            
                            {/* Overlay on Hover */}
                            <motion.div 
                              className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                            />
                          </div>

                          {/* Floating Badge */}
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ 
                              scale: hoveredIndex === index ? 1 : 0,
                              rotate: hoveredIndex === index ? 0 : -180
                            }}
                            transition={{ duration: 0.4, type: "spring" }}
                            className={`absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center shadow-lg`}
                          >
                            <span className="text-white text-sm md:text-base font-bold">★</span>
                          </motion.div>
                        </div>

                        {/* Member Info */}
                        <div className="text-center space-y-1 md:space-y-2 pb-3 md:pb-4">
                          <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {member.name}
                          </h3>
                          <p className="text-xs md:text-sm text-muted-foreground font-medium">
                            {member.role}
                          </p>
                        </div>

                        {/* Social Icons */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ 
                            opacity: hoveredIndex === index ? 1 : 0,
                            y: hoveredIndex === index ? 0 : 10
                          }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="flex justify-center gap-2 md:gap-3 pb-3 md:pb-4"
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
