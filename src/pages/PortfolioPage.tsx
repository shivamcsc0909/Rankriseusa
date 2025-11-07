import { motion } from 'framer-motion';
import Portfolio from '../components/Portfolio';

export default function PortfolioPage() {
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
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our successful projects and the transformative results we've delivered for our clients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <Portfolio />
    </div>
  );
}
