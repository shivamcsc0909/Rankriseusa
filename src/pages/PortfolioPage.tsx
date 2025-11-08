import { motion } from 'framer-motion';
import Portfolio from '../components/Portfolio';
import { Star, TrendingUp, Zap, Award, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function PortfolioPage() {
  const stats = [
    { number: '$50M+', label: 'Revenue Generated', icon: TrendingUp },
    { number: '500+', label: 'Projects Shipped', icon: Zap },
    { number: '15x', label: 'Avg Traffic Growth', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
  ];

  const testimonials = [
    {
      quote: "They took us from 2K to 150K monthly visitors in 6 months. ROI was insane.",
      author: "Sarah Chen",
      role: "CEO, FinTech Startup",
      result: "7400% traffic growth"
    },
    {
      quote: "Finally, an agency that actually delivers. Our conversion rate went from 2% to 12%.",
      author: "Marcus Lee",
      role: "Founder, E-commerce Brand",
      result: "6x conversion increase"
    },
    {
      quote: "Best investment we made. They built our AI chatbot that saved us $400K/year.",
      author: "Emily Rodriguez",
      role: "COO, SaaS Company",
      result: "$400K annual savings"
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], x: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-bold text-purple-800">Real Clients. Real Results.</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight text-gray-900">
              $50M+ in Revenue.{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                This is Proof.
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              We don't do vanity metrics. These are businesses we scaled from scratch, ranked #1 on Google, and turned into market leaders. Numbers don't lie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-base font-semibold shadow-xl">
                    Get Similar Results
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid Component */}
      <Portfolio />

      {/* Testimonials Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-4 text-gray-900">
              What Founders <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Say About Us</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients actually say.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-lg border border-gray-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-800 font-medium mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
                    <p className="text-xs font-bold text-purple-700">{testimonial.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black mb-4 text-gray-900">
              Industries We <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Dominate</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {['SaaS', 'E-commerce', 'FinTech', 'HealthTech', 'EdTech', 'B2B'].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 text-center border border-purple-100"
              >
                <p className="font-bold text-gray-900">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-white">
              Ready to Join the Winners?
            </h2>
            <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              500+ businesses chose us. Now it's your turn. Free strategy call. Zero commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-base font-bold shadow-2xl">
                    Book Your Strategy Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-base font-bold">
                    Explore Our Services
                  </Button>
                </Link>
              </motion.div>
            </div>
            <p className="text-white/80 text-sm mt-6">⚡ Only 3 spots left this month • 🎯 90-day results guarantee</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}