import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import { Phone, Mail, MapPin, MessageCircle, Star, Clock, Users, CheckCircle, Globe, Target, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const whatsappLink = "https://wa.me/919278074403";
  const phoneNumber1 = "+91 92780 74403";
  const phoneNumber2 = "+91 77040 74403";
  const emails = [
    "info@rankriseusa.com",
    "hr@rankriseusa.com", 
    "support@rankriseusa.com"
  ];
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
      value: 'Multiple Options', 
      color: 'from-purple-500 to-pink-500',
      link: `mailto:${emails[0]}`,
      description: 'Choose from different departments'
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
    <div className="pt-20 min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
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
              className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-8"
            >
              <Star className="w-5 h-5 fill-primary" />
              <span className="text-base font-medium">Let's Build Something Amazing</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Ready to <span className="text-gradient bg-gradient-to-r from-primary to-primary/70">Grow</span> Together?
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our expert team and let's discuss how we can transform your digital presence and drive real results for your business.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg h-14">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-10 py-4 text-lg h-14 border-2">
                Book a Consultation
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto mt-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-background/80 rounded-xl backdrop-blur-sm border border-border/50">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">RankRise</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We combine expertise, innovation, and dedication to deliver exceptional results for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-2xl transition-all duration-500 group text-center hover:border-primary/20"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Quick Actions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Multiple Ways to <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred method to get in touch with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8
                }}
                className="bg-card rounded-2xl p-8 cursor-pointer border border-border hover:shadow-2xl transition-all duration-500 group h-full flex flex-col"
                onClick={() => action.link && window.open(action.link, '_blank')}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <action.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-center">{action.label}</h3>
                <p className="text-primary font-semibold text-lg text-center mb-3">{action.value}</p>
                <p className="text-muted-foreground text-center flex-grow">{action.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* India Operation Center Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-green-100 text-green-800 px-6 py-3 rounded-full mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-base font-semibold">Fully Operational</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              India <span className="text-gradient">Operation Center</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our fully operational center in Greater Noida serving clients nationwide with comprehensive digital solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-card rounded-3xl shadow-xl p-8 sm:p-10 border border-border">
                <h3 className="text-3xl font-bold mb-4">Send us a Message</h3>
                <p className="text-muted-foreground text-lg mb-8">
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
              className="space-y-8 order-1 lg:order-2"
            >
              {/* Office Info Card */}
              <div className="bg-card rounded-3xl shadow-xl p-8 sm:p-10 border-l-4 border-green-500">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2">India Operation Center</h3>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-600 font-semibold">Fully Operational</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-base">{address}</p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-muted-foreground mt-1 flex-shrink-0" />
                    <div className="space-y-2">
                      <a href={`tel:${phoneNumber1}`} className="text-base hover:text-primary transition-colors block font-medium">
                        {phoneNumber1}
                      </a>
                      <a href={`tel:${phoneNumber2}`} className="text-base hover:text-primary transition-colors block font-medium">
                        {phoneNumber2}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-muted-foreground mt-1 flex-shrink-0" />
                    <div className="space-y-2">
                      {emails.map((email, index) => (
                        <a 
                          key={index} 
                          href={`mailto:${email}`} 
                          className="text-base hover:text-primary transition-colors block font-medium"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Clock className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                    <span className="text-base font-medium">Mon - Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Users className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                    <span className="text-base font-medium">Full Service Team Available</span>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {officeLocations[0].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-base font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl transition-all duration-300 justify-center text-base font-semibold hover:shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                  <a 
                    href={`tel:${phoneNumber1}`}
                    className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-xl transition-all duration-300 justify-center text-base font-semibold hover:shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Width Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Find Our <span className="text-gradient">Location</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit our India Operation Center in Greater Noida. We're easily accessible and ready to welcome you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border"
          >
            <div className="p-8 border-b bg-muted/20">
              <h3 className="font-bold flex items-center gap-3 text-2xl">
                <MapPin className="w-7 h-7 text-primary" />
                India Operation Center - Greater Noida
              </h3>
              <p className="text-muted-foreground mt-3 text-lg">{address}</p>
            </div>
            <div className="w-full h-96 sm:h-[500px] lg:h-[600px]">
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

      {/* Enhanced Global Offices Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-800 px-6 py-3 rounded-full mb-6">
              <Globe className="w-5 h-5" />
              <span className="text-base font-semibold">Global Expansion 2025</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              International <span className="text-gradient">Branches Coming Soon</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're expanding globally to serve you better across different time zones and regions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {officeLocations.slice(1).map((office, index) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-3xl shadow-xl p-8 border border-border relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:border-primary/20"
              >
                {/* Status Badge */}
                <div className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Coming 2025
                </div>
                
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${office.gradient} rounded-2xl p-6 mb-6 text-white group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{office.flag}</span>
                    <div>
                      <h3 className="font-bold text-xl">{office.country}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                        <span className="text-white/90 font-medium">
                          Launching 2025
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-base">{office.address}</p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Planned Services:</h4>
                    <div className="space-y-3">
                      {office.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${office.gradient}`}></div>
                          <span className="text-muted-foreground text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full mt-8 h-12 cursor-not-allowed opacity-50 text-base"
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
            className="max-w-4xl mx-auto mt-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 text-center border border-blue-200 shadow-lg">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="font-bold text-2xl mb-4">Global Expansion 2025</h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                We're expanding to 6 new international locations in 2025 to serve you better across the globe. 
                Be the first to know when we launch in your region.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 h-12 text-base">
                Notify Me About New Locations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
