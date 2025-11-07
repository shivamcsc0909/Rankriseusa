import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully! We\'ll get back to you soon.', {
      icon: <CheckCircle className="w-5 h-5" />,
    });
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@rankriseuse.com', color: 'from-blue-500 to-cyan-500' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', color: 'from-purple-500 to-pink-500' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              width: `${300 + i * 50}px`,
              height: `${300 + i * 50}px`,
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Let's start a conversation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">Let's Talk About Your Project</h3>
              <p className="text-muted-foreground mb-8">
                We're here to help you achieve your digital goals. Reach out and let's create something amazing together.
              </p>
            </div>

            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-background transition-all cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold group-hover:text-primary transition-colors">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-xl"
              />
              <h4 className="font-bold text-lg mb-2">Quick Response</h4>
              <p className="text-muted-foreground text-sm">
                We typically respond within 24 hours during business days
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="card-gradient rounded-2xl p-8 shadow-lg space-y-6 relative overflow-hidden">
              {/* Form Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative z-10 space-y-6">
                <motion.div
                  animate={{
                    scale: focusedField === 'name' ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="h-12"
                  />
                </motion.div>

                <motion.div
                  animate={{
                    scale: focusedField === 'email' ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="h-12"
                  />
                </motion.div>

                <motion.div
                  animate={{
                    scale: focusedField === 'message' ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    className="resize-none"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary group relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <motion.span
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.5 }}
                        />
                        <span className="relative z-10">Send Message</span>
                        <Send className="ml-2 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
