import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const team = [
    {
      name: 'John Smith',
      role: 'Company CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bgColor: 'bg-orange-100',
    },
    {
      name: 'David Johnson',
      role: 'Co-Founder',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bgColor: 'bg-pink-100',
    },
    {
      name: 'Mary Johnson',
      role: 'Property Managers',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
      bgColor: 'bg-blue-100',
    },
    {
      name: 'Patricia Davis',
      role: 'Estate Consultant',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      bgColor: 'bg-orange-100',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(team.length - 1, prev + 1));
  };

  return (
    <section className="py-8 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 text-foreground/80">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base leading-relaxed">
            Our dedicated team of experienced real estate professionals is at the heart of what we do. With a deep knowledge of the local market and a passion for helping clients achieve their real estate goals.
          </p>
        </motion.div>

        {/* Team Carousel */}
        <div className="relative px-12">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 25}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[calc(25%-18px)]"
                >
                  <div className="flex flex-col items-center">
                    {/* Curved Background Shape with Image */}
                    <div className="relative w-full mb-6">
                      {/* Soft Curved Background - Wave Shape */}
                      <div className={`${member.bgColor} relative overflow-hidden`} style={{ 
                        clipPath: 'ellipse(50% 45% at 50% 45%)',
                        paddingBottom: '120%',
                        width: '100%'
                      }}>
                        {/* Bottom Wave SVG */}
                        <svg 
                          className="absolute bottom-0 w-full" 
                          viewBox="0 0 200 60" 
                          preserveAspectRatio="none"
                          style={{ height: '30%' }}
                        >
                          <path
                            d="M0,30 Q50,0 100,30 T200,30 L200,60 L0,60 Z"
                            fill="white"
                          />
                        </svg>
                        
                        {/* Profile Image */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-6 mt-12">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-16 h-16 rounded-full border-2 border-border hover:bg-transparent hover:border-foreground disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Pagination Dots */}
          <div className="flex gap-3">
            {team.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            disabled={currentIndex === team.length - 1}
            className="w-16 h-16 rounded-full border-2 border-border hover:bg-transparent hover:border-foreground disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
