// src/pages/CustomPlanPage.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Share2, Code, Brush, Palette, PenTool, Megaphone, Sparkles, Check, ArrowLeft } from 'lucide-react';

interface ServiceOption {
  name: string;
  price: number;
  description: string;
  features: string[];
  quantityOptions?: { name: string; basePrice: number; value: number; min: number; max: number; isBudget?: boolean }[];
}

interface Service {
  id: string;
  name: string;
  description: string;
  Icon: any;
  options: ServiceOption[];
}

export default function CustomPlanPage() {
  const [step, setStep] = useState<'initial' | 'selection' | 'details'>('initial');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [contactData, setContactData] = useState({ name: '', email: '', phone: '', company: '', website: '', message: '' });
  const [totalCost, setTotalCost] = useState(0);

  const services: Service[] = [
    {
      id: 'seo',
      name: 'Search Engine Optimization (SEO)',
      description: 'Improve your website\'s visibility in search engines and drive organic traffic.',
      Icon: Search,
      options: [
        { name: 'Basic SEO', price: 200, description: 'Essential SEO optimization for small websites', features: ['5 Keywords Tracking', 'Basic On-Page SEO', 'Monthly Reports', 'Email Support'] },
        { name: 'Standard SEO', price: 450, description: 'Comprehensive SEO for growing businesses', features: ['25 Keywords Tracking', 'On-Page & Technical SEO', 'Link Building', 'Weekly Reports'] },
        { name: 'Premium SEO', price: 700, description: 'Advanced SEO strategy', features: ['50 Keywords Tracking', 'Advanced Technical SEO', 'Local SEO', 'Daily Monitoring'] }
      ]
    },
    {
      id: 'smo',
      name: 'Social Media Optimization (SMO)',
      description: 'Enhance your social media presence and engage with your audience.',
      Icon: Share2,
      options: [
        { name: 'Basic SMO', price: 300, description: 'Essential social media management', features: ['2 Social Platforms', '10 Posts per Month', 'Basic Analytics'] },
        { name: 'Standard SMO', price: 500, description: 'Comprehensive social media strategy', features: ['4 Social Platforms', '20 Posts per Month', 'Advanced Analytics'] },
        { name: 'Premium SMO', price: 800, description: 'Full-service social media management', features: ['6 Social Platforms', '40 Posts per Month', 'Influencer Outreach'] }
      ]
    },
    {
      id: 'ppc',
      name: 'Pay Per Click (PPC)',
      description: 'Drive targeted traffic through paid advertising campaigns.',
      Icon: Megaphone,
      options: [
        { name: 'Basic PPC', price: 350, description: 'Essential PPC campaign management', features: ['1 Platform', 'Campaign Setup', 'Monthly Optimization'] },
        { name: 'Standard PPC', price: 600, description: 'Comprehensive PPC management', features: ['2 Platforms', 'A/B Testing', 'Bi-weekly Optimization'] },
        { name: 'Premium PPC', price: 900, description: 'Advanced PPC strategy', features: ['3 Platforms', 'Conversion Optimization', 'Weekly Optimization'] }
      ]
    },
    {
      id: 'web-dev',
      name: 'Web Development',
      description: 'Create responsive, fast, and user-friendly websites.',
      Icon: Code,
      options: [
        { name: 'Basic Website', price: 500, description: 'Simple website', features: ['Up to 5 Pages', 'Responsive Design', 'Contact Form'] },
        { name: 'Business Website', price: 1200, description: 'Professional website', features: ['Up to 15 Pages', 'Custom Design', 'CMS Integration'] },
        { name: 'E-commerce', price: 2500, description: 'Full-featured store', features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway'] }
      ]
    },
    {
      id: 'web-design',
      name: 'Web Design',
      description: 'Create visually appealing and user-centric designs.',
      Icon: Brush,
      options: [
        { name: 'Basic Design', price: 400, description: 'Clean design', features: ['UI/UX Design', 'Responsive Layout', 'Color Scheme'] },
        { name: 'Professional Design', price: 800, description: 'Custom design', features: ['Custom UI/UX', 'Interactive Elements', 'Brand Integration'] },
        { name: 'Premium Design', price: 1500, description: 'High-end design', features: ['Advanced UI/UX', 'Animation & Effects', 'Multiple Revisions'] }
      ]
    },
    {
      id: 'branding',
      name: 'Branding',
      description: 'Develop a strong brand identity.',
      Icon: Palette,
      options: [
        { name: 'Basic Branding', price: 500, description: 'Essential brand identity', features: ['Logo Design', 'Color Palette', 'Typography'] },
        { name: 'Comprehensive Branding', price: 1200, description: 'Complete brand system', features: ['Logo Design', 'Brand Guidelines', 'Social Media Kit'] },
        { name: 'Enterprise Branding', price: 2500, description: 'Extensive brand system', features: ['Logo Design', 'Complete Visual Identity', 'Brand Strategy'] }
      ]
    },
    {
      id: 'content',
      name: 'Content Writing',
      description: 'Create engaging and persuasive content.',
      Icon: PenTool,
      options: [
        { name: 'Basic Content', price: 300, description: 'Essential content', features: ['5 Blog Posts', 'Website Copy', 'Basic SEO'] },
        { name: 'Standard Content', price: 600, description: 'Comprehensive content', features: ['10 Blog Posts', 'Social Media Content', 'Advanced SEO'] },
        { name: 'Premium Content', price: 1000, description: 'Full-service content', features: ['20 Blog Posts', 'Email Marketing', 'Content Strategy'] }
      ]
    },
    {
      id: 'digital-ads',
      name: 'Digital Advertising',
      description: 'Reach your audience across digital channels.',
      Icon: Megaphone,
      options: [
        { name: 'Basic Advertising', price: 400, description: 'Essential digital ads', features: ['1 Channel', 'Campaign Setup', 'Monthly Reports'] },
        { name: 'Standard Advertising', price: 700, description: 'Comprehensive ads', features: ['2 Channels', 'Advanced Targeting', 'A/B Testing'] },
        { name: 'Premium Advertising', price: 1100, description: 'Advanced multi-channel', features: ['3 Channels', 'Retargeting', 'Custom Reporting'] }
      ]
    }
  ];

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) ? prev.filter(id => id !== serviceId) : [...prev, serviceId]
    );
  };

  const selectOption = (serviceId: string, optionName: string) => {
    setSelectedOptions(prev => ({ ...prev, [serviceId]: optionName }));
    calculateTotal();
  };

  const calculateTotal = () => {
    let total = 0;
    Object.keys(selectedOptions).forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      const option = service?.options.find(o => o.name === selectedOptions[serviceId]);
      if (option) total += option.price;
    });
    setTotalCost(total);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setStep('initial');
    setSelectedServices([]);
    setSelectedOptions({});
    setContactData({ name: '', email: '', phone: '', company: '', website: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Initial View */}
      {step === 'initial' && (
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block px-4 py-1.5 bg-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              Build Your Perfect Plan
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MAKE YOUR CUSTOM PLAN
            </h1>
            <div className="flex justify-center items-center gap-2 mb-6">
              <div className="h-0.5 w-5 bg-gradient-to-r from-transparent to-blue-600"></div>
              <div className="h-0.5 w-10 bg-blue-600"></div>
              <div className="h-0.5 w-5 bg-gradient-to-l from-transparent to-blue-600"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Select the services you need, customize them to fit your requirements, and get an instant quote.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStep('selection')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transition-all flex items-center gap-3 mx-auto"
            >
              <Sparkles className="w-6 h-6" />
              Make Your Custom Plan
            </motion.button>
          </motion.div>
        </div>
      )}

      {/* Service Selection */}
      {step === 'selection' && (
        <div className="pt-24 pb-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                Step 1: Choose Services
              </div>
              <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SELECT YOUR SERVICES
              </h1>
              <div className="flex justify-center items-center gap-2">
                <div className="h-0.5 w-5 bg-gradient-to-r from-transparent to-blue-600"></div>
                <div className="h-0.5 w-10 bg-blue-600"></div>
                <div className="h-0.5 w-5 bg-gradient-to-l from-transparent to-blue-600"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map(service => {
                const { Icon } = service;
                return (
                  <motion.div
                    key={service.id}
                    whileHover={{ y: -5, scale: 1.02 }}
                    onClick={() => toggleService(service.id)}
                    className={`bg-white rounded-2xl p-6 cursor-pointer border-2 transition-all ${
                      selectedServices.includes(service.id)
                        ? 'border-blue-600 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                      selectedServices.includes(service.id) 
                        ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.options[0].features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => selectedServices.length > 0 && setStep('details')}
                disabled={selectedServices.length === 0}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
              >
                Continue to Customize
                <Sparkles className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      )}

      {/* Service Details */}
      {step === 'details' && (
        <div className="pt-24 pb-16 px-4">
          <div className="container mx-auto">
            <button
              onClick={() => setStep('selection')}
              className="flex items-center gap-2 mb-8 text-blue-600 hover:text-blue-700 font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Services
            </button>

            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                Step 2: Customize Your Plan
              </div>
              <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CUSTOMIZE YOUR PLAN
              </h1>
              <div className="flex justify-center items-center gap-2">
                <div className="h-0.5 w-5 bg-gradient-to-r from-transparent to-blue-600"></div>
                <div className="h-0.5 w-10 bg-blue-600"></div>
                <div className="h-0.5 w-5 bg-gradient-to-l from-transparent to-blue-600"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {selectedServices.map(serviceId => {
                const service = services.find(s => s.id === serviceId);
                if (!service) return null;
                return service.options.map(option => (
                  <motion.div
                    key={`${serviceId}-${option.name}`}
                    whileHover={{ y: -5 }}
                    onClick={() => selectOption(serviceId, option.name)}
                    className={`bg-white rounded-2xl p-6 cursor-pointer border-2 transition-all ${
                      selectedOptions[serviceId] === option.name
                        ? 'border-blue-600 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold">{option.name}</h3>
                      <span className="text-xl font-bold text-blue-600">${option.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                    <ul className="space-y-2">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ));
              })}
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-100 shadow-xl max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Tell Us About Your Project
              </h2>
              <p className="text-gray-600 mb-8">Fill out the form and we'll get back to you with a detailed proposal.</p>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={contactData.name}
                    onChange={e => setContactData({ ...contactData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={contactData.email}
                    onChange={e => setContactData({ ...contactData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={contactData.phone}
                    onChange={e => setContactData({ ...contactData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Company Name</label>
                  <input
                    type="text"
                    value={contactData.company}
                    onChange={e => setContactData({ ...contactData, company: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none"
                    placeholder="Your Company"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block font-semibold mb-2">Project Details *</label>
                  <textarea
                    required
                    value={contactData.message}
                    onChange={e => setContactData({ ...contactData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none h-32"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <div className="md:col-span-2 text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transition-all"
                  >
                    Submit Your Requirements
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Total */}
      {step === 'details' && totalCost > 0 && (
        <div className="fixed bottom-5 right-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-4 z-50">
          <span className="text-2xl font-bold">Total: ${totalCost}</span>
        </div>
      )}
    </div>
  );
}