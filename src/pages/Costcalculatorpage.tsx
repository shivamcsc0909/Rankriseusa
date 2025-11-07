import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Send, FileDown } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  type: 'quantity' | 'toggle';
  unit?: string;
  min?: number;
  selected: boolean;
  quantity: number;
}

export default function CostCalculatorPage() {
  const [packageType, setPackageType] = useState<'landing' | 'full'>('full');
  const [pages, setPages] = useState(7);
  const [services, setServices] = useState<Service[]>([
    { id: 1, name: 'Custom Design', description: 'Unique design from scratch', price: 13, type: 'quantity', unit: 'per hour', min: 0, selected: false, quantity: 0 },
    { id: 2, name: 'Responsive Development', description: 'Mobile-optimized', price: 80, type: 'toggle', selected: false, quantity: 0 },
    { id: 3, name: 'CMS Integration', description: 'WordPress integration', price: 107, type: 'toggle', selected: false, quantity: 0 },
    { id: 4, name: 'E-commerce Setup', description: 'Online store', price: 240, type: 'toggle', selected: false, quantity: 0 },
    { id: 5, name: 'SEO Basic Setup', description: 'Search optimization', price: 47, type: 'toggle', selected: false, quantity: 0 },
    { id: 6, name: 'Hosting with SSL', description: 'Website hosting', price: 7, type: 'quantity', unit: 'per month', min: 1, selected: false, quantity: 12 }
  ]);

  const [contactModal, setContactModal] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', business: '', phone: '', email: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  const calculateSubtotal = () => {
    let total = packageType === 'landing' ? 67 : 200;
    if (packageType === 'full' && pages > 7) {
      total += (pages - 7) * 16;
    }
    services.forEach(service => {
      if (service.type === 'toggle' && service.selected) {
        total += service.price;
      } else if (service.type === 'quantity' && service.quantity > 0) {
        total += service.price * service.quantity;
      }
    });
    return total;
  };

  const subtotal = calculateSubtotal();
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  const toggleService = (id: number) => {
    setServices(services.map(s => s.id === id ? { ...s, selected: !s.selected } : s));
  };

  const updateQuantity = (id: number, value: number) => {
    setServices(services.map(s => s.id === id ? { ...s, quantity: Math.max(s.min || 0, value) } : s));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactModal(false);
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
      window.location.href = '/';
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Web Design Quote Calculator</h1>
          <p className="text-gray-400 text-lg">Select your requirements to get an estimated quote</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Package Selection */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4">Website Package</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => { setPackageType('landing'); setPages(1); }}
                  className={`p-4 rounded-xl cursor-pointer border-2 transition-all ${
                    packageType === 'landing' 
                      ? 'border-yellow-500 bg-yellow-500/10' 
                      : 'border-gray-700 hover:border-yellow-500/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Landing Page</h3>
                      <p className="text-sm text-gray-400">Single page website</p>
                    </div>
                    <div className="text-yellow-500 font-bold">$67</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => { setPackageType('full'); if (pages < 7) setPages(7); }}
                  className={`p-4 rounded-xl cursor-pointer border-2 transition-all ${
                    packageType === 'full' 
                      ? 'border-yellow-500 bg-yellow-500/10' 
                      : 'border-gray-700 hover:border-yellow-500/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Full Website</h3>
                      <p className="text-sm text-gray-400">7 pages included</p>
                    </div>
                    <div className="text-yellow-500 font-bold">$200</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Pages Control */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Number of Pages</h2>
                  <p className="text-gray-400 text-sm">Additional pages beyond included ones</p>
                  {packageType === 'landing' && (
                    <p className="text-xs text-yellow-500 mt-1">Landing page includes only 1 page</p>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => packageType === 'full' && pages > 7 && setPages(pages - 1)}
                      disabled={packageType === 'landing' || pages <= 7}
                      className="w-10 h-10 rounded-full bg-yellow-500 text-black font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-400 transition-all"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={pages}
                      onChange={e => packageType === 'full' && setPages(Math.max(7, parseInt(e.target.value) || 7))}
                      disabled={packageType === 'landing'}
                      className="w-16 text-center bg-gray-700 border border-gray-600 rounded-lg py-2 disabled:opacity-50"
                    />
                    <button
                      onClick={() => packageType === 'full' && setPages(pages + 1)}
                      disabled={packageType === 'landing'}
                      className="w-10 h-10 rounded-full bg-yellow-500 text-black font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-400 transition-all"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-gray-400 text-sm">($16 per page)</div>
                </div>
              </div>
            </div>

            {/* Main Services */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4">Main Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map(service => (
                  <motion.div
                    key={service.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => service.type === 'toggle' && toggleService(service.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      service.selected || service.quantity > 0
                        ? 'border-yellow-500 bg-yellow-500/10'
                        : 'border-gray-700 hover:border-yellow-500/50'
                    } ${service.type === 'toggle' ? 'cursor-pointer' : ''}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-sm">{service.name}</h3>
                      {service.type === 'toggle' && (
                        <div className={`w-10 h-6 rounded-full ${service.selected ? 'bg-yellow-500' : 'bg-gray-600'} relative transition-all`}>
                          <motion.div
                            className="absolute top-1 w-4 h-4 bg-white rounded-full"
                            animate={{ left: service.selected ? '20px' : '4px' }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          />
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{service.description}</p>
                    <p className="text-yellow-500 text-sm font-bold">${service.price} {service.unit || ''}</p>
                    {service.type === 'quantity' && (
                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() => updateQuantity(service.id, service.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-yellow-500 text-black font-bold hover:bg-yellow-400"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={service.quantity}
                          onChange={e => updateQuantity(service.id, parseInt(e.target.value) || 0)}
                          className="w-12 text-center bg-gray-700 border border-gray-600 rounded py-1 text-sm"
                        />
                        <button
                          onClick={() => updateQuantity(service.id, service.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-yellow-500 text-black font-bold hover:bg-yellow-400"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-5">
            <div className="bg-gray-800 rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Your Estimated Quote</h2>
              
              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                <div className="flex justify-between text-sm">
                  <span>{packageType === 'landing' ? 'Landing Page' : 'Full Website (7 pages)'}</span>
                  <span>${packageType === 'landing' ? 67 : 200}</span>
                </div>
                
                {packageType === 'full' && pages > 7 && (
                  <div className="flex justify-between text-sm">
                    <span>Additional Pages ({pages - 7})</span>
                    <span>${(pages - 7) * 16}</span>
                  </div>
                )}
                
                {services.filter(s => (s.type === 'toggle' && s.selected) || (s.type === 'quantity' && s.quantity > 0)).map(service => (
                  <div key={service.id} className="flex justify-between text-sm">
                    <span>{service.name} {service.type === 'quantity' ? `(${service.quantity})` : ''}</span>
                    <span>${service.type === 'toggle' ? service.price : service.price * service.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-700 pt-4 space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-medium">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18%):</span>
                  <span className="font-medium">${gst.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-700 pt-3 flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-yellow-500">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => setContactModal(true)}
                disabled={total === 0}
                className="w-full py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Quote
              </button>

              <p className="text-xs text-gray-400 mt-4 text-center">
                This is an estimate. Contact us for a detailed quote.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {contactModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setContactModal(false)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={e => e.stopPropagation()}
            className="bg-gray-800 rounded-2xl max-w-md w-full p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <button onClick={() => setContactModal(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={contactForm.name}
                  onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-yellow-500 focus:outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Business Name</label>
                <input
                  type="text"
                  required
                  value={contactForm.business}
                  onChange={e => setContactForm({ ...contactForm, business: e.target.value })}
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-yellow-500 focus:outline-none"
                  placeholder="Your Business Inc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={contactForm.phone}
                  onChange={e => setContactForm({ ...contactForm, phone: e.target.value })}
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-yellow-500 focus:outline-none"
                  placeholder="1234567890"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-yellow-500 focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition-all"
              >
                Submit Quote Request
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-800 rounded-2xl max-w-md w-full p-8 text-center"
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p className="text-gray-300 mb-4">Your request is submitted and our team will contact you soon.</p>
            <p className="text-gray-400 text-sm">Redirecting to home page in 5 seconds...</p>
          </motion.div>
        </div>
      )}
    </div>
  );
}