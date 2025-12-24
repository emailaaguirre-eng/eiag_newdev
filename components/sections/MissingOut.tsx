"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

const eligibilityItems = [
  "Hiring or Training",
  "Expanding or Relocating",
  "Investing in Clean Energy or Efficiency",
  "Upgrading Systems or Equipment",
  "Doing Any Kind of Research & Development",
];

export default function MissingOut() {
  return (
    <section className="py-section-lg bg-white">
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
              Are You Missing Out on Free Government Money?
            </h2>
            <p className="text-xl text-neutral-600 mb-6 leading-relaxed">
              There are over <span className="font-bold text-primary">12,000 government incentive programs</span> available right now—however, most go unclaimed.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <p className="text-neutral-700">They're hard to find, constantly changing, and buried in fine print.</p>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <p className="text-neutral-700">Your CPA isn't tracking them (that's not really their job).</p>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <p className="text-neutral-700">And when you've got a business to run, it's probably not yours either.</p>
              </div>
            </div>
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
              <p className="text-lg font-semibold text-primary mb-4">
                However, if you are:
              </p>
              <ul className="space-y-3">
                {eligibilityItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-lg font-semibold text-primary mt-6">
                …you might already qualify.
              </p>
            </div>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              At EIAG, we don't just point to what's possible—we carry the load.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              We stay with you through reporting, compliance, and every deadline in between, so you don't just win the grant—you actually get the money. And no, you don't owe us a thing unless funding comes through.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Discover Our Process</span>
              <span>→</span>
            </Link>
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
                  <div className="text-5xl font-black text-accent mb-2">12,000+</div>
                  <div className="text-white/90 text-lg">State and Federal Incentives</div>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-white/90 text-lg mb-4">
                    There's a reason these incentives go unclaimed every year. With so many programs to track, it's easy to miss out—and that's exactly where we come in.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

