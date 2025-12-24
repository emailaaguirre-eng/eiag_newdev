"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, DollarSign, CheckCircle2, Users, Award, Database, Clock } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "Step 1",
    title: "Tell Us What You're Working On",
    description: "Hiring? Expanding? Training employees? Innovating? We'll listen, then match you with the best-fit funding options.",
    icon: MessageSquare,
  },
  {
    number: "Step 2",
    title: "We Handle the Hard Stuff",
    description: "Paperwork? Deadlines? Reporting? We take it off your plate and put it on ours. We are highly efficient.",
    icon: FileText,
  },
  {
    number: "Step 3",
    title: "You Get The Money",
    description: "This is why you hire us. We stay with you until you've obtained all your incentive funding.",
    icon: DollarSign,
  },
];

const benefits = [
  {
    icon: Users,
    title: "Real Expertise",
    description: "Every member of our team has a minimum of 12 years of experience in credits and incentives, grants, site selection, and senior leadership roles.",
  },
  {
    icon: DollarSign,
    title: "$15 Billion+ Secured",
    description: "From manufacturers and hospitals to tech innovators, we've helped businesses of all sizes unlock major funding.",
  },
  {
    icon: Award,
    title: "No upfront costs. Ever.",
    description: "We only get paid when you do. If no funding is secured, you owe us nothing.",
  },
  {
    icon: Database,
    title: "We Track 12,000+ Programs",
    description: "We're the only firm with a real-time database of national and state-level incentive programs.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Support",
    description: "We don't stop at applying. We stay with you through reporting—so the money actually lands in your account or on your tax return.",
  },
  {
    icon: Clock,
    title: "Location Study",
    description: "Where your business is located is imperative to your success. Learn about our proprietary site selection and labor models.",
  },
];

export default function Process() {
  return (
    <section className="py-section-lg bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Unlocking Incentives with Precision and Purpose
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Over the past two decades, we have perfected the process to identify, apply for, and secure incentives nationwide.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100"
              >
                <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-primary to-primary-dark mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-sm font-bold text-accent mb-2">{step.number}</div>
                <h3 className="text-2xl font-black text-primary mb-4">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-black text-primary mb-12 text-center">
            Why Choose EIAG?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100"
                >
                  <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-xl font-black text-primary mb-3">{benefit.title}</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <span>Book Your Free Incentive Review Call</span>
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

