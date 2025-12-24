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
            You Might Be One Call Away from Funding You Didn't Know Existed
          </h2>
          <p className="text-xl text-white/90 mb-6 leading-relaxed">
            Whether you're training, hiring, upgrading, or growing—there's probably something out there for you. Let's talk through it.
          </p>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            Let us send you a quick, no-strings-attached snapshot of the programs you may qualify for—based on your industry, location, and growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="group bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Book Your Free Incentive Review Call</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-white/90 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-success">✅</span>
              <span>Takes under 2 minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-success">✅</span>
              <span>No obligation, no hard sell</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-success">✅</span>
              <span>Customized to your business</span>
            </div>
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

