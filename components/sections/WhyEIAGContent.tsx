"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  Database, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Shield,
  Heart,
  Handshake,
  BarChart3
} from "lucide-react";

const values = [
  "Job creation",
  "Capital investments",
  "Workforce training",
  "Innovation",
  "Expansion",
  "Clean energy investments",
];

const stats = [
  { value: "$15B+", label: "We have secured more than 15 Billion for our clients", icon: DollarSign },
  { value: "95%+", label: "Client Retention", icon: Users },
  { value: "<3%", label: "Team Turnover", icon: TrendingUp },
  { value: "12,000+", label: "Programs tracked across all 50 states", icon: Database },
  { value: "Thousands", label: "EIAG has served more than 12,000 businesses from local manufacturers to national networks", icon: BarChart3 },
];

const teamExpertise = [
  "Financial experts",
  "CPAs",
  "Grant professionals",
  "Site selection advisors",
  "Engineers",
  "Technical analysts",
];

export default function WhyEIAGContent() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-section-lg bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Why EIAG | SITE
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              No business should leave money on the table, especially when it's rightfully theirs.
            </p>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Every year, U.S. businesses leave billions in government incentives unclaimed, not because they don't qualify but because the system can be unclear and complicated to navigate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-section-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
                At EIAG, Our Mission Is Simple
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-accent mb-6">
                Make It Possible and Painless for Businesses to Secure the Funding They Are Entitled to Receive
              </h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                We believe in strengthening American industry by rewarding what matters:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-neutral-700">{value}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Dollars meant to reward growth, capital investment, training, expansion, and innovation shouldn't get lost in paperwork. And we're here to make sure they don't.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white"
            >
              <Target className="h-16 w-16 text-accent mb-6" />
              <h3 className="text-2xl font-black mb-4">Our Commitment</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                We're dedicated to ensuring every eligible business receives the funding they deserve—without the administrative burden.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-white/90">Full lifecycle support</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-white/90">No upfront fees</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-white/90">Proven track record</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-section-lg bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 text-center">
              EIAG Was Founded by a Team of Consultants Who'd Seen One Problem Again and Again
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-card border border-neutral-100">
              <p className="text-xl text-neutral-700 mb-6 leading-relaxed">
                Companies would win a grant or credit—but never see the funds.
              </p>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Why? Because the reporting and compliance required to receive that money or secure the credits were complicated, confusing, and too often left behind by other firms or overburdened internal teams.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed font-semibold">
                We recognized the need for a partner who wouldn't just "point you in the right direction", however, would stay with you through every step, all the way to the finish line.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EIAG is That Partner */}
      <section className="py-section-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
              EIAG is That Partner
            </h2>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Two decades later, we've helped thousands of businesses secure over $15 billion in government grants, tax credits, and financial incentives.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              And while we're proud of that number, what we value most is the trust that got us there.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-section-lg bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                At EIAG, we are professionals with expertise.
              </h2>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                Every member of our team—from our {teamExpertise.join(", ")}, brings 15+ years of experience navigating complex credit, grant, and incentive assignments, as well as location advisory projects.
              </p>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                And when you work with us, you work with a leader in the site selection, credits, and incentives industry. Members of our firm have managed projects for Fortune 50 companies, as well as regional and early-stage companies.
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Our team members are frequently invited to speak at local, regional, and national forums and are often cited in industry-specific publications.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="text-lg text-white font-semibold">
                  With &lt;3% staff turnover and 95%+ client retention, the people you start with are the ones you'll finish with.
                </p>
                <p className="text-white/90 mt-2">
                  Because consistency builds trust—and trust drives results.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <Award className="h-16 w-16 text-accent mb-6" />
              <h3 className="text-3xl font-black mb-6 text-accent">Our Expertise</h3>
              <div className="space-y-4">
                {teamExpertise.map((expertise, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-white text-lg">{expertise}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="text-2xl font-black text-accent mb-2">15+ Years</div>
                <div className="text-white/90">Average experience per team member</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-section-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
                Our Philosophy: No Win, No Fee
              </h2>
            </div>
            <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 shadow-card border border-neutral-100">
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Our industry has a challenge. Many consultants promise the moon or "negotiate" an unreasonable incentive package, oftentimes getting paid a percentage of an award that will never be obtained.
              </p>
              <p className="text-xl text-primary font-bold mb-8">
                We've never worked that way.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">We set clear expectations.</h3>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">We negotiate an incentives package that is well-founded.</h3>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">We formulate a clear strategy to obtain the credits, grants, and incentives that were promised by the government agency or agencies upfront.</h3>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">There are no fees unless we obtain an award and secure the credits, grants, and other abatements.</h3>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Our approach is built on ethics, transparency, and accountability—the reason we've earned the trust of brands like Siemens, SpaceX, Dell, and hundreds more.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-section-lg bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
              The Impact So Far
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100 text-center"
                >
                  <div className="inline-flex p-4 rounded-lg bg-accent/10 mb-4">
                    <Icon className="h-10 w-10 text-accent" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-primary mb-3">{stat.value}</div>
                  <div className="text-neutral-600 font-semibold leading-relaxed">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-lg bg-gradient-to-br from-accent via-accent-light to-accent-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Let's Talk
            </h2>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              Whether this is your first time exploring incentives—or your tenth time being exasperated by the process—we're here to help.
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              We'll walk you through what's available, how it works, and how we stay with you until the funds and credits are secured. No pressure. No fees. Just answers.
            </p>
            <p className="text-xl text-white font-semibold mb-10">
              Ready to see what's available—and make sure you actually get it?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Book Your Free Incentive Review Call</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="pt-8 border-t border-white/20">
              <p className="text-white/90 mb-4">Know someone who should see this?</p>
              <p className="text-lg text-white mb-6">Share our guide with your CPA, board, or operations lead.</p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/20"
              >
                <span>Loop In The Right Person</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

