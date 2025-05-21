import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart, Users, Rocket, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="section bg-gradient-to-b from-gray-900 to-primary relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDEtMy42NjcgMy01IDEuMzMzLTIuMzMzIDEtNC42NjctMS02LTItMS4zMzMtMy42NjctMS0yIDEgMS42NjcgMiAyLjMzMyA0LjMzMyAyIDcgMCAyLjY2Ny0uNjY3IDQtMiA0LTEuMzMzIDAtMi0xLTItMyAwLTIgMS00IDMtNiAyLTIgMS00LjY2Ny0zLTgtNC0zLjMzMy02LjY2Ny01LTgtNS0xLjMzMyAwLTIuMzMzLjY2Ny0zIDIiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5"></div>
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <motion.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
            >
              <div className="text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-6 w-6 text-accent" />
                  <p className="text-xl font-semibold">Team Strength</p>
                </div>
                <p className="text-3xl font-bold mb-1">50+</p>
                <p className="text-sm opacity-80">Digital Experts</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
            >
              <div className="text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Rocket className="h-6 w-6 text-accent" />
                  <p className="text-xl font-semibold">Eager to Grow</p>
                </div>
                <p className="text-3xl font-bold mb-1">Focused on You</p>
                <p className="text-sm opacity-80">Client Satisfaction Matters ❤️</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Driving Digital <span className="text-accent">Excellence</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 text-lg mb-12"
            >
              We're more than just a digital agency. We're your strategic partner in navigating the digital landscape and achieving sustainable growth.
            </motion.p>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/20">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-accent">Our Mission</h3>
                    <p className="text-white/80">
                      To empower businesses with innovative digital solutions that drive measurable growth and lasting success in an ever-evolving digital landscape.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/20">
                    <Lightbulb className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-accent">Our Vision</h3>
                    <p className="text-white/80">
                      To be the catalyst for digital transformation, setting new standards in innovation and client success across the global digital landscape.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-accent/20">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-accent">Our Values</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      icon: <Rocket className="h-5 w-5" />,
                      title: 'Innovation',
                      description: 'Pushing boundaries in digital solutions'
                    },
                    {
                      icon: <Shield className="h-5 w-5" />,
                      title: 'Integrity',
                      description: 'Trust through transparency'
                    },
                    {
                      icon: <Target className="h-5 w-5" />,
                      title: 'Impact',
                      description: 'Delivering measurable results'
                    }
                  ].map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:border-accent/50 transition-colors group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-accent group-hover:scale-110 transition-transform">
                          {value.icon}
                        </div>
                        <h4 className="font-semibold group-hover:text-accent transition-colors">
                          {value.title}
                        </h4>
                      </div>
                      <p className="text-sm text-white/60">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;