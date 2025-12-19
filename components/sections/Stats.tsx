"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "$15B+", label: "Secured for Clients", color: "text-accent" },
  { value: "500+", label: "Successful Projects", color: "text-success" },
  { value: "98%", label: "Client Satisfaction", color: "text-successAlt" },
  { value: "50+", label: "States Served", color: "text-primary" },
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              value={stat.value}
              label={stat.label}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

