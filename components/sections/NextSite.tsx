"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, TrendingUp, Clock, Shield } from "lucide-react";

export default function NextSite() {
  return (
    <section className="py-section-lg bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Your Next Site Could Be Your Smartest Investment
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We help you choose locations that align with your workforce needs and financial goals. From labor market validation to incentive negotiation, our integrated approach ensures you land in the right place with the right support.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-accent text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Discover How</span>
              <span>→</span>
            </Link>
          </motion.div>

          {/* Right Content - Why Timing Is Important */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-3xl font-black mb-6 text-accent">Why Timing Is Important</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-accent">Many Programs Are First-Come, First-Served</h4>
                  <p className="text-white/90">If you wait, the funding could be gone.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-accent">You Pay Nothing Unless You Benefit</h4>
                  <p className="text-white/90">That's our guarantee.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <TrendingUp className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-accent">We Stay Current So You Don't Have To</h4>
                  <p className="text-white/90">We make sure everything is compliant, accurate, and on time.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <Link
                href="/contact"
                className="block w-full bg-white text-primary px-6 py-3 rounded-lg font-bold text-center hover:bg-neutral-50 transition-colors duration-200"
              >
                Get My Free Funding Report Now
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

