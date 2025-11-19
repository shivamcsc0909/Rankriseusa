import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import { Phone, Mail, MapPin, MessageCircle, Star, Clock, Users, CheckCircle, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const whatsappLink = "https://wa.me/917704074403";
  const phoneNumber = "+91 7704 074 403";
  const email = "hello@rankriseuse.com";
  const address = "Amarpali Leisure Park, B4 Flat 805, Greater Noida, Uttar Pradesh 201310";

  const quickActions = [
    { 
      icon: Phone, 
      label: 'Call Us', 
      value: phoneNumber, 
      color: 'from-blue-500 to-cyan-500',
      link: `tel:${phoneNumber}`,
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
      phone: phoneNumber,
      hours: "Mon - Sat: 9:00 AM - 7:00 PM",
      team: "Full Service Team Available",
      features: ["SEO Experts", "Web Developers", "AI Specialists", "24/7 Support"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      country: "United States",
      status: "coming",
      flag: "🇺🇸",
      address: "Coming Soon - 2024",
      features: ["Digital Marketing", "AI Automation", "Enterprise Solutions"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      country: "United Kingdom", 
      status: "coming",
      flag: "🇬🇧",
      address: "Coming Soon - 2024",
      features: ["SEO Services", "Web Development", "Growth Marketing"],
      gradient: "from-red-500 to-pink-500"
    },
    {
      country: "United Arab Emirates",
      status: "coming", 
      flag: "🇦🇪",
      address: "Coming Soon - 2024",
      features: ["Digital Transformation", "E-commerce Solutions", "Market Entry"],
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  const stats = [
    { value: "24-48h", label: "Response Time" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "15+", label: "Experts Team" },
    { value: "50+", label: "Projects Completed" }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Enhanced Hero Section */}
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

      {/* Enhanced Quick Actions */}
      <section className="py-16 bg-background">
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

      {/* India Headquarters Section */}
      <section className="py-16 bg-muted/20">
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
              India <span className="text-gradient">Headquarters</span>
            </h2>
            <p className="text-muted-foreground text-lg">Visit our fully operational center in Greater Noida</p>
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
            
            {/* India Office Details & Map */}
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
                    <h3 className="font-bold text-xl mb-1">India Headquarters</h3>
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
                    <a href={`tel:${phoneNumber}`} className="text-sm hover:text-primary transition-colors">
                      {phoneNumber}
                    </a>
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
                    href={`tel:${phoneNumber}`}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg transition-colors justify-center text-sm font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border"
              >
                <div className="p-4 border-b bg-muted/20">
                  <h3 className="font-bold flex items-center gap-2 text-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                    Our Location
                  </h3>
                </div>
                <div className="w-full h-64 sm:h-80">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="India Office Location Map"
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Global Offices Section */}
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
              <span className="text-sm font-medium">Global Expansion</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Global <span className="text-gradient">Presence</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We're expanding our services to serve you better worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {officeLocations.map((office, index) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card rounded-2xl shadow-lg p-6 border border-border relative overflow-hidden ${
                  office.status === 'active' ? 'ring-2 ring-green-500/20' : ''
                }`}
              >
                {/* Status Badge */}
                {office.status === 'coming' && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Coming Soon
                  </div>
                )}
                
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${office.gradient} rounded-xl p-4 mb-4 text-white`}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{office.flag}</span>
                    <div>
                      <h3 className="font-bold text-lg">{office.country}</h3>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          office.status === 'active' ? 'bg-white animate-pulse' : 'bg-white/80'
                        }`}></div>
                        <span className="text-white/90 text-sm font-medium">
                          {office.status === 'active' ? 'Fully Operational' : 'Launching 2024'}
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
                    <h4 className="font-semibold text-sm">Services:</h4>
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

                {office.status === 'active' ? (
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-xs transition-colors"
                    >
                      <MessageCircle className="w-3 h-3" />
                      WhatsApp
                    </a>
                    <a 
                      href={`tel:${office.phone}`}
                      className="inline-flex items-center justify-center gap-1 bg-primary hover:bg-primary/90 text-white px-3 py-2 rounded-lg text-xs transition-colors"
                    >
                      <Phone className="w-3 h-3" />
                      Call
                    </a>
                  </div>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-6 cursor-not-allowed opacity-50"
                    disabled
                  >
                    Coming Soon
                  </Button>
                )}
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
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center border border-purple-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="font-bold text-xl mb-2">More Locations Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                We're expanding rapidly to serve you better across the globe. Be the first to know when we launch in your region.
              </p>
              <Button className="bg-purple-500 hover:bg-purple-600">
                Notify Me About New Locations
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
