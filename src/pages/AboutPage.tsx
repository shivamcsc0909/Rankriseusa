import { motion } from 'framer-motion';
import About from '../components/About';
import Team from '../components/Team';
import { Target, Eye, Award, Users, Rocket, Globe, TrendingUp, Heart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { 
      icon: Target, 
      title: 'Our Mission', 
      description: 'Empower businesses with cutting-edge digital solutions that drive exponential growth, maximize ROI, and create lasting competitive advantages in the digital landscape.',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Eye, 
      title: 'Our Vision', 
      description: 'To redefine digital excellence by becoming the most trusted growth partner for businesses worldwide, setting new standards in innovation and client success.',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Award, 
      title: 'Excellence', 
      description: 'We maintain uncompromising quality standards across every project, delivering exceptional results that exceed expectations and drive measurable outcomes.',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: Users, 
      title: 'Partnership', 
      description: 'Building collaborative, long-term relationships based on transparency, trust, and shared success. Your growth is our ultimate priority.',
      color: 'from-orange-500 to-red-500'
    },
  ];

  const milestones = [
    { year: '2020', event: 'Rankriseusa Founded', description: 'Started with a vision to transform digital marketing' },
    { year: '2021', event: 'First 50 Clients', description: 'Successfully served 50+ satisfied businesses' },
    { year: '2022', event: 'Team Expansion', description: 'Grew to 15+ digital experts and specialists' },
    { year: '2023', event: 'Industry Recognition', description: 'Awarded for excellence in digital innovation' },
    { year: '2024', event: 'Global Reach', description: 'Expanding services to international markets' },
  ];

  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-medium">Digital Growth Partners</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Driving <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Digital Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              We are a passionate team of digital innovators, strategists, and technologists dedicated to transforming businesses through data-driven marketing, advanced technology, and relentless optimization.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Global Digital Agency</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Proven Results</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>Client-Focused</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <About />

      {/* Enhanced Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our approach and define our commitment to client success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="relative rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Milestones in our growth and commitment to digital excellence
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 to-secondary/20" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2 pr-8 pl-8">
                  <div className={`p-6 rounded-2xl shadow-lg border border-border/50 bg-background hover:shadow-xl transition-all duration-300 ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <div className="text-2xl font-bold text-gradient mb-2">{milestone.year}</div>
                    <h3 className="text-lg font-bold mb-2">{milestone.event}</h3>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg border-2 border-background" />
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of successful businesses that have transformed their digital presence with Rankriseusa
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300">
                Start Your Transformation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}