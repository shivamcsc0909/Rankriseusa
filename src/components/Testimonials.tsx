import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      company: 'SaaS Startup',
      content: 'Rankrise completely transformed our growth trajectory. Their SEO and content strategy took us from 500 to 15K monthly visitors in just 4 months. The ROI was instant!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=1',
      metric: '300% Traffic Growth',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, GrowthCo',
      company: 'E-commerce',
      content: 'The AI automation they built for us is mind-blowing. We automated 70% of our customer support and cut response time from hours to seconds. Game changer!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=2',
      metric: '70% Time Saved',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Head, StyleHub',
      company: 'Fashion Brand',
      content: 'They don\'t just build websites, they craft experiences. Our conversion rate doubled after the redesign. The attention to detail and modern design approach is unmatched.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=3',
      metric: '2x Conversions',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'David Park',
      role: 'Co-founder, FitTech',
      company: 'Health Tech',
      content: 'From branding to launch, they handled everything flawlessly. Our social media engagement went from zero to 50K followers in 3 months. Worth every penny!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=4',
      metric: '50K Followers',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const navigate = (dir: 'prev' | 'next') => {
    setDirection(dir === 'next' ? 1 : -1);
    setCurrent((prev) => {
      if (dir === 'prev') return prev === 0 ? testimonials.length - 1 : prev - 1;
      return (prev + 1) % testimonials.length;
    });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className="py-8 sm:py-12 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50/20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6"
          >
            <Star className="w-4 h-4 text-purple-600 fill-purple-600" />
            <span className="text-sm font-semibold text-purple-800">Client Stories</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Loved by <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Founders</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Real results from real businesses. See how we've helped startups scale and thrive.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto relative">
          <div className="relative min-h-[450px] sm:min-h-[400px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-200/50 overflow-hidden">
                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl ${testimonials[current].color} opacity-5`}
                    animate={{
                      opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-purple-200 mb-6" />
                  </motion.div>

                  {/* Testimonial Content */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl sm:text-2xl text-gray-800 mb-8 leading-relaxed font-medium relative z-10"
                  >
                    "{testimonials[current].content}"
                  </motion.p>

                  {/* Author Info & Metrics */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
                    {/* Author */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-4"
                    >
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <img
                          src={testimonials[current].image}
                          alt={testimonials[current].name}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-4 border-white shadow-lg"
                        />
                        <motion.div
                          className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center shadow-lg`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Star className="w-4 h-4 text-white fill-white" />
                        </motion.div>
                      </motion.div>
                      
                      <div>
                        <h4 className="font-bold text-lg sm:text-xl text-gray-900">
                          {testimonials[current].name}
                        </h4>
                        <p className="text-sm text-gray-600">{testimonials[current].role}</p>
                        <p className="text-xs text-purple-600 font-semibold">{testimonials[current].company}</p>
                      </div>
                    </motion.div>

                    {/* Metric Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, type: 'spring' }}
                      whileHover={{ scale: 1.05 }}
                      className={`flex items-center gap-3 bg-gradient-to-r ${testimonials[current].color} text-white px-5 py-3 rounded-2xl shadow-lg`}
                    >
                      {(() => {
                        const IconComponent = testimonials[current].icon;
                        return <IconComponent className="w-5 h-5" />;
                      })()}
                      <span className="font-bold text-sm sm:text-base whitespace-nowrap">
                        {testimonials[current].metric}
                      </span>
                    </motion.div>
                  </div>

                  {/* Star Rating */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-1 mt-6 relative z-10"
                  >
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${testimonials[current].color} opacity-10 rounded-bl-full`} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigate('prev')}
                className="w-12 h-12 rounded-full border-2 hover:border-purple-500 hover:text-purple-600 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-2 rounded-full transition-all ${
                    index === current
                      ? 'w-8 bg-gradient-to-r from-purple-600 to-pink-600'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigate('next')}
                className="w-12 h-12 rounded-full border-2 hover:border-purple-500 hover:text-purple-600 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          {/* Progress Bar */}
          <motion.div
            className="w-full h-1 bg-gray-200 rounded-full mt-6 overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 6, ease: 'linear', repeat: Infinity }}
              key={current}
            />
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold">4.9/5 Average Rating</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full hidden sm:block" />
            <span className="font-semibold">200+ Happy Clients</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full hidden sm:block" />
            <span className="font-semibold">500+ Projects Delivered</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}