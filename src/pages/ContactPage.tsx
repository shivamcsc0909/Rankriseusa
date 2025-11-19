import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import { Phone, Mail, MapPin, MessageCircle, Star, Clock, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const whatsappLink = "https://wa.me/917704074403";
  const phoneNumber = "+91 7704 074 403";
  const address = "Amarpali Leisure Park, B4 Flat 805, Greater Noida, Uttar Pradesh 201310";

  const quickActions = [
    { 
      icon: Phone, 
      label: 'Call Us', 
      value: phoneNumber, 
      color: 'from-blue-500 to-cyan-500',
      link: `tel:${phoneNumber}`
    },
    { 
      icon: Mail, 
      label: 'Email Us', 
      value: 'hello@rankriseuse.com', 
      color: 'from-purple-500 to-pink-500',
      link: 'mailto:hello@rankriseuse.com'
    },
    { 
      icon: MessageCircle, 
      label: 'WhatsApp', 
      value: 'Chat Now', 
      color: 'from-green-500 to-emerald-500',
      link: whatsappLink
    },
    { 
      icon: MapPin, 
      label: 'Visit Us', 
      value: 'Greater Noida, India', 
      color: 'from-orange-500 to-red-500'
    },
  ];

  const officeLocations = [
    {
      country: "India",
      status: "active",
      address: "Amarpali Leisure Park, B4 Flat 805, Greater Noida, Uttar Pradesh 201310",
      phone: "+91 7704 074 403",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM",
      team: "Full Service Team Available",
      features: ["SEO Experts", "Web Developers", "AI Specialists", "24/7 Support"]
    },
    {
      country: "United States",
      status: "coming",
      address: "Coming Soon - 2024",
      features: ["Digital Marketing", "AI Automation", "Enterprise Solutions"]
    },
    {
      country: "United Kingdom", 
      status: "coming",
      address: "Coming Soon - 2024",
      features: ["SEO Services", "Web Development", "Growth Marketing"]
    },
    {
      country: "United Arab Emirates",
      status: "coming", 
      address: "Coming Soon - 2024",
      features: ["Digital Transformation", "E-commerce Solutions", "Market Entry"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to transform your business? Let's start a conversation and explore how we can help you grow
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card-gradient rounded-xl p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => action.link && window.open(action.link, '_blank')}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center mx-auto mb-4`}>
                  <action.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-1">{action.label}</h3>
                <p className="text-sm text-muted-foreground">{action.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* India Headquarters Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 fill-green-500" />
              <span className="text-sm font-medium">Fully Operational</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              India <span className="text-gradient">Headquarters</span>
            </h2>
            <p className="text-muted-foreground">Visit our fully operational center in Greater Noida</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Contact Form */}
            <div>
              <Contact />
            </div>
            
            {/* India Office Details & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Office Info Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">India Center</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-600 text-sm font-medium">Fully Operational</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm">{address}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <a href={`tel:${phoneNumber}`} className="text-sm hover:text-primary transition-colors">
                      {phoneNumber}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Full Service Team Available</span>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {officeLocations[0].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors w-full justify-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Full Width Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-4 border-b">
                  <h3 className="font-bold flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Our Location on Map
                  </h3>
                </div>
                <div className="w-full h-80">
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

      {/* Global Offices Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Global <span className="text-gradient">Presence</span>
            </h2>
            <p className="text-muted-foreground">Expanding our services worldwide</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {officeLocations.slice(1).map((office, index) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 relative"
              >
                {/* Coming Soon Badge */}
                <div className="absolute -top-3 -right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Coming Soon
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{office.country}</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-orange-600 text-sm font-medium">Launching 2024</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Planned Services:</h4>
                    <div className="grid gap-1">
                      {office.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4 cursor-not-allowed opacity-50"
                  disabled
                >
                  Coming Soon
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Additional Coming Soon Card for better grid alignment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-md mx-auto mt-8"
          >
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 text-center border border-purple-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="font-bold text-lg mb-2">More Locations Coming</h3>
              <p className="text-muted-foreground text-sm mb-4">
                We're expanding rapidly to serve you better across the globe
              </p>
              <Button variant="ghost" size="sm">
                Notify Me About New Locations
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
