import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Search, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { scrollY } = useScroll();
  const navY = useTransform(scrollY, [0, 100], [0, -5]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        style={{ y: navY }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'glass-morphism shadow-2xl border-b border-white/10' 
            : 'bg-background/60 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/">
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-3 cursor-pointer group mr-10"
  >
                <div className="relative">
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src="/assets/images/logo.png" 
                      alt="Rankrise USA Logo" 
                      className="h-14 w-auto object-contain relative z-10 scale-[1.0]"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl opacity-0 group-hover:opacity-20 blur-xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item, index) => (
                <Link key={item.name} to={item.path}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="relative px-5 py-2.5 rounded-xl group"
                  >
                    <span className={`relative z-10 font-medium text-sm transition-colors duration-300 ${
                      location.pathname === item.path 
                        ? 'text-primary' 
                        : 'text-foreground/70 group-hover:text-primary'
                    }`}>
                      {item.name}
                    </span>
                    
                    {/* Hover Background */}
                    <motion.div
                      className="absolute inset-0 bg-primary/5 rounded-xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    
                    {/* Active Indicator */}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl border border-primary/20"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Search */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="rounded-xl relative overflow-hidden group h-11 w-11"
                >
                  <Search className="w-5 h-5 relative z-10 transition-colors group-hover:text-primary" />
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              
              {/* Pricing */}
              <Link to="/pricing">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    className="rounded-xl border-2 h-11 px-6 font-semibold relative overflow-hidden group"
                  >
                    <span className="relative z-10">Pricing</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </Link>
              
              {/* Free Audit - Premium Animated Button */}
              <Link to="/free-audit">
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Button className="button-elite text-white rounded-xl h-11 px-6 font-semibold shadow-xl relative overflow-hidden group">
                    {/* Animated Gradient Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent"
                      animate={{ 
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      style={{ backgroundSize: '200% 200%' }}
                    />
                    
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                    />
                    
                    {/* Glow on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 blur-xl"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.5, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      className="relative z-10"
                    >
                      <Sparkles className="w-4 h-4 mr-2 inline" />
                    </motion.div>
                    <span className="relative z-10">Free Audit</span>
                  </Button>
                  
                  {/* Outer Glow Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-0 blur-lg"
                    whileHover={{ opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2.5 rounded-xl hover:bg-primary/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>

          {/* Search Bar */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isSearchOpen ? 'auto' : 0,
              opacity: isSearchOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4">
              <Input
                placeholder="Search services, articles, projects..."
                className="w-full rounded-xl border-2 h-12"
                autoFocus
              />
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : '100%',
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed inset-0 bg-background/98 backdrop-blur-2xl lg:hidden pt-24 z-40 overflow-y-auto"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-2 mb-8">
            {navItems.map((item, index) => (
              <Link key={item.name} to={item.path}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-2xl font-bold p-5 rounded-2xl transition-all ${
                    location.pathname === item.path 
                      ? 'text-primary bg-primary/10 border-2 border-primary/20' 
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="w-full rounded-xl h-14 text-lg font-semibold">
                Pricing Plans
              </Button>
            </Link>
            <Link to="/free-audit">
              <Button size="lg" className="w-full button-elite text-white rounded-xl h-14 text-lg font-semibold">
                <Sparkles className="w-5 h-5 mr-2" />
                Free Audit
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
