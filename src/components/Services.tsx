import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Search, Share2, Code, Brain, Megaphone, BarChart3, ArrowRight, Sparkles, Zap, ShoppingCart } from 'lucide-react';
import { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Dominate search results and drive organic traffic. We help startups rank higher and get discovered by the right audience.',
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'rgba(59, 130, 246, 0.5)',
      bgGradient: 'from-blue-50 to-cyan-50',
      expertise: 95,
      details: 'Our SEO experts use cutting-edge strategies to boost your visibility. From technical audits to content optimization, we handle everything to get you on page one.',
      features: ['Keyword Strategy', 'Technical Audits', 'Backlink Building', 'Local SEO'],
      price: '$999',
    },
    {
      icon: Share2,
      title: 'Social Media Growth',
      description: 'Build a loyal community and turn followers into customers. Strategic content that actually converts.',
      color: 'from-purple-500 to-pink-500',
      glowColor: 'rgba(168, 85, 247, 0.5)',
      bgGradient: 'from-purple-50 to-pink-50',
      expertise: 90,
      details: 'We craft viral-worthy content and data-driven campaigns that resonate with your target audience across all major platforms.',
      features: ['Viral Content', 'Influencer Marketing', 'Ad Campaigns', 'Growth Hacking'],
      price: '$799',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Lightning-fast websites that convert visitors into paying customers. Modern, scalable, and pixel-perfect.',
      color: 'from-green-500 to-emerald-500',
      glowColor: 'rgba(34, 197, 94, 0.5)',
      bgGradient: 'from-green-50 to-emerald-50',
      expertise: 98,
      details: 'From landing pages to complex web apps, we build digital experiences that users love and Google rewards.',
      features: ['React & Next.js', 'Mobile-First', 'E-commerce', 'API Integration'],
      price: '$1,299',
    },
    {
      icon: Brain,
      title: 'AI Automation',
      description: 'Automate repetitive tasks and scale faster with AI. Save time, cut costs, stay ahead of competition.',
      color: 'from-orange-500 to-red-500',
      glowColor: 'rgba(249, 115, 22, 0.5)',
      bgGradient: 'from-orange-50 to-red-50',
      expertise: 92,
      details: 'Implement AI-powered chatbots, workflow automation, and smart analytics to work smarter, not harder.',
      features: ['Smart Chatbots', 'Workflow AI', 'Data Intelligence', 'Process Mining'],
      price: '$1,199',
    },
    {
      icon: Megaphone,
      title: 'Brand Strategy',
      description: 'Stand out in a crowded market. Build a brand identity that people remember and talk about.',
      color: 'from-indigo-500 to-blue-500',
      glowColor: 'rgba(99, 102, 241, 0.5)',
      bgGradient: 'from-indigo-50 to-blue-50',
      expertise: 88,
      details: 'We help startups build powerful brands from scratch - from logo design to complete brand guidelines and messaging.',
      features: ['Logo Design', 'Brand Voice', 'Style Guides', 'Market Positioning'],
      price: '$899',
    },
    {
      icon: BarChart3,
      title: 'Growth Analytics',
      description: 'Make data-driven decisions. Track what matters, optimize what works, and scale your growth rapidly.',
      color: 'from-yellow-500 to-orange-500',
      glowColor: 'rgba(234, 179, 8, 0.5)',
      bgGradient: 'from-yellow-50 to-orange-50',
      expertise: 94,
      details: 'Get real-time dashboards, actionable insights, and growth metrics that actually help you make better business decisions.',
      features: ['Custom Dashboards', 'A/B Testing', 'Funnel Analysis', 'ROI Tracking'],
      price: '$699',
    },
  ];

  const handleBuyNow = (service: any, e: React.MouseEvent) => {
    e.stopPropagation();
    // Here you can implement the buy now logic
    console.log(`Buy Now clicked for: ${service.title} at ${service.price}`);
    // You can redirect to checkout, open a payment modal, etc.
    alert(`Proceeding to checkout for ${service.title} - ${service.price}`);
  };

  return (
    <section id="services" className="py-4 sm:py-6 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
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
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-800">Our Expertise</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Premium <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </motion.h2>
          
          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Comprehensive digital solutions tailored to accelerate your business growth
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              onClick={() => setSelectedService(index)}
              onBuyNow={handleBuyNow}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Can't find what you're looking for?</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-xl text-base font-semibold shadow-xl">
              <Zap className="w-5 h-5 mr-2" />
              Request Custom Solution
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-xl border-purple-200">
          {selectedService !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-4 text-2xl sm:text-3xl">
                  <motion.div
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${services[selectedService].color} flex items-center justify-center shadow-lg`}
                  >
                    {(() => {
                      const IconComponent = services[selectedService].icon;
                      return <IconComponent className="w-7 h-7 text-white" />;
                    })()}
                  </motion.div>
                  {services[selectedService].title}
                </DialogTitle>
                <DialogDescription className="text-base sm:text-lg pt-4 text-gray-600">
                  {services[selectedService].details}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 pt-4">
                {/* Features List */}
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-900">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {services[selectedService].features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 bg-gradient-to-br from-gray-50 to-gray-100 px-3 py-2 rounded-lg"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[selectedService].color}`} />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Expertise Level */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-lg text-gray-900">Expertise Level</h4>
                    <span className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {services[selectedService].expertise}%
                    </span>
                  </div>
                  <Progress value={services[selectedService].expertise} className="h-3" />
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">Starting at</h4>
                      <p className="text-gray-600">One-time payment • No hidden fees</p>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {services[selectedService].price}
                      </span>
                      <p className="text-sm text-gray-600">One-time payment</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white py-6 text-base font-semibold shadow-xl">
                      Learn More Details
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                    <Button 
                      className={`w-full bg-gradient-to-r ${services[selectedService].color} hover:opacity-90 text-white py-6 text-base font-semibold shadow-xl`}
                      onClick={() => handleBuyNow(services[selectedService], { stopPropagation: () => {} } as React.MouseEvent)}
                    >
                      <ShoppingCart className="mr-2 w-5 h-5" />
                      Buy Now
                    </Button>
                  </motion.div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

// Modern Glassmorphism Service Card Component
function ServiceCard({ service, index, onClick, onBuyNow, isHovered, onHover, onLeave }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const angleX = ((e.clientY - centerY) / rect.height) * -8;
    const angleY = ((e.clientX - centerX) / rect.width) * 8;
    
    rotateX.set(angleX);
    rotateY.set(angleY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    onLeave();
  };

  const handleBuyNowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBuyNow(service, e);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group relative cursor-pointer h-full"
      style={{ perspective: '1000px' }}
    >
      {/* Glow Effect on Hover */}
      <motion.div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${service.glowColor}, transparent)`,
        }}
      />

      {/* Main Card with 3D Transform */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative h-full"
      >
        {/* Glassmorphism Card */}
        <div 
          className={`relative h-full min-h-[420px] bg-white/80 backdrop-blur-xl rounded-2xl p-7 border border-gray-200/50 shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-500`}
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
          
          {/* Animated Border */}
          <motion.div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100`}
            style={{
              padding: '2px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
            initial={{ rotate: 0 }}
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 2, ease: 'linear' }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Icon with Floating Animation */}
            <motion.div
              className="mb-6"
              animate={{
                y: isHovered ? [-5, 5, -5] : 0,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: 'easeInOut',
              }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-900 transition-colors leading-tight">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">
              {service.description}
            </p>

            {/* Pricing */}
            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {service.price}
                </span>
                <span className="text-sm text-gray-500">one-time</span>
              </div>
            </div>

            {/* Expertise Bar */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-gray-700">Expertise</span>
                <motion.span 
                  className="font-bold text-gray-900"
                  animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.expertise}%
                </motion.span>
              </div>
              
              <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${service.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${service.expertise}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                />
                
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  animate={{
                    x: isHovered ? ['0%', '400%'] : '0%',
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isHovered ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 10,
              }}
              transition={{ duration: 0.3 }}
              className="space-y-3 mt-2"
            >
              {/* Learn More Button */}
              <div className="flex items-center justify-between text-purple-600 font-semibold group/btn px-2 py-2 rounded-lg hover:bg-purple-50 transition-colors duration-300">
                <span className="text-sm">Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </div>

              {/* Buy Now Button */}
              <motion.button
                onClick={handleBuyNowClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <ShoppingCart className="w-4 h-4" />
                Buy Now
                <span className="text-white/90 text-xs">({service.price})</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Corner Accent */}
          <motion.div
            className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${service.color} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`}
          />
        </div>
      </motion.div>

      {/* Floating Sparkle Effect */}
      <motion.div
        className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100"
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          rotate: isHovered ? [0, 180, 360] : 0,
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      >
        <Sparkles className={`w-6 h-6 text-purple-500`} />
      </motion.div>
    </motion.div>
  );
}