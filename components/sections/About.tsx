"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Proven Track Record",
    description: "Over $15 billion secured in economic incentives for clients across all industries.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Deep expertise in federal and state incentive programs with decades of combined experience.",
  },
  {
    icon: Zap,
    title: "Results-Driven",
    description: "We focus on maximizing your benefits while ensuring full compliance and risk mitigation.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Support",
    description: "From initial assessment through application, approval, and ongoing compliance management.",
  },
];

export default function About() {
  return (
    <section className="py-section-lg bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
              Why Choose EIAG?
            </h2>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Economic Incentives Advisory Group is the leading expert in securing
              government funding and tax credits for businesses. Our comprehensive
              approach ensures you maximize every opportunity.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              With a proven track record of securing over $15 billion in incentives,
              we combine deep regulatory knowledge with strategic business insight to
              deliver exceptional results for our clients.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-black text-accent mb-2">$15B+</div>
                  <div className="text-white/90 text-lg">Total Incentives Secured</div>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-black mb-1">500+</div>
                      <div className="text-white/80 text-sm">Projects</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black mb-1">50+</div>
                      <div className="text-white/80 text-sm">States</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black mb-1">98%</div>
                      <div className="text-white/80 text-sm">Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black mb-1">15+</div>
                      <div className="text-white/80 text-sm">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

