import { motion } from 'framer-motion';
import About from '../components/About';
import Team from '../components/Team';
import { Target, Zap, Award, Users, Rocket, TrendingUp, Heart, Sparkles, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  const values = [
    { 
      icon: Zap, 
      title: 'Speed Over Perfection', 
      description: 'We ship fast, test faster, and iterate based on real data. While others are planning, we\'re already making you money.',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Target, 
      title: 'Results, Not Promises', 
      description: 'We don\'t do fluff. Every strategy is backed by data. Every campaign has clear KPIs. If it doesn\'t move the needle, we don\'t do it.',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Award, 
      title: 'Excellence or Nothing', 
      description: 'We\'re obsessed with being the best. Top 1% SEO rankings. 15%+ conversion rates. Industry-leading results or we work for free.',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: Users, 
      title: 'Your Success = Our Success', 
      description: 'We only win when you win. That\'s why 89% of our clients have been with us for 2+ years. We\'re partners, not vendors.',
      color: 'from-orange-500 to-red-500'
    },
  ];

  const milestones = [
    { 
      year: '2020', 
      event: 'The Beginning', 
      description: 'Started in a garage with 1 client and a vision to help startups dominate',
      icon: Rocket
    },
    { 
      year: '2021', 
      event: 'First $1M Generated', 
      description: 'Our clients crossed $1M in revenue. We knew we were onto something big',
      icon: TrendingUp
    },
    { 
      year: '2022', 
      event: '100 Success Stories', 
      description: 'Scaled 100+ businesses. Became the go-to agency for ambitious founders',
      icon: Star
    },
    { 
      year: '2023', 
      event: 'Industry Leaders', 
      description: 'Featured in Forbes, TechCrunch. Our clients raised $50M+ in funding',
      icon: Award
    },
    { 
      year: '2024', 
      event: '$50M+ Revenue Impact', 
      description: 'Generated over $50M for our clients. Built a team of A-players',
      icon: Zap
    },
  ];

  const stats = [
    { number: '500+', label: 'Businesses Scaled', icon: Rocket },
    { number: '$50M+', label: 'Revenue Generated', icon: TrendingUp },
    { number: '89%', label: 'Retention Rate', icon: Heart },
    { number: '15+', label: 'Growth Experts', icon: Users },
  ];

  const differentiators = [
    'We actually answer Slack messages (in <30 min)',
    'No contracts - stay because we deliver, not because you\'re locked in',
    'Monthly strategy calls with founders, not account managers',
    'Full transparency - you see everything we do in real-time',
    'We eat our own dog food - we use the same strategies for ourselves',
    'Money-back guarantee if we don\'t hit milestones',
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
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-bold text-purple-800">The Growth Partner You Wish You Had</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight text-gray-900">
              We're Not Your Typical{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Marketing Agency
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              We're a team of ex-startup founders, ex-Googlers, and growth hackers who got tired of seeing agencies overpromise and underdeliver. So we built something different.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-semibold">500+ Businesses Scaled</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-semibold">$50M+ Revenue Generated</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-semibold">89% Retention Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Component */}
      <About />

      {/* Why We're Different */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-4 text-gray-900">
              Why Founders <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Choose Us</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              We do things agencies won't. Here's what makes us different.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-gradient-to-br from-purple-50 to-blue-50 p-5 rounded-2xl border border-purple-100"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-800 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-4 text-gray-900">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Operating Principles</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              These aren't just words on a wall. This is how we actually work.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all border border-gray-200"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-4 text-gray-900">
              From Garage to <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">$50M Impact</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Our journey from day one to becoming the go-to growth partner for ambitious startups
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-xl`}>
                      <milestone.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{milestone.event}</h3>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

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
              Let's Build the Next Big Thing
            </h2>
            <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join 500+ founders who chose us as their growth partner. Free strategy call. No sales pitch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-base font-bold shadow-2xl">
                    Start Your Transformation
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-base font-bold">
                    See Our Work
                  </Button>
                </Link>
              </motion.div>
            </div>
            <p className="text-white/80 text-sm mt-6">⚡ Book your spot now • 🚀 Limited availability • 💰 No commitment required</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}