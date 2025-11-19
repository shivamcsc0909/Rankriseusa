import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const whatsappLink = "https://wa.me/917704074403";
  const phoneNumber = "+91 7704 074 403";
  const address = "Amarpali Leisure Park, B4 Flat 805, Greater Noida";

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
      value: address, 
      color: 'from-orange-500 to-red-500'
    },
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

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <Contact />
            </div>
            
            {/* Map Section */}
            <div className="w-full h-full">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden h-full"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-primary" />
                    Our Location
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {address}
                  </p>
                  
                  {/* WhatsApp Button */}
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors mb-6"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
                
                {/* Map Container */}
                <div className="w-full h-96">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location Map"
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-gradient">Office</span>
            </h2>
            <p className="text-muted-foreground">Visit us at our location</p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card-gradient rounded-xl p-6 text-center"
            >
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{address}</h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(`https://maps.google.com/maps?q=${encodeURIComponent(address)}`, '_blank')}
                >
                  Get Directions
                </Button>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
