import { motion } from 'framer-motion';
import Blog from '../components/Blog';

export default function BlogPage() {
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
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest trends, strategies, and insights in digital marketing and technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <Blog />
    </div>
  );
}
