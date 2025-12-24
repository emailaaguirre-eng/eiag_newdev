"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Heart, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle2,
  Clock,
  Target,
  Globe
} from "lucide-react";

const leadership = [
  { name: "Bryant Colman", title: "Managing Principal" },
  { name: "Meggie Chapman", title: "Partner" },
  { name: "Lisa Prichard", title: "Managing Director-Partner" },
  { name: "George-Ann Blake", title: "Associate Director" },
  { name: "Liz Pierson", title: "Associate Director" },
  { name: "Andrea Aguirre", title: "Operations" },
  { name: "Barbara Sutton", title: "Associate Director" },
  { name: "Colby Shipley", title: "Manager, Incentives Research" },
  { name: "Patrick Shipley", title: "Manager, Administration & Compliance" },
];

const coreValues = [
  {
    icon: Clock,
    title: "Power of Longevity",
    description: "For 23 years, EIAG has been dedicated to continuous improvement, education, and ongoing capacity building. We are proud to operate a thriving organization that grows alongside our valued customers.",
    color: "from-primary to-primary-dark",
  },
  {
    icon: Heart,
    title: "Customer-centered philosophy",
    description: "It is our customers' trust that has enabled us to achieve success in the market. Whether your business is large or small, we are here to assist you. EIAG's culture is to put the client first and connect our clients with opportunities that best meet their unique needs.",
    color: "from-accent to-accent-dark",
  },
  {
    icon: TrendingUp,
    title: "Value Driven Results",
    description: "EIAG | SITE is a value-driven organization. If we are not able to deliver enormous benefit to a client, we will not engage in a project. After we complete an incentives assignment or identify the optimal location for a client, the ROI upon completion often exceeds 400%.",
    color: "from-success to-success-dark",
  },
  {
    icon: Globe,
    title: "Diversity, Equity and Inclusion",
    description: "EIAG embraces, supports, and accepts individuals of all racial, sexual, gender, religious, and socioeconomic backgrounds, as well as other differences. It is about our team members' unwavering ethics, and professional aptitude that defines our culture.",
    color: "from-successAlt to-successAlt-dark",
  },
];

const teamTypes = [
  "CPAs",
  "Grant specialists",
  "Site selection advisors",
  "Former Big 4 managers",
];

const personalInterests = [
  "Mountaineers",
  "Coaches",
  "Explorers",
  "Parents",
  "Community leaders",
];

const boardInvolvements = [
  "Healthcare initiatives",
  "Child welfare programs",
  "Animal welfare",
  "Youth support programs",
  "Education",
];

export default function AboutContent() {
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
              Discover Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              EIAG is a firm made up of professionals who share similar core values. We love our clients, respect each other, embrace challenges, and deliver exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Overview */}
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
                Our Team
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                The team includes {teamTypes.join(", ")}.
              </p>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Not only do our professionals have outstanding track records in the business world, they are also {personalInterests.join(", ")}.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-neutral-100"
            >
              <h3 className="text-2xl font-black text-primary mb-6">Community Involvement</h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Members of our firm are on boards that support:
              </p>
              <div className="space-y-3">
                {boardInvolvements.map((involvement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-neutral-700">{involvement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* People First Section */}
      <section className="py-section-lg bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
                At EIAG, we're more than experts in government incentives—we're people first.
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                We're a team with whole lives and big hearts. We bring empathy, curiosity, and accountability to everything we do because we believe meaningful work and meaningful lives are deeply connected.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                That spirit guides how we research programs, design strategies, and stand alongside our clients, from the first conversation to the final award. We're committed to rigorous analysis, clear guidance, and results our clients can count on.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <Image
                  src="https://eiag.com/wp-content/uploads/2025/08/About-Us-4.png"
                  alt="EIAG Team"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
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
              EIAG Leadership
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100 text-center"
              >
                <div className="w-24 h-24 bg-success rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-black text-primary mb-2">{leader.name}</h3>
                <p className="text-neutral-600 font-semibold">{leader.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-section-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
              The Core Values and Principles That Drive Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-neutral-50 to-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100"
                >
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${value.color} bg-opacity-10 mb-6`}>
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-primary mb-4">{value.title}</h3>
                  <p className="text-neutral-700 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Summary */}
      <section className="py-section-lg bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Target className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our core values aren't just words on a wall—they're the foundation of everything we do. From how we work with clients to how we support our team, these principles guide us every day.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Award className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-black mb-2">23 Years of Excellence</h3>
                <p className="text-white/90">Dedicated to continuous improvement and growth alongside our clients.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Heart className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-black mb-2">Client-First Culture</h3>
                <p className="text-white/90">Your success is our success. We put clients first in everything we do.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <TrendingUp className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-black mb-2">400%+ ROI</h3>
                <p className="text-white/90">We only engage when we can deliver enormous benefit to our clients.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Globe className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-black mb-2">Diversity & Inclusion</h3>
                <p className="text-white/90">We embrace and support individuals from all backgrounds and experiences.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

