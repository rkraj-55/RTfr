import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    description: 'Perfect for small businesses just getting started with digital marketing',
    features: [
      'Social Media Management (1 platform)',
      'Basic SEO Setup',
      'Email Template Design',
      'Website Analytics',
      '5 Social Media Posts',
      'Monthly Report'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Premium',
    description: 'Ideal for growing businesses looking to expand their digital presence',
    features: [
      'Social Media Management (3 platforms)',
      'Comprehensive SEO',
      'Email Marketing Campaigns',
      'Google Ads Management',
      '20 Social Media Posts',
      'Lead Generation Strategy',
      'Bi-weekly Reporting',
      'Dedicated Account Manager'
    ],
    cta: 'Get Premium',
    popular: true
  },
  {
    name: 'Professional',
    description: 'Complete solution for established businesses seeking maximum growth',
    features: [
      'Full Social Media Management',
      'Advanced SEO & Content Strategy',
      'PPC Campaign Management',
      'Custom Website Development',
      'Unlimited Social Media Posts',
      'Conversion Rate Optimization',
      'App Development Consultation',
      'Weekly Reporting',
      'Priority Support',
      'Strategy Consultation'
    ],
    cta: 'Contact Us',
    popular: false
  }
];

const PricingSection: React.FC = () => {
  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 bg-gradient-mesh opacity-5"></div>
      
      <div className="container relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Flexible <span className="gradient-text">Solutions</span> for Every Business
          </h2>
          <p className="text-gray-600">Choose the perfect plan that aligns with your business goals</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              <div className={`glass-effect rounded-xl p-8 h-full border transition-all duration-300 relative overflow-hidden ${
                plan.popular 
                  ? 'border-primary shadow-glow' 
                  : 'border-white/20 group-hover:border-primary/20'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-accent text-white text-sm font-medium px-4 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="h-4 w-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600 mb-8">{plan.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        className="flex items-start gap-3"
                      >
                        <div className="rounded-full p-1 bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <a 
                    href="#contact" 
                    className={`flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/20' 
                        : 'bg-gray-100 text-primary hover:bg-gray-200'
                    } group/btn`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="glass-effect inline-block rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
            <p className="text-gray-600 mb-6">Let's create a tailored package that fits your specific requirements</p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
            >
              Request Custom Quote
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;