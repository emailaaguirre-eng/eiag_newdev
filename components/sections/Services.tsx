"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  DollarSign,
  Building2,
  MapPin,
  FileText,
  TrendingUp,
  Award,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: DollarSign,
    title: "Federal Hiring Credits",
    description:
      "Maximize your federal tax credits including Work Opportunity Tax Credit (WOTC) and other employment-based incentives.",
    color: "from-primary to-primary-dark",
    iconColor: "text-primary",
  },
  {
    icon: Building2,
    title: "State Tax Credits",
    description:
      "Navigate complex state incentive programs to secure hiring credits, training grants, and economic development incentives.",
    color: "from-accent to-accent-dark",
    iconColor: "text-accent",
  },
  {
    icon: MapPin,
    title: "Site Selection",
    description:
      "Strategic location analysis to identify the best incentives, tax structures, and economic development opportunities.",
    color: "from-success to-success-dark",
    iconColor: "text-success",
  },
  {
    icon: FileText,
    title: "R&D Tax Credits",
    description:
      "Identify and claim Research & Development tax credits for qualifying activities and innovation investments.",
    color: "from-successAlt to-successAlt-dark",
    iconColor: "text-successAlt",
  },
  {
    icon: TrendingUp,
    title: "Economic Development",
    description:
      "Comprehensive economic development incentive programs including grants, loans, and tax abatements.",
    color: "from-primary to-accent",
    iconColor: "text-primary",
  },
  {
    icon: Award,
    title: "Incentive Compliance",
    description:
      "Ongoing compliance management and reporting to ensure you maintain eligibility and maximize benefits.",
    color: "from-accent to-success",
    iconColor: "text-accent",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="group h-full bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100 hover:border-accent hover:-translate-y-1">
        <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${service.color} bg-opacity-10 mb-6`}>
          <Icon className={`h-8 w-8 ${service.iconColor}`} />
        </div>
        <h3 className="text-2xl font-black text-primary mb-4">{service.title}</h3>
        <p className="text-neutral-600 leading-relaxed mb-6">{service.description}</p>
        <Link
          href="/services"
          className="text-accent font-semibold hover:text-accent-dark transition-colors duration-200 inline-flex items-center space-x-2"
        >
          <span>Learn More</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="py-section-lg bg-white">
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
            Our Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive economic incentive solutions to maximize your business
            opportunities and reduce costs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <span>View All Services</span>
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

