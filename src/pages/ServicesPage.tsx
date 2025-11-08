import { motion } from 'framer-motion';
import { Search, Share2, Code, Brain, Megaphone, BarChart3, CheckCircle, ArrowRight, Rocket, Target, Zap, Users, TrendingUp, Shield, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: 'SEO That Actually Ranks',
      description: 'We got a fintech startup from 0 to 150K monthly visitors in 6 months. Our clients rank #1 for high-intent keywords and print money from Google.',
      features: ['Rank in top 3 for your niche', 'Triple organic traffic in 90 days', 'Technical SEO that Google loves', 'Content that converts searchers'],
      color: 'from-blue-500 to-cyan-500',
      price: 'From $2,999/mo',
      results: '+350% Traffic',
    },
    {
      icon: Share2,
      title: 'Social Media That Sells',
      description: 'One wellness brand went from 3K to 200K followers in 8 months. We create content that goes viral and audiences that buy on repeat.',
      features: ['Viral content frameworks', 'Community that loves your brand', 'Influencer partnerships that pay', 'Ads with 5x+ ROAS'],
      color: 'from-purple-500 to-pink-500',
      price: 'From $1,999/mo',
      results: '200K Followers',
    },
    {
      icon: Code,
      title: 'Websites That Print Money',
      description: 'Our e-commerce sites convert at 8-15% (industry avg: 2%). Lightning fast. Mobile-perfect. Built to make you rich, not just look pretty.',
      features: ['Sub-2 second load times', '15%+ conversion rates', 'Mobile-first design', 'Built for scale, not ego'],
      color: 'from-green-500 to-emerald-500',
      price: 'From $7,999',
      results: '15% Conversion',
    },
    {
      icon: Brain,
      title: 'AI That Works 24/7',
      description: 'Automated a SaaS company\'s support (saved $400K/year). Cut response time from 6 hours to 30 seconds. Your team focuses on growth, not busywork.',
      features: ['AI chatbots that feel human', '80% automation rate', 'Instant customer support', 'Predictive analytics'],
      color: 'from-orange-500 to-red-500',
      price: 'From $4,999',
      results: '$400K Saved',
    },
    {
      icon: Megaphone,
      title: 'Brands People Remember',
      description: 'Rebranded a B2B SaaS that looked like everyone else. Result? 3x inbound leads and featured in TechCrunch. Your brand should demand attention.',
      features: ['Brand strategy that sells', 'Logo & identity that pops', 'Complete brand guidelines', 'Market positioning'],
      color: 'from-indigo-500 to-blue-500',
      price: 'From $5,999',
      results: '3x Leads',
    },
    {
      icon: BarChart3,
      title: 'Analytics That Matter',
      description: 'Stop drowning in vanity metrics. We build dashboards that show exactly what drives revenue and where to double down.',
      features: ['Real-time revenue tracking', 'Custom dashboards', 'Attribution modeling', 'Weekly performance reports'],
      color: 'from-yellow-500 to-orange-500',
      price: 'From $1,499/mo',
      results: '10x Better Insights',
    },
  ];

  const process = [
    { 
      step: '01', 
      title: 'Strategy Call', 
      description: 'Free 30-min call to understand your goals and challenges',
      icon: Target,
      time: '30 mins'
    },
    { 
      step: '02', 
      title: 'Custom Proposal', 
      description: 'Detailed plan with timelines, deliverables, and pricing',
      icon: Rocket,
      time: '2-3 days'
    },
    { 
      step: '03', 
      title: 'Execution', 
      description: 'We build, launch, and iterate based on real data',
      icon: Zap,
      time: '2-12 weeks'
    },
    { 
      step: '04', 
      title: 'Scale & Optimize', 
      description: 'Continuous improvement and monthly performance reports',
      icon: TrendingUp,
      time: 'Ongoing'
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: Rocket },
    { number: '98%', label: 'Happy Clients', icon: Star },
    { number: '5x', label: 'Average ROI', icon: TrendingUp },
    { number: '<24hrs', label: 'Response Time', icon: Zap },
  ];

  const faqs = [
    {
      q: 'How fast can I see real results?',
      a: 'Paid ads: First sales in 7-14 days. SEO: Page 1 rankings in 60-90 days. Web dev: Launch your site in 3-6 weeks. We move fast because your time = money.'
    },
    {
      q: 'What if I\'m a small startup with limited budget?',
      a: 'Perfect. 70% of our clients started with <$5K/month budgets. We offer payment plans, milestone-based pricing, and rev-share deals for the right partners.'
    },
    {
      q: 'Why should I choose you over Fiverr or hiring in-house?',
      a: 'Fiverr = amateur work, in-house = expensive + slow. We\'re your dedicated growth team for 1/3 the cost of one senior hire. Plus you get our entire playbook that\'s made clients millions.'
    },
    {
      q: 'Do you guarantee results?',
      a: 'Yes. If we don\'t hit agreed milestones in 90 days, you get next month free. We put our money where our mouth is because we know we deliver.'
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
              <span className="text-sm font-bold text-purple-800">Services That Scale Startups</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight text-gray-900">
              We Don't Just Build.{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                We Grow Empires.
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              From zero to millions in revenue. SEO that ranks #1. Websites that convert at 15%+. AI that saves 20 hours/week. This is how winners scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-base font-semibold shadow-xl">
                    Book Free Strategy Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-base font-semibold">
                    View Pricing
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

      {/* Services Grid */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-4 text-gray-900">
              Services That Made Our Clients{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">$50M+ Richer</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Real case studies. Real numbers. Real results. This is what separates winners from wannabes.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all border border-gray-200"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price & Results */}
                <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Starting at</p>
                    <p className="text-lg font-bold text-gray-900">{service.price}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${service.color} bg-opacity-10 text-xs font-bold`}>
                    {service.results}
                  </div>
                </div>

                {/* Bottom Accent */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-4 text-gray-900">
              How We <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, transparent process. No hidden fees, no surprises.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-bold text-purple-600 mb-2">{item.step}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-2 leading-relaxed">{item.description}</p>
                <div className="text-xs text-gray-500 font-semibold">{item.time}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black mb-4 text-gray-900">Quick Answers</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
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
              Let's Turn Your Vision Into Millions
            </h2>
            <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Free 30-min strategy call. We'll show you the exact playbook we used to grow 500+ businesses. No pitch, just pure value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-base font-bold shadow-2xl">
                    Claim Your Free Strategy Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-base font-bold">
                    See $50M+ in Client Results
                  </Button>
                </Link>
              </motion.div>
            </div>
            <p className="text-white/80 text-sm mt-6">⚡ Only 3 spots left this month • 🚀 500+ businesses scaled • 💰 $50M+ revenue generated</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}