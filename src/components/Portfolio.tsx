import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Zap, Star, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'FinTech SaaS Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      color: 'from-blue-500 to-cyan-500',
      description: 'Built a complete fintech dashboard with real-time analytics, payment gateway integration, and AI-powered fraud detection for a Series A startup.',
      challenge: 'Needed to handle 50K+ transactions daily with zero downtime',
      solution: 'Microservices architecture with React, Node.js, and AWS',
      stats: { users: '50K+', uptime: '99.9%', speed: '<2s' },
      results: ['Processed $10M+ in transactions', 'Zero security breaches', 'Reduced load time by 70%'],
      tech: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
    },
    {
      title: 'E-commerce Growth',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      color: 'from-green-500 to-emerald-500',
      description: 'Scaled organic traffic from 2K to 150K monthly visitors for a D2C fashion brand through strategic SEO and content marketing.',
      challenge: 'High competition in fashion niche with limited budget',
      solution: 'Long-tail keyword strategy + technical SEO + quality backlinks',
      stats: { traffic: '7400%', keywords: '350+', revenue: '+$2M' },
      results: ['Ranked #1 for 50+ keywords', 'Organic revenue up 400%', 'Domain authority from 15 to 45'],
      tech: ['Ahrefs', 'Semrush', 'Google Analytics', 'Content Strategy'],
    },
    {
      title: 'Viral Social Campaign',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      color: 'from-purple-500 to-pink-500',
      description: 'Created a viral social media campaign that grew followers from 5K to 200K in 6 months for a health & wellness startup.',
      challenge: 'Low brand awareness and limited content budget',
      solution: 'UGC strategy + influencer partnerships + viral content formula',
      stats: { followers: '200K', engagement: '12.5%', reach: '5M+' },
      results: ['3 viral posts (1M+ views each)', '15K+ UGC submissions', 'Brand mentions up 800%'],
      tech: ['Instagram', 'TikTok', 'Canva', 'Influencer Network'],
    },
    {
      title: 'AI Support Bot',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      color: 'from-orange-500 to-red-500',
      description: 'Developed an AI-powered customer support chatbot that handles 80% of queries automatically with 94% satisfaction score.',
      challenge: 'High support costs and slow response times',
      solution: 'Custom GPT-4 model trained on company data + seamless handoff',
      stats: { automation: '80%', satisfaction: '94%', savings: '$400K/yr' },
      results: ['Response time: 24hrs → 5 seconds', 'Support team reduced by 60%', 'CSAT score improved 35%'],
      tech: ['GPT-4', 'Python', 'LangChain', 'Redis'],
    },
    {
      title: 'Complete Rebrand',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      color: 'from-indigo-500 to-blue-500',
      description: 'Full brand transformation for a B2B SaaS company - from outdated to modern, resulting in 3x inbound leads in 4 months.',
      challenge: 'Looked generic, failed to attract enterprise clients',
      solution: 'New visual identity + messaging framework + website redesign',
      stats: { leads: '3x', recognition: '85%', conversion: '+40%' },
      results: ['Won 2 design awards', 'Featured in TechCrunch', 'Enterprise clients up 200%'],
      tech: ['Figma', 'Adobe Suite', 'Brand Strategy', 'Webflow'],
    },
    {
      title: 'Analytics Dashboard',
      category: 'Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      color: 'from-yellow-500 to-orange-500',
      description: 'Built a custom analytics platform processing 2M+ events daily with real-time insights and predictive analytics for growth teams.',
      challenge: 'Scattered data across 10+ tools, no single source of truth',
      solution: 'Unified dashboard with custom ETL pipeline and ML predictions',
      stats: { events: '2M+', insights: '1000+', accuracy: '92%' },
      results: ['Data-driven decisions up 300%', 'Saved 20hrs/week per team', 'Revenue attribution solved'],
      tech: ['Python', 'BigQuery', 'Tableau', 'TensorFlow'],
    },
  ];

  const categories = ['All', 'Web Development', 'SEO', 'Marketing', 'AI/ML', 'Branding', 'Analytics'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-8 sm:py-12 relative overflow-hidden bg-gradient-to-br from-white via-purple-50/10 to-blue-50/20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 50, 0],
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
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-6"
          >
            <Star className="w-4 h-4 text-purple-600 fill-purple-600" />
            <span className="text-sm font-semibold text-purple-800">Success Stories</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Work That <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Drives Results</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Real projects. Real impact. See how we've helped startups and businesses scale.
          </motion.p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={filter === category ? 'default' : 'outline'}
                  onClick={() => setFilter(category)}
                  className={`relative overflow-hidden ${
                    filter === category 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0' 
                      : 'border-2 hover:border-purple-400'
                  }`}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                onClick={() => setSelectedProject(projects.indexOf(project))}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
                style={{ perspective: '1000px' }}
              >
                {/* Shimmer Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent z-20 pointer-events-none"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 mix-blend-multiply`} />
                  
                  {/* Animated Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-5"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-white"
                    >
                      <Button variant="secondary" size="sm" className="group/btn">
                        View Case Study
                        <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </motion.div>

                  {/* Category Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 200, 
                      delay: index * 0.1 + 0.3 
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-gray-800 shadow-lg border-2 border-white"
                  >
                    {project.category}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center bg-gray-50 rounded-lg p-2">
                        <div className={`text-base font-black bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-[10px] text-gray-500 uppercase font-semibold">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-xl text-base font-semibold shadow-xl">
              <Zap className="w-5 h-5 mr-2" />
              Start Your Success Story
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Header Image */}
              <div className="relative h-64 -mx-6 -mt-6 mb-6 rounded-t-xl overflow-hidden">
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${projects[selectedProject].color} opacity-60 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-4xl font-black mb-2">{projects[selectedProject].title}</h3>
                  <p className="text-lg opacity-90">{projects[selectedProject].category}</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {projects[selectedProject].description}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    Challenge
                  </h4>
                  <p className="text-sm text-red-800">{projects[selectedProject].challenge}</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Solution
                  </h4>
                  <p className="text-sm text-green-800">{projects[selectedProject].solution}</p>
                </div>
              </div>

              {/* Stats */}
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  Key Metrics
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(projects[selectedProject].stats).map(([key, value]) => (
                    <div key={key} className={`text-center p-5 rounded-xl bg-gradient-to-br ${projects[selectedProject].color} bg-opacity-10`}>
                      <div className={`text-3xl font-black mb-1 bg-gradient-to-r ${projects[selectedProject].color} bg-clip-text text-transparent`}>
                        {value}
                      </div>
                      <div className="text-sm text-gray-600 capitalize font-semibold">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-purple-600 fill-purple-600" />
                  Results Achieved
                </h4>
                <div className="space-y-2">
                  {projects[selectedProject].results.map((result, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
                    >
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${projects[selectedProject].color} flex items-center justify-center flex-shrink-0`}>
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{result}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-bold text-lg mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className={`w-full bg-gradient-to-r ${projects[selectedProject].color} hover:opacity-90 text-white py-6 text-base font-semibold shadow-xl`}>
                  Start Similar Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}