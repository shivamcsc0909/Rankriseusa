import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Target, Zap, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

export default function FreeAuditPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    business: '',
    goals: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Audit request submitted! We\'ll contact you within 24 hours.', {
      icon: <CheckCircle className="w-5 h-5" />,
    });
    setFormData({ name: '', email: '', website: '', business: '', goals: '' });
    setIsSubmitting(false);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'SEO Analysis',
      description: 'Comprehensive review of your website\'s search engine optimization',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      title: 'Competitive Analysis',
      description: 'Understand where you stand against your competitors',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Growth Opportunities',
      description: 'Identify quick wins and long-term strategies for growth',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: CheckCircle,
      title: 'Action Plan',
      description: 'Receive a customized roadmap to improve your digital presence',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const process = [
    { step: '1', title: 'Submit Request', description: 'Fill out the audit request form' },
    { step: '2', title: 'Analysis', description: 'Our team analyzes your digital presence' },
    { step: '3', title: 'Report', description: 'Receive detailed audit report' },
    { step: '4', title: 'Consultation', description: 'Discuss findings and next steps' },
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
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
            >
              🎯 Limited Time Offer - 100% Free
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get Your Free <span className="text-gradient">Digital Audit</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover hidden opportunities and get actionable insights to grow your business online
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              What You'll <span className="text-gradient">Get</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card-gradient rounded-2xl p-6 text-center hover:shadow-lg transition-all"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Form */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                Request Your <span className="text-gradient">Free Audit</span>
              </h2>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours</p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="card-gradient rounded-2xl p-8 shadow-lg space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Website URL *</label>
                <Input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Business Type *</label>
                <Input
                  placeholder="E-commerce, SaaS, Services, etc."
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">What are your main goals? *</label>
                <Textarea
                  placeholder="Tell us about your business goals and challenges..."
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary group"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Processing...
                    </>
                  ) : (
                    <>
                      Request Free Audit
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
