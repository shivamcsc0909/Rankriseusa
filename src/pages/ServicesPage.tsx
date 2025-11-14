import { motion } from 'framer-motion';
import { Search, Share2, Code, Brain, Megaphone, BarChart3, CheckCircle, ArrowRight, Rocket, Target, Zap, Users, TrendingUp, Shield, Sparkles, Star, PenTool, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: 'SEO Services',
      definition: 'Search Engine Optimization (SEO) is the art and science of optimizing your website to rank higher on search engines like Google, driving organic traffic and increasing visibility.',
      benefits: [
        'Rank on first page for high-value keywords',
        'Increase qualified organic traffic by 300%+',
        'Build sustainable long-term growth',
        'Outrank competitors consistently'
      ],
      whyChooseUs: 'We use proprietary ranking algorithms and white-hat techniques that have helped clients achieve #1 rankings in competitive niches. Our data-driven approach ensures every optimization drives real business results.',
      color: 'from-blue-500 to-cyan-500',
      price: 'From $2,999/mo',
      results: '+350% Traffic',
      cta: 'Get SEO That Ranks'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing (SMM)',
      definition: 'Strategic social media management that transforms your profiles into powerful revenue-generating channels through engaging content and targeted audience growth.',
      benefits: [
        'Grow engaged followers rapidly',
        'Generate consistent leads and sales',
        'Build brand authority and trust',
        'Drive website traffic from social platforms'
      ],
      whyChooseUs: 'Our viral content frameworks and community-building strategies have helped brands gain 200K+ followers in months. We create content that people actually want to share and engage with.',
      color: 'from-purple-500 to-pink-500',
      price: 'From $1,999/mo',
      results: '200K Followers',
      cta: 'Go Viral Now'
    },
    {
      icon: Megaphone,
      title: 'Social Media Optimization (SMO)',
      definition: 'Optimizing your social media presence across all platforms to maximize visibility, engagement, and conversion rates through strategic profile enhancements.',
      benefits: [
        'Optimize profiles for maximum reach',
        'Increase engagement rates significantly',
        'Improve brand consistency across platforms',
        'Enhance social media conversion rates'
      ],
      whyChooseUs: 'We go beyond basic posting - we optimize every element of your social presence from bios to visuals, ensuring you get the maximum ROI from your social media efforts.',
      color: 'from-indigo-500 to-blue-500',
      price: 'From $1,499/mo',
      results: '3x Engagement',
      cta: 'Optimize Profiles'
    },
    {
      icon: TrendingUp,
      title: 'PPC Advertising',
      definition: 'Pay-Per-Click advertising that puts your business in front of ready-to-buy customers through strategic ad placements on Google, social media, and other platforms.',
      benefits: [
        'Get immediate targeted traffic',
        'Pay only for actual results',
        'Scale profitable campaigns rapidly',
        'Reach high-intent buyers instantly'
      ],
      whyChooseUs: 'Our PPC experts have generated over $50M in client revenue through meticulously optimized campaigns. We focus on ROI, not just clicks, ensuring every dollar spent drives revenue.',
      color: 'from-green-500 to-emerald-500',
      price: 'From $2,499/mo',
      results: '5x ROAS',
      cta: 'Launch Campaign'
    },
    {
      icon: PenTool,
      title: 'Content Writing',
      definition: 'Strategic content creation that engages your audience, builds authority, and drives conversions through compelling copy and SEO-optimized writing.',
      benefits: [
        'Establish thought leadership',
        'Improve SEO rankings with quality content',
        'Engage and convert visitors',
        'Build trust with your audience'
      ],
      whyChooseUs: 'Our writers are conversion experts who understand both SEO and human psychology. We create content that ranks, engages, and converts - not just fills pages.',
      color: 'from-orange-500 to-red-500',
      price: 'From $1,199/mo',
      results: '300% More Conversions',
      cta: 'Get Quality Content'
    },
    {
      icon: Code,
      title: 'Web Development',
      definition: 'Building high-converting, lightning-fast websites that provide exceptional user experiences and drive business growth through superior technical execution.',
      benefits: [
        'Lightning fast load times (<2 seconds)',
        'Mobile-optimized responsive design',
        'Higher conversion rates (15%+)',
        'Scalable and secure architecture'
      ],
      whyChooseUs: 'We build websites that actually make money. Our development focus is on performance, conversion optimization, and user experience - not just pretty designs.',
      color: 'from-yellow-500 to-amber-500',
      price: 'From $7,999',
      results: '15% Conversion',
      cta: 'Build Your Site'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      definition: 'Creating powerful, user-friendly mobile applications that solve real business problems and provide exceptional value to your customers.',
      benefits: [
        'Reach customers on mobile devices',
        'Provide seamless user experiences',
        'Increase customer engagement',
        'Generate additional revenue streams'
      ],
      whyChooseUs: 'Our app development team combines cutting-edge technology with user-centric design to create apps that people love to use and that drive real business results.',
      color: 'from-pink-500 to-rose-500',
      price: 'From $12,999',
      results: '4.8 Star Ratings',
      cta: 'Develop Your App'
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      definition: 'Implementing artificial intelligence and automation to streamline operations, enhance customer experiences, and drive efficiency across your business.',
      benefits: [
        'Automate repetitive tasks',
        'Provide 24/7 customer support',
        'Gain data-driven insights',
        'Improve operational efficiency'
      ],
      whyChooseUs: 'We build practical AI solutions that deliver immediate value. From chatbots to predictive analytics, we implement AI that works and scales with your business.',
      color: 'from-teal-500 to-cyan-500',
      price: 'From $4,999',
      results: '$400K Saved',
      cta: 'Automate Now'
    }
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
              <span className="text-sm font-bold text-purple-800">Premium Digital Services</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight text-gray-900">
              Digital Services That{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Drive Real Results
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              From SEO that ranks #1 to websites that convert at 15%+. Every service is designed to grow your business and maximize ROI.
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

      {/* Services Grid - Restructured */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-4 text-gray-900">
              Our Digital <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to scale your business and drive measurable results
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`mb-16 bg-gradient-to-r ${service.color} rounded-2xl overflow-hidden shadow-2xl`}
              >
                <div className="bg-white p-8 md:p-12 rounded-2xl m-1">
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    {/* Left Column - Service Overview */}
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                          <service.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                      </div>

                      {/* Service Definition */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">What is {service.title}?</h4>
                        <p className="text-gray-600 leading-relaxed">{service.definition}</p>
                      </div>

                      {/* Benefits Section */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">How It Helps Your Business:</h4>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Why Choose Rankrise */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Why Choose Rankrise for {service.title}:</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{service.whyChooseUs}</p>
                      </div>
                    </div>

                    {/* Right Column - Pricing & CTA */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="text-center mb-6">
                        <p className="text-sm text-gray-500 mb-1">Starting at</p>
                        <p className="text-2xl font-bold text-gray-900">{service.price}</p>
                        <div className={`mt-2 px-4 py-1 rounded-full bg-gradient-to-r ${service.color} bg-opacity-10 text-sm font-bold text-gray-800`}>
                          {service.results}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold py-3`}>
                            {service.cta}
                          </Button>
                        </motion.div>
                        
                        <div className="text-center">
                          <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-800 underline">
                            Schedule Free Consultation
                          </Link>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>30-day results guarantee</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
      <section className="py-20 bg-white">
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Free 30-min strategy call. We'll analyze your business and show you the exact strategy to achieve your goals.
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
                    See Client Results
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