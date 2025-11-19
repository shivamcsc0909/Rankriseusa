import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import { Phone, Mail, MapPin, MessageCircle, Star, Clock, Users, CheckCircle, Globe, Target, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const whatsappLink = "https://wa.me/919278074403";
  const phoneNumber1 = "+91 92780 74403";
  const phoneNumber2 = "+91 77040 74403";
  const email = "hello@rankriseuse.com";
  const address = "Amarpali Leisure Park, B4 Flat 805, Greater Noida, Uttar Pradesh 201310";

  const quickActions = [
    { 
      icon: Phone, 
      label: 'Call Us', 
      value: phoneNumber1, 
      color: 'from-blue-500 to-cyan-500',
      link: `tel:${phoneNumber1}`,
      description: 'Speak directly with our team'
    },
    { 
      icon: Mail, 
      label: 'Email Us', 
      value: email, 
      color: 'from-purple-500 to-pink-500',
      link: `mailto:${email}`,
      description: 'Get detailed responses within hours'
    },
    { 
      icon: MessageCircle, 
      label: 'WhatsApp', 
      value: 'Instant Chat', 
      color: 'from-green-500 to-emerald-500',
      link: whatsappLink,
      description: 'Quick answers and support'
    },
    { 
      icon: MapPin, 
      label: 'Visit Office', 
      value: 'Greater Noida', 
      color: 'from-orange-500 to-red-500',
      description: 'Meet us in person'
    },
  ];

  const officeLocations = [
    {
      country: "India",
      status: "active",
      flag: "🇮🇳",
      address: address,
      phone: phoneNumber1,
      hours: "Mon - Sat: 9:00 AM - 7:00 PM",
      team: "Full Service Team Available",
      features: ["SEO Experts", "Web Developers", "AI Specialists", "24/7 Support"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      country: "United States",
      status: "coming",
      flag: "🇺🇸",
      address: "Coming Soon - 2025",
      features: ["Digital Marketing", "AI Automation", "Enterprise Solutions"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      country: "United Kingdom", 
      status: "coming",
      flag: "🇬🇧",
      address: "Coming Soon - 2025",
      features: ["SEO Services", "Web Development", "Growth Marketing"],
      gradient: "from-red-500 to-pink-500"
    },
    {
      country: "United Arab Emirates",
      status: "coming", 
      flag: "🇦🇪",
      address: "Coming Soon - 2025",
      features: ["Digital Transformation", "E-commerce Solutions", "Market Entry"],
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      country: "Australia",
      status: "coming", 
      flag: "🇦🇺",
      address: "Coming Soon - 2025",
      features: ["Digital Strategy", "Web Development", "Local SEO"],
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      country: "Canada",
      status: "coming", 
      flag: "🇨🇦",
      address: "Coming Soon - 2025",
      features: ["AI Solutions", "Web Development", "Digital Marketing"],
      gradient: "from-red-500 to-orange-500"
    }
  ];

  const stats = [
    { value: "24-48h", label: "Response Time" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "15+", label: "Experts Team" },
    { value: "50+", label: "Projects Completed" }
  ];

  const features = [
    {
      icon: Target,
      title: "Goal-Oriented Approach",
      description: "We align our strategies with your business objectives for maximum impact"
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description: "Quick turnaround times without compromising on quality"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with diverse digital marketing expertise"
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Track record of delivering measurable business growth"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Enhanced Hero Section - Ready to Grow Full Width */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
            >
              <Star className="w-4 h-4 fill-primary" />
              <span className="text-sm font-medium">Let's Build Something Amazing</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to <span className="text-gradient bg-gradient-to-r from-primary to-primary/70">Grow</span> Together?
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our expert team and let's discuss how we can transform your digital presence and drive real results for your business.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                Book a Consultation
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mt-12"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-background/50 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">RankRise</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Quick Actions */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Multiple Ways to <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose your preferred method to get in touch with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                className="bg-card rounded-xl p-6 cursor-pointer border border-border hover:shadow-lg transition-all duration-300 group"
                onClick={() => action.link && window.open(action.link, '_blank')}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">{action.label}</h3>
                <p className="text-primary font-semibold text-center mb-2">{action.value}</p>
                <p className="text-sm text-muted-foreground text-center">{action.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* India Operation Center Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Fully Operational</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              India <span className="text-gradient">Operation Center</span>
            </h2>
            <p className="text-muted-foreground text-lg">Our fully operational center in Greater Noida serving clients nationwide</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-card rounded-2xl shadow-lg p-6 sm:p-8 border border-border">
                <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
                <Contact />
              </div>
            </motion.div>
            
            {/* India Office Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              {/* Office Info Card */}
              <div className="bg-card rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-green-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">India Operation Center</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-600 text-sm font-medium">Fully Operational</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{address}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <div className="space-y-1">
                      <a href={`tel:${phoneNumber1}`} className="text-sm hover:text-primary transition-colors block">
                        {phoneNumber1}
                      </a>
                      <a href={`tel:${phoneNumber2}`} className="text-sm hover:text-primary transition-colors block">
                        {phoneNumber2}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <a href={`mailto:${email}`} className="text-sm hover:text-primary transition-colors">
                      {email}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm">Full Service Team Available</span>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {officeLocations[0].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-colors justify-center text-sm font-medium"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a 
                    href={`tel:${phoneNumber1}`}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg transition-colors justify-center text-sm font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Width Map Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Find Our <span className="text-gradient">Location</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Visit our India Operation Center in Greater Noida. We're easily accessible and ready to welcome you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border"
          >
            <div className="p-6 border-b bg-muted/20">
              <h3 className="font-bold flex items-center gap-2 text-xl">
                <MapPin className="w-6 h-6 text-primary" />
                India Operation Center - Greater Noida
              </h3>
              <p className="text-muted-foreground mt-2">{address}</p>
            </div>
            <div className="w-full h-80 sm:h-96 lg:h-[500px]">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="India Operation Center Location Map"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Global Offices Section - International Branch Coming Soon 2025 */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">Global Expansion 2025</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              International <span className="text-gradient">Branches Coming Soon</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're expanding globally to serve you better across different time zones and regions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {officeLocations.slice(1).map((office, index) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl shadow-lg p-6 border border-border relative overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Coming 2025
                </div>
                
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${office.gradient} rounded-xl p-4 mb-4 text-white group-hover:scale-105 transition-transform duration-300`}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{office.flag}</span>
                    <div>
                      <h3 className="font-bold text-lg">{office.country}</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                        <span className="text-white/90 text-sm font-medium">
                          Launching 2025
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Planned Services:</h4>
                    <div className="space-y-2">
                      {office.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${office.gradient}`}></div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-6 cursor-not-allowed opacity-50"
                  disabled
                >
                  Coming Soon - 2025
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Expansion CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto mt-12"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center border border-blue-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-bold text-xl mb-2">Global Expansion 2025</h3>
              <p className="text-muted-foreground mb-6">
                We're expanding to 6 new international locations in 2025 to serve you better across the globe. 
                Be the first to know when we launch in your region.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600">
                Notify Me About New Locations
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
