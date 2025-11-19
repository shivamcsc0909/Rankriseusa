import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Heart, Sparkles, MapPin, Phone, MessageCircle, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');

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
    "Company": [
      { name: 'About Us', path: '/about' },
      { name: 'Our Services', path: '/services' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Success Stories', path: '/blog' },
    ],
    "Web Development": [
      { name: 'React Development', path: '/services' },
      { name: 'MERN Stack Development', path: '/services' },
      { name: 'MEAN Stack Development', path: '/services' },
      { name: 'Full Stack Solutions', path: '/services' },
    ],
    "App Development": [
      { name: 'Flutter Development', path: '/services' },
      { name: 'Android App Development', path: '/services' },
      { name: 'iOS App Development', path: '/services' },
      { name: 'Cross-Platform Apps', path: '/services' },
    ],
    "Software Services": [
      { name: 'Python Development', path: '/services' },
      { name: 'Java Development', path: '/services' },
      { name: 'Blockchain Solutions', path: '/services' },
      { name: 'Machine Learning & AI', path: '/services' },
    ]
  };

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Refund / Cancellation', path: '/refund-cancellation' },
    { name: 'Cookies Policy', path: '/cookies-policy' },
    { name: 'Disclaimer', path: '/disclaimer' },
  ];

  const address = "Amarpali Leisure Park B4 Flat 805, Greater Noida";
  const mobileNumbers = [
    { number: "+91 9278 074 403", whatsapp: "919278074403" },
    { number: "+91 7704 074 403", whatsapp: "917704074403" }
  ];
  
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.060173769528!2d77.49818857526816!3d28.47447587575122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce826aafbd3c9%3A0x5e9373f4e7d8d2f7!2sAmarpali%20Leisure%20Park%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin!4v1699623456789!5m2!1sen!2sin`;

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

      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Main Footer Content - Restructured Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
          {/* Brand Section - Left Side */}
          <div className="lg:col-span-2">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 mb-3 cursor-pointer group"
              >
                <motion.img
                  src="/assets/images/logo.png"
                  alt="Rankrise Logo"
                  className="h-10 w-auto object-contain"
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </Link>
            
            <p className="text-gray-300 mb-3 leading-relaxed text-sm">
              Digital growth partners for ambitious startups. Smart marketing & powerful tech.
            </p>
            
            {/* Newsletter */}
            <div className="mb-3">
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
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-purple-400 h-9 text-sm"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 h-9"
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                </motion.div>
              </form>
            </div>

            {/* Enhanced Social Links with Gradient Borders */}
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
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative group"
                >
                  {/* Gradient Border */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-75 group-hover:opacity-100 transition-all duration-300 ${color}`}></div>
                  
                  {/* Inner Circle */}
                  <div className="relative w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center transform transition-all duration-300 group-hover:bg-gray-800">
                    <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  
                  {/* Glitter Effect on Hover */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transform -rotate-45 scale-150 transition-all duration-500"></div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Links - Left Side */}
          {Object.entries(footerLinks).map(([title, links], columnIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: columnIndex * 0.1 }}
              className="text-center md:text-left"
            >
              <h3 className="font-bold text-white mb-2 text-sm">{title}</h3>
              <ul className="space-y-1">
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
                        whileHover={{ x: 3 }}
                        className="text-gray-300 hover:text-purple-400 transition-colors inline-block cursor-pointer text-xs"
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Right Side - Map and International Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-3"
          >
            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-white mb-2 text-sm">Contact Info</h3>
              
              {/* Address */}
              <div className="flex items-start gap-2 mb-2">
                <MapPin className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-xs leading-tight">
                  {address}
                </p>
              </div>

              {/* Mobile Numbers */}
              <div className="space-y-1 mb-2">
                {mobileNumbers.map((mobile, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Phone className="w-3 h-3 text-purple-400 flex-shrink-0" />
                    <a 
                      href={`tel:${mobile.number}`}
                      className="text-gray-300 hover:text-purple-400 text-xs"
                    >
                      {mobile.number}
                    </a>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <motion.a
                href={`https://wa.me/${mobileNumbers[0].whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-xs w-fit mb-3"
              >
                <MessageCircle className="w-3 h-3" />
                <span>WhatsApp</span>
              </motion.a>
            </div>

            {/* International Coming Soon Section */}
            <motion.div 
              className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-400/30 p-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4 text-purple-400" />
                <h4 className="text-white text-sm font-bold">International Expansion</h4>
              </div>
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded px-2 py-1 mb-2">
                <p className="text-yellow-300 text-xs font-semibold text-center">Coming Soon 🌍</p>
              </div>
              <p className="text-gray-300 text-xs">
                Expanding our services globally to serve international clients with premium digital solutions.
              </p>
            </motion.div>

            {/* Map Section */}
            <div className="bg-white/10 rounded border border-white/20 p-2">
              <h4 className="text-white text-xs font-semibold mb-1">Our Location</h4>
              <div className="w-full h-32 rounded overflow-hidden">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '4px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rankrise Office Location"
                  className="filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Legal Pages */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {legalPages.map((page, index) => (
            <Link to={page.path} key={page.name}>
              <motion.span
                whileHover={{ scale: 1.05, color: '#a78bfa' }}
                className="text-gray-400 hover:text-purple-400 text-xs cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {page.name}
              </motion.span>
            </Link>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-3" />

        {/* Bottom Section - Updated Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Updated Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 text-gray-400 text-xs"
          >
            <span>© 2025 Rankrise USA. All rights reserved.</span>
          </motion.div>
          
          {/* Website Developed By */}
          <div className="text-gray-400 text-xs text-center">
            Website designed and developed by Rankrise USA
          </div>

          {/* Made with Love */}
          <motion.div
            className="flex items-center gap-1 text-gray-400 text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            </motion.span>
            <span>in India</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
