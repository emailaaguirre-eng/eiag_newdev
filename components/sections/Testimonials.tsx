"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "EIAG helped us secure over $2 million in tax credits we didn't even know we qualified for. Their expertise is unmatched.",
    author: "Sarah Johnson",
    role: "CFO, Tech Innovations Inc.",
    rating: 5,
  },
  {
    quote:
      "The team at EIAG made the entire process seamless. They handled everything from application to compliance, allowing us to focus on our business.",
    author: "Michael Chen",
    role: "CEO, Manufacturing Solutions",
    rating: 5,
  },
  {
    quote:
      "Working with EIAG was a game-changer. Their strategic approach to site selection saved us millions in operational costs.",
    author: "Emily Rodriguez",
    role: "VP Operations, Retail Group",
    rating: 5,
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100 h-full"
    >
      <Quote className="h-8 w-8 text-accent mb-4" />
      <p className="text-neutral-700 text-lg leading-relaxed mb-6">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-success text-success" />
        ))}
      </div>
      <div>
        <div className="font-bold text-primary">{testimonial.author}</div>
        <div className="text-neutral-600 text-sm">{testimonial.role}</div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-section-lg bg-neutral-50">
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Trusted by businesses across industries to maximize their economic
            incentives and reduce costs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
          />
          ))}
        </div>
      </div>
    </section>
  );
}

