"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-section-lg bg-gradient-to-br from-accent via-accent-light to-accent-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Maximize Your Incentives?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Let's discuss how we can help secure millions in economic incentives
            for your business. Get started with a free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="group bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/20"
            >
              Learn More
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/90">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>(123) 456-7890</span>
            </a>
            <a
              href="mailto:info@eiag.com"
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>info@eiag.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

