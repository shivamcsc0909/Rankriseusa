import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, ArrowUp, Heart } from 'lucide-react';
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
    toast.success('Thanks for subscribing! 🎉');
    setEmail('');
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
  ];

  const footerLinks = {
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Blog', path: '/blog' },
    ],
    Services: [
      { name: 'SEO Optimization', path: '/services' },
      { name: 'Web Development', path: '/services' },
      { name: 'AI/ML Solutions', path: '/services' },
      { name: 'Digital Marketing', path: '/services' },
    ],
    Resources: [
      { name: 'Free Audit', path: '/free-audit' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Case Studies', path: '/portfolio' },
      { name: 'Contact', path: '/contact' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/">
              <motion.div
  whileHover={{ scale: 1.05 }}
  className="flex items-center gap-4 mb-6 cursor-pointer group"
>
  <motion.img
    src="/assets/images/logo.png"
    alt="RankriseUSA Logo"
    className="h-16 w-auto object-contain shrink-0"
    whileHover={{ rotate: [0, -3, 3, -3, 0] }}
    transition={{ duration: 0.6 }}
  />
</motion.div>
            </Link>
            <p className="text-muted-foreground mb-6">
              Empowering businesses with digital innovation and strategic growth solutions. Grow faster with digital power.
            </p>
            
            {/* Newsletter */}
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <motion.div whileFocus={{ scale: 1.02 }} className="flex-1">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button type="submit" className="button-elite text-white">
                  <Mail className="w-4 h-4" />
                </Button>
              </motion.div>
            </form>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], columnIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: columnIndex * 0.1 }}
            >
              <h3 className="font-bold mb-4">{title}</h3>
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
                        whileHover={{ x: 5, color: 'hsl(var(--primary))' }}
                        className="text-muted-foreground transition-colors inline-block cursor-pointer"
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

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm flex items-center gap-2"
          >
            © 2025 Rankriseuse. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            All rights reserved.
          </motion.p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-all ${color}`}
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
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full button-elite text-white shadow-lg hover:shadow-2xl transition-shadow z-50 flex items-center justify-center group"
      >
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.div>
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20"
          initial={{ scale: 0, opacity: 1 }}
          whileHover={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.button>
    </footer>
  );
}
