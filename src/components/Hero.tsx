import { motion } from 'framer-motion';
import { Asterisk, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Hero() {
  const participantImages = [
    'https://i.pravatar.cc/150?img=1',
    'https://i.pravatar.cc/150?img=2',
    'https://i.pravatar.cc/150?img=3',
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-2 pb-12">
      {/* Background with padding for spacing */}
      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Container with rounded white background */}
        <main className="relative w-full bg-white rounded-3xl shadow-2xl shadow-gray-500/10 overflow-hidden">
          
          {/* Background Grid and Gradient */}
          <div className="absolute inset-0 z-0">
            {/* Grid Pattern */}
            <div 
              className="absolute inset-0 bg-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(230, 230, 230, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(230, 230, 230, 0.5) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            {/* Yellow Gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-yellow-100/80 via-yellow-50/50 to-transparent" />
          </div>

          {/* Content Grid */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center px-6 sm:px-8 lg:px-12 py-12 lg:py-20">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black text-gray-900 leading-tight">
                Grow Your{' '}
                <span className="inline-flex items-center">
                  <Asterisk className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 mx-2" />
                </span>
                <span className="inline-flex items-center gap-4">
                  <motion.a 
                    href="#" 
                    whileHover={{ scale: 1.05 }} 
                    className="w-24 h-12 sm:w-28 sm:h-14 rounded-full overflow-hidden shadow-lg"
                  >
                    <img 
                      src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Business meeting" 
                      className="w-full h-full object-cover" 
                    />
                  </motion.a>
                  Business,
                </span>
                <br />
                With Us.
              </h1>

              {/* Stats and Circular Text */}
              <div className="flex items-start gap-8 flex-wrap">
                <div>
                  <p className="text-4xl sm:text-5xl font-bold text-gray-900">10+</p>
                  <p className="text-sm text-gray-600 mt-1 max-w-[150px]">
                    Successful brands scaled through strategic marketing.
                  </p>
                </div>
                
                <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                  <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <defs>
                      <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text>
                      <textPath href="#circlePath" className="text-[10px] font-medium tracking-widest uppercase fill-gray-500">
                        Rankriseusa • Business Growth Agency •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-purple-600 rounded-full"/>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-base text-gray-600 max-w-sm">
                We help businesses establish a strong digital identity, attract the right customers, and convert them into long-term growth.
              </p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-6 rounded-xl text-base font-semibold shadow-xl flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Schedule Meeting
                    </Button>
                  </motion.div>
                </Link>

                <Link to="/portfolio">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-6 rounded-xl text-base font-semibold flex items-center gap-2">
                      View Success Stories
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Character */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] lg:h-[600px] -mr-0 sm:-mr-12"
            >
              {/* Main Character Image */}
              <motion.img
                src="/assets/images/character.png"
                alt="3D Character with laptop"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
                animate={{ y: [-10, 10] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              />
              
              {/* Discover More Button */}
              <motion.a 
                href="#"
                whileHover={{ scale: 1.1 }}
                className="absolute top-[15%] sm:top-[20%] right-[10%] sm:right-[15%] flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 sm:py-2 shadow-lg text-xs sm:text-sm font-semibold z-20"
              >
                <span className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-pulse"></span>
                Discover More
              </motion.a>

              {/* Info Card at Bottom */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-[5%] sm:bottom-[10%] right-0 w-full max-w-[280px] sm:max-w-xs bg-white/90 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-200/50 z-20"
              >
                <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                  We Help You Scale Efficiently
                </h4>
                <p className="text-xs text-gray-600 mb-4">
                  Smart strategy. Strong execution. Real, measurable business growth.
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-gray-800 mb-1">Clients</p>
                    <div className="flex -space-x-2">
                      {participantImages.map((src, i) => (
                        <img 
                          key={i} 
                          src={src} 
                          alt={`Participant ${i+1}`} 
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white" 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <Link to="/portfolio">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-black transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </div>

      {/* Floating Up Arrow Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
        whileHover={{ scale: 1.1, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl flex items-center justify-center text-white z-50 hover:shadow-purple-500/50"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}