import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const quickActions = [
    { icon: Phone, label: 'Call Us', value: '+1 (555) 123-4567', color: 'from-blue-500 to-cyan-500' },
    { icon: Mail, label: 'Email Us', value: 'hello@rankriseuse.com', color: 'from-purple-500 to-pink-500' },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat Now', color: 'from-green-500 to-emerald-500' },
    { icon: MapPin, label: 'Visit Us', value: 'San Francisco, CA', color: 'from-orange-500 to-red-500' },
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

      {/* Contact Form */}
      <Contact />

      {/* Office Locations */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-gradient">Locations</span>
            </h2>
            <p className="text-muted-foreground">Visit us at any of our offices worldwide</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {['San Francisco, CA', 'New York, NY', 'London, UK'].map((location, index) => (
              <motion.div
                key={location}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-gradient rounded-xl p-6 text-center"
              >
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">{location}</h3>
                <Button variant="outline" size="sm">Get Directions</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
