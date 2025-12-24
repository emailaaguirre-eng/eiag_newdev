"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  MapPin, 
  Users, 
  Truck, 
  Building2, 
  Network, 
  Target, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Award,
  BarChart3
} from "lucide-react";

const selectionFactors = [
  {
    icon: Users,
    title: "Labor Market Conditions",
    description: "Align talent availability and cost with your workforce needs.",
    color: "from-primary to-primary-dark",
  },
  {
    icon: Truck,
    title: "Logistics & Access",
    description: "Evaluate transportation networks, infrastructure, and accessibility.",
    color: "from-accent to-accent-dark",
  },
  {
    icon: Building2,
    title: "Competitive Landscape",
    description: "Understand market dynamics and competitive positioning.",
    color: "from-success to-success-dark",
  },
  {
    icon: Network,
    title: "Supply Chain Compatibility",
    description: "Assess supply chain efficiency and vendor proximity.",
    color: "from-successAlt to-successAlt-dark",
  },
  {
    icon: Target,
    title: "Market Reach",
    description: "Analyze customer accessibility and market potential.",
    color: "from-primary to-accent",
  },
  {
    icon: DollarSign,
    title: "Cost of Doing Business",
    description: "Comprehensive cost analysis including taxes, utilities, and operational expenses.",
    color: "from-accent to-success",
  },
  {
    icon: BarChart3,
    title: "Evaluation of Overlapping Operations",
    description: "Optimize existing operations and identify consolidation opportunities.",
    color: "from-success to-primary",
  },
  {
    icon: Award,
    title: "Incentives & Support",
    description: "Maximize government incentives and economic development support.",
    color: "from-successAlt to-accent",
  },
];

const benefits = [
  "Identify Optimal Markets",
  "Control Labor Costs",
  "Maximize Government Incentives",
];

export default function SiteSelectionContent() {
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
              Smart Growth Starts with the Right Location
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              At EIAG | SITE, we help companies grow with confidence by identifying the best locations for expansion driven by data, guided strategy, and tailored to your unique goals.
            </p>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Whether you're opening a new facility, relocating operations, scaling up, consolidating, or need an assessment of an acquisition, our custom site selection studies take a 360-degree view of what matters most.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-accent text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Site Selection Case Studies Placeholder */}
      <section className="py-section-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8">
              Site Selection Case Studies
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Our proven track record speaks for itself. Explore how we've helped companies make strategic location decisions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: num * 0.05 }}
                  className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg flex items-center justify-center text-neutral-400 font-bold text-xl hover:from-primary hover:to-primary-dark hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {num}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selection Factors */}
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
              Comprehensive Site Evaluation
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We analyze every critical factor to ensure your location decision supports your long-term success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {selectionFactors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100 hover:border-accent hover:-translate-y-1"
                >
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${factor.color} mb-4`}>
                    <Icon className={`h-8 w-8 text-white`} />
                  </div>
                  <h3 className="text-xl font-black text-primary mb-3">{factor.title}</h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">{factor.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section-lg bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-neutral-200"
          >
            <h3 className="text-2xl font-black text-primary mb-4">
              Do you only work with large companies?
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed">
              No. While we've represented a significant portion of the Fortune 500, we work with companies of all sizes—from startups to enterprise organizations. Every study we provide is fully customized, because no two companies, or locations, are the same.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Incentives Administration */}
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
                Incentives Administration
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-accent mb-6">
                Identify Optimal Markets | Control Labor Costs | Maximize Government Incentives
              </h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Let us help you turn location into a competitive advantage.
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                We've represented a significant portion of the Fortune 500, delivering millions in labor cost savings while positioning our clients in regions that support their long-term operating objectives.
              </p>
              <p className="text-lg text-white/80 mb-10 leading-relaxed">
                Every study we provide is fully customized, because no two companies, or locations, are the same.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-accent text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Get Your Custom Study</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-3xl font-black mb-8 text-accent">What You Get</h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-8 w-8 text-accent" />
                    </div>
                    <span className="text-white text-lg font-semibold">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-black text-accent mb-1">500+</div>
                    <div className="text-white/80 text-sm">Fortune 500 Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-accent mb-1">20+</div>
                    <div className="text-white/80 text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
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
              Turn Location into a Competitive Advantage
            </h2>
            <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
              Our data-driven approach combines labor market analysis, cost modeling, and incentive optimization to deliver location strategies that drive real business results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-xl p-6 border border-neutral-100">
                <TrendingUp className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-black text-primary mb-2">Data-Driven Decisions</h3>
                <p className="text-neutral-600">Comprehensive analysis backed by proprietary databases and market intelligence.</p>
              </div>
              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-xl p-6 border border-neutral-100">
                <Award className="h-12 w-12 text-success mb-4" />
                <h3 className="text-xl font-black text-primary mb-2">Proven Results</h3>
                <p className="text-neutral-600">Millions in cost savings and optimal locations for Fortune 500 companies.</p>
              </div>
              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-xl p-6 border border-neutral-100">
                <MapPin className="h-12 w-12 text-successAlt mb-4" />
                <h3 className="text-xl font-black text-primary mb-2">Fully Customized</h3>
                <p className="text-neutral-600">Every study tailored to your unique business needs and objectives.</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Schedule Your Site Selection Study</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

