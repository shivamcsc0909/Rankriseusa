import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, ArrowUp, Heart, Sparkles, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Welcome aboard! Check your inbox for exclusive content 🎉');
    setEmail('');
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:bg-blue-500', label: 'Facebook' },
    { icon: Twitter, href: '#', color: 'hover:bg-sky-500', label: 'Twitter' },
    { icon: Linkedin, href: '#', color: 'hover:bg-blue-600', label: 'LinkedIn' },
    { icon: Instagram, href: '#', color: 'hover:bg-pink-500', label: 'Instagram' },
  ];

  const footerLinks = {
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Services', path: '/services' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Success Stories', path: '/blog' },
    ],
    Services: [
      { name: 'SEO Optimization', path: '/services' },
      { name: 'Web Development', path: '/services' },
      { name: 'AI Automation', path: '/services' },
      { name: 'Growth Marketing', path: '/services' },
    ],
    Resources: [
      { name: 'Free SEO Audit', path: '/free-audit' },
      { name: 'Pricing Plans', path: '/pricing' },
      { name: 'Case Studies', path: '/portfolio' },
      { name: 'Get in Touch', path: '/contact' },
    ],
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        {/* Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 mb-4 cursor-pointer group"
              >
                <motion.img
                  src="/assets/images/logo.png"
                  alt="Rankrise Logo"
                  className="h-12 w-auto object-contain"
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </Link>
            
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              Digital growth partners for ambitious startups. Smart marketing & powerful tech.
            </p>
            
            {/* Newsletter */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <p className="text-white font-semibold text-sm">Weekly Growth Tips</p>
              </div>
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <motion.div whileFocus={{ scale: 1.02 }} className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-purple-400 h-10 text-sm"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 h-10"
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                </motion.div>
              </form>
              <p className="text-xs text-gray-400 mt-1">5,000+ subscribers</p>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], columnIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: columnIndex * 0.1 }}
            >
              <h3 className="font-bold text-white mb-3 text-base">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: columnIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <Link to={link.path}>
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-purple-400 transition-colors inline-block cursor-pointer text-sm"
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-400 text-sm"
          >
            <span>© 2025 Rankrise. Crafted with</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            <span>in New delhi</span>
          </motion.div>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, color, label }, index) => (
              <motion.a
                key={index}
                href={href}
                aria-label={label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-full bg-white/10 hover:text-white flex items-center justify-center transition-all ${color} text-gray-300`}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl hover:shadow-purple-500/50 transition-all z-50 flex items-center justify-center group"
      >
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.div>
        
        {/* Ripple Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white"
          initial={{ scale: 0, opacity: 0.5 }}
          whileHover={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      </motion.button>
    </footer>
  );
}