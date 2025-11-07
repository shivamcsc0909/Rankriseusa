import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Blog() {
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null);

  const articles = [
    {
      title: '10 SEO Strategies That Actually Work in 2024',
      excerpt: 'Discover the latest SEO techniques driving real results - from Core Web Vitals to AI-powered content optimization.',
      category: 'SEO',
      date: 'Mar 15, 2024',
      readTime: '5 min',
      color: 'from-blue-500 to-cyan-500',
      author: 'Sarah Chen',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80',
      views: '2.5K',
    },
    {
      title: 'How AI is Transforming Digital Marketing',
      excerpt: 'AI isn\'t the future—it\'s now. Learn how startups are using ChatGPT, Midjourney, and automation to scale faster.',
      category: 'AI/ML',
      date: 'Mar 12, 2024',
      readTime: '7 min',
      color: 'from-purple-500 to-pink-500',
      author: 'Emily Watson',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      views: '3.8K',
    },
    {
      title: 'Building High-Converting Landing Pages',
      excerpt: 'The anatomy of landing pages that convert at 15%+. Real examples, proven frameworks, and conversion psychology.',
      category: 'Web Design',
      date: 'Mar 10, 2024',
      readTime: '6 min',
      color: 'from-green-500 to-emerald-500',
      author: 'Marcus Johnson',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      views: '4.2K',
    },
    {
      title: 'Growth Hacking on a Shoestring Budget',
      excerpt: 'How we helped 3 startups get their first 10K users with less than $500 in ad spend. Real tactics, not theory.',
      category: 'Marketing',
      date: 'Mar 8, 2024',
      readTime: '8 min',
      color: 'from-orange-500 to-red-500',
      author: 'David Park',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      views: '5.1K',
    },
    {
      title: 'From Zero to Viral: Social Media Playbook',
      excerpt: 'The exact content formula we used to grow 5 brands from 0 to 100K+ followers. Templates included.',
      category: 'Social Media',
      date: 'Mar 5, 2024',
      readTime: '9 min',
      color: 'from-indigo-500 to-blue-500',
      author: 'Lisa Chen',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      views: '6.3K',
    },
    {
      title: 'The Startup Tech Stack for 2024',
      excerpt: 'Best tools for startups on a budget. From no-code to AI automation - the complete toolkit for rapid growth.',
      category: 'Tech',
      date: 'Mar 3, 2024',
      readTime: '10 min',
      color: 'from-yellow-500 to-orange-500',
      author: 'Alex Kumar',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      views: '4.7K',
    },
  ];

  return (
    <section id="blog" className="py-20 sm:py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-800">Knowledge Hub</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Latest <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Insights</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Growth tactics, startup strategies, and marketing insights that actually work
          </motion.p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredArticle(index)}
              onHoverEnd={() => setHoveredArticle(null)}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full border border-gray-200">
                {/* Article Image */}
                <div className="relative h-52 overflow-hidden">
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredArticle === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${article.color} opacity-40 mix-blend-multiply`} />
                  
                  {/* Reading Icon - Shows on Hover */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: hoveredArticle === index ? 1 : 0,
                      scale: hoveredArticle === index ? 1 : 0,
                      rotate: hoveredArticle === index ? [0, 10, -10, 0] : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl"
                  >
                    <BookOpen className={`w-6 h-6 bg-gradient-to-r ${article.color} bg-clip-text text-transparent`} />
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-gray-800 shadow-lg">
                    {article.category}
                  </div>

                  {/* Views Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                    <TrendingUp className="w-3 h-3" />
                    {article.views}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Meta Information */}
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime} read
                    </div>
                  </div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl font-bold text-gray-900 leading-tight group-hover:text-purple-600 transition-colors line-clamp-2"
                  >
                    {article.title}
                  </motion.h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    {/* Author */}
                    <div className="flex items-center gap-2">
                      <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${article.color} flex items-center justify-center text-white text-sm font-bold shadow-md`}>
                        {article.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{article.author}</p>
                      </div>
                    </div>

                    {/* Read Button */}
                    <motion.div
                      animate={{
                        x: hoveredArticle === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button variant="ghost" size="sm" className="group/btn text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                        Read
                        <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${article.color}`}
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: hoveredArticle === index ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Shine Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                  initial={{ x: '-100%' }}
                  animate={{
                    x: hoveredArticle === index ? '100%' : '-100%',
                  }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-xl text-base font-semibold shadow-xl group">
              View All Articles
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Newsletter Signup CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 sm:p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }} />
            </div>

            <div className="relative z-10 text-center text-white">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: 0.2 }}
              >
                <Sparkles className="w-12 h-12 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-black mb-3">
                Get Growth Tips Weekly
              </h3>
              <p className="text-purple-100 mb-6 max-w-xl mx-auto">
                Join 5,000+ founders getting actionable marketing insights every Tuesday
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-bold whitespace-nowrap">
                    Subscribe Free
                  </Button>
                </motion.div>
              </div>
              
              <p className="text-xs text-purple-200 mt-3">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}