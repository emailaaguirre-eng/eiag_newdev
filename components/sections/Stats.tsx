"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "$15B+", label: "Incentives Secured for Clients", color: "text-accent" },
  { value: "12,000+", label: "State and Federal Incentives Tracked", color: "text-success" },
  { value: "20+", label: "Years of Experience", color: "text-successAlt" },
  { value: "50+", label: "States Served", color: "text-primary" },
];

const caseStudies = [
  { company: "Ship & Independent School", amount: "$1.2 million", type: "payroll tax refund", location: "MA" },
  { company: "Boat Building Co.", amount: "$200,000", type: "Job Training Award", location: "KY" },
  { company: "Food Manufacturer", amount: "$550,000", type: "California ETP", location: "CA" },
  { company: "Semiconductor Manufacturer", amount: "$5.5 million", type: "Job Creation/Capex Grant/Tax Credit", location: "AZ" },
  { company: "Computer Manufacturer", amount: "$280 million", type: "incentives package", location: "Southeastern United States" },
];

function AnimatedCounter({ value, label, color }: { value: string; label: string; color: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className={`text-5xl md:text-6xl font-black ${color} mb-2`}>
        {value}
      </div>
      <div className="text-neutral-600 font-semibold text-lg">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">
            EIAG Delivers: $15 Billion+ in Incentives Secured for Clients
          </h2>
          <p className="text-lg text-neutral-600">
            For companies of all sizes, across every U.S. state.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              value={stat.value}
              label={stat.label}
              color={stat.color}
            />
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-black text-primary mb-8 text-center">Recent Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-card border border-neutral-100"
              >
                <div className="text-2xl font-black text-accent mb-2">{study.amount}</div>
                <div className="font-bold text-primary mb-1">{study.company}</div>
                <div className="text-sm text-neutral-600 mb-1">{study.type}</div>
                <div className="text-xs text-neutral-500">{study.location}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

