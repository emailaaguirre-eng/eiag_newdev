"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <TrendingUp className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold">Trusted by Industry Leaders</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Maximize Your
              <span className="block text-accent"> Economic Incentives</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Securing over <span className="font-bold text-accent">$15 billion</span> in government
              funding and tax credits for businesses nationwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group bg-accent text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-light transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/20"
              >
                Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-8 text-sm">
              <div>
                <div className="text-3xl font-black text-accent">$15B+</div>
                <div className="text-white/80">Secured for Clients</div>
              </div>
              <div>
                <div className="text-3xl font-black text-accent">500+</div>
                <div className="text-white/80">Successful Projects</div>
              </div>
              <div>
                <div className="text-3xl font-black text-accent">98%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="bg-white/5 rounded-lg p-4 border border-white/10"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="h-3 bg-white/20 rounded-full w-24"></div>
                      <div className="h-3 bg-accent rounded-full w-16"></div>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full w-full"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}

