import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Share2, Megaphone, Code, PenTool, Palette, Sparkles, Calculator, X, Check, Shield, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCategory {
  title: string;
  icon: string;
  items: string[];
}

interface PricingPlan {
  name: string;
  icon: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular: boolean;
  features: string[];
  services: ServiceCategory[];
}

interface PricingData {
  [key: string]: PricingPlan[];
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCategory, setSelectedCategory] = useState('seo');
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pricingData: PricingData = {
    seo: [
      {
        name: 'SEO Starter Plan',
        icon: 'rocket',
        monthlyPrice: 200,
        yearlyPrice: 2040,
        popular: false,
        features: ['5 Keywords Tracking', 'Basic On-Page SEO', 'Monthly Reports', 'Email Support'],
        services: [
          { title: 'SEO ANALYSIS', icon: 'chart', items: ['Keyword Research & Analysis', 'Baseline Ranking Check', 'Duplicate Content Check', 'Google Penalty Check'] },
          { title: 'ON-PAGE OPTIMIZATION', icon: 'settings', items: ['Title Tag Optimization', 'META Tags Optimization', 'Content Optimization', 'Image Alt Tags', 'Internal Linking'] }
        ]
      },
      {
        name: 'SEO Basic Plan',
        icon: 'chart',
        monthlyPrice: 300,
        yearlyPrice: 3060,
        popular: false,
        features: ['10 Keywords Tracking', 'On-Page SEO', 'Technical Audit', 'Bi-weekly Reports', 'Priority Support'],
        services: [{ title: 'SEO ANALYSIS', icon: 'chart', items: ['Keyword Research & Analysis', 'Competitor Analysis', 'Baseline Ranking Check'] }]
      },
      {
        name: 'SEO Standard Plan',
        icon: 'star',
        monthlyPrice: 450,
        yearlyPrice: 4590,
        popular: true,
        features: ['25 Keywords Tracking', 'Link Building', 'Content Optimization', 'Competitor Analysis', 'Weekly Reports', 'Dedicated Manager'],
        services: [{ title: 'COMPLETE SEO', icon: 'chart', items: ['Everything in Basic', 'Advanced Link Building', 'Content Strategy'] }]
      },
      {
        name: 'SEO Premium Plan',
        icon: 'crown',
        monthlyPrice: 700,
        yearlyPrice: 7140,
        popular: false,
        features: ['50 Keywords Tracking', 'Advanced Technical SEO', 'Local SEO', 'Content Creation', 'Daily Monitoring'],
        services: []
      },
      {
        name: 'SEO Enterprise Plan',
        icon: 'building',
        monthlyPrice: 1200,
        yearlyPrice: 12240,
        popular: false,
        features: ['Unlimited Keywords', 'Full SEO Suite', 'Custom Strategy', 'White-label Reports', '24/7 Support'],
        services: []
      }
    ],
    smo: [
      { name: 'Starter SMO', icon: 'rocket', monthlyPrice: 300, yearlyPrice: 3060, popular: false, features: ['2 Social Platforms', '10 Posts per Month', 'Basic Analytics'], services: [] },
      { name: 'Professional SMO', icon: 'chart', monthlyPrice: 500, yearlyPrice: 5100, popular: true, features: ['4 Social Platforms', '20 Posts per Month', 'Advanced Analytics'], services: [] },
      { name: 'Enterprise SMO', icon: 'crown', monthlyPrice: 800, yearlyPrice: 8160, popular: false, features: ['All Platforms', '30+ Posts', 'Influencer Outreach'], services: [] }
    ],
    ppc: [
      { name: 'Starter PPC', icon: 'rocket', monthlyPrice: 500, yearlyPrice: 5100, popular: false, features: ['Google Ads Setup', '$1000 Ad Budget'], services: [] },
      { name: 'Professional PPC', icon: 'chart', monthlyPrice: 900, yearlyPrice: 9180, popular: true, features: ['Multi-Platform', '$2500 Budget', 'A/B Testing'], services: [] }
    ],
    'web-dev': [
      { name: 'Basic Website', icon: 'code', monthlyPrice: 1000, yearlyPrice: 10200, popular: false, features: ['5 Pages', 'Responsive Design', 'SEO Friendly'], services: [] },
      { name: 'Professional Website', icon: 'desktop', monthlyPrice: 2000, yearlyPrice: 20400, popular: true, features: ['10 Pages', 'Custom Design', 'CMS'], services: [] }
    ],
    content: [
      { name: 'Starter Content', icon: 'pen', monthlyPrice: 250, yearlyPrice: 2550, popular: false, features: ['4 Blog Posts', 'SEO Optimization'], services: [] },
      { name: 'Professional Content', icon: 'edit', monthlyPrice: 500, yearlyPrice: 5100, popular: true, features: ['8 Blog Posts', 'Graphics Included'], services: [] }
    ],
    branding: [
      { name: 'Basic Branding', icon: 'brush', monthlyPrice: 500, yearlyPrice: 5100, popular: false, features: ['Logo Design', 'Color Palette'], services: [] },
      { name: 'Professional Branding', icon: 'palette', monthlyPrice: 1000, yearlyPrice: 10200, popular: true, features: ['Complete Logo Suite', 'Brand Guide'], services: [] }
    ]
  };

  const categories = [
    { id: 'seo', name: 'SEO', Icon: Search },
    { id: 'smo', name: 'SMO', Icon: Share2 },
    { id: 'ppc', name: 'PPC', Icon: Megaphone },
    { id: 'web-dev', name: 'Web Dev', Icon: Code },
    { id: 'content', name: 'Content', Icon: PenTool },
    { id: 'branding', name: 'Branding', Icon: Palette }
  ];

  const openModal = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const toggleBilling = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-24 pb-16">
      {/* Fixed Buttons - Desktop */}
      <div className="hidden lg:block">
        <Link
          to="/custom-plan"
          className="fixed left-5 top-30 z-50 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
        >
          <Sparkles className="w-5 h-5" />
          Design Your Custom Plan
        </Link>
        <Link
          to="/cost-calculator"
          className="fixed right-5 top-30 z-50 flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
        >
          <Calculator className="w-5 h-5" />
          Calculate Website Cost
        </Link>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-blue-100 border border-blue-300 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            Transparent Pricing
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Flexible pricing plans designed to grow with your business
          </p>
          <div className="flex justify-center items-center gap-2">
            <div className="h-0.5 w-5 bg-gradient-to-r from-transparent to-blue-600"></div>
            <div className="h-0.5 w-10 bg-blue-600"></div>
            <div className="h-0.5 w-5 bg-gradient-to-l from-transparent to-blue-600"></div>
          </div>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="flex justify-center items-center gap-4 mb-12">
          <span className={`font-medium ${billingCycle === 'monthly' ? 'text-blue-600' : 'text-gray-500'}`}>Monthly</span>
          <button
            onClick={toggleBilling}
            className={`relative w-16 h-8 rounded-full ${billingCycle === 'yearly' ? 'bg-blue-200' : 'bg-blue-100'} border-2 border-blue-300`}
          >
            <motion.div
              className="absolute top-0.5 w-7 h-7 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
              animate={{ left: billingCycle === 'monthly' ? '2px' : '30px' }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`font-medium ${billingCycle === 'yearly' ? 'text-blue-600' : 'text-gray-500'}`}>
            Yearly
            <span className="ml-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-lg">15% OFF</span>
          </span>
        </motion.div>

        {/* Mobile Fixed Buttons */}
        <div className="lg:hidden flex flex-col gap-3 mb-8">
          <Link to="/custom-plan" className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-7 py-3.5 rounded-full font-semibold shadow-xl">
            <Sparkles className="w-5 h-5" />
            Design Your Custom Plan
          </Link>
          <Link to="/cost-calculator" className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-7 py-3.5 rounded-full font-semibold shadow-xl">
            <Calculator className="w-5 h-5" />
            Calculate Website Cost
          </Link>
        </div>

        {/* Service Categories */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const { Icon } = category;
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 min-w-[100px] transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-600 shadow-xl'
                    : 'bg-white border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  selectedCategory === category.id ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg' : 'bg-blue-100 text-blue-600'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-sm">{category.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div key={selectedCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-wrap justify-center gap-6">
            {pricingData[selectedCategory]?.map((plan, index) => {
              const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative bg-white rounded-2xl p-8 border-2 shadow-lg hover:shadow-2xl transition-all w-[280px] ${
                    plan.popular ? 'border-blue-600 shadow-blue-200' : 'border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 right-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                      POPULAR
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-6">
                    <h3 className={`text-xl font-bold ${plan.popular ? 'text-blue-600' : 'text-gray-900'}`}>{plan.name}</h3>
                  </div>
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    ${price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openModal(plan)}
                    className={`w-full rounded-xl py-3 px-6 font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl'
                        : 'bg-blue-100 text-blue-600 border-2 border-blue-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white'
                    }`}
                  >
                    Get Started
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border-2 border-blue-200 relative"
            >
              <button
                onClick={closeModal}
                className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full border-2 border-blue-600 flex items-center justify-center shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all hover:rotate-90 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b-2 border-blue-100 p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {selectedPlan.name}
                    </h3>
                    <p className="text-gray-600">All Services Included - Complete Package Details</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      ${billingCycle === 'monthly' ? selectedPlan.monthlyPrice : selectedPlan.yearlyPrice}
                    </div>
                    <div className="text-sm text-gray-500">{billingCycle === 'monthly' ? 'per month' : 'per year'}</div>
                  </div>
                </div>
              </div>

              <div className="p-8 overflow-y-auto max-h-[50vh] bg-gray-50">
                {selectedPlan.services.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedPlan.services.map((service, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
                        <h4 className="text-xl font-semibold text-blue-600 mb-4">{service.title}</h4>
                        <ul className="space-y-2">
                          {service.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-gray-400 py-8">Services details coming soon...</div>
                )}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-t-2 border-blue-100 p-6 flex justify-between items-center flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="w-5 h-5 text-green-500" />
                  Have any query? Ask here
                </div>
                <div className="flex gap-4">
                  <button onClick={closeModal} className="border-2 border-blue-300 hover:bg-blue-100 rounded-xl px-6 py-2 font-semibold transition-all">
                    Cancel
                  </button>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl rounded-xl px-8 py-2 font-semibold transition-all flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Pay Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}