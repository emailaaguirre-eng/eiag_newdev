"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, X, DollarSign, Users, TrendingUp, Database, FileText, Award, ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const clientTypes = [
  "Manufacturers expanding operations or upgrading equipment",
  "Regional healthcare systems investing in employee training or expanding and upgrading facilities",
  "Tech and R&D teams developing new products, software, or systems",
  "Clean energy adopters improving efficiency or going green",
  "Growing companies planning relocations or hiring surges at existing locations",
  "CEOs, CFOs, operations leaders, HR executives, and owners juggling it all",
];

const comparisonItems = [
  { label: "Tracks 12,000+ Programs", diy: false, eiag: true },
  { label: "Applies on Your Behalf", diy: false, eiag: true },
  { label: "Manages Required Reporting", diy: false, eiag: true },
  { label: "No Upfront Fees", diy: false, eiag: true },
  { label: "15+ Years Experience Per Pro", diy: false, eiag: true },
  { label: "Pay only when awarded", diy: false, eiag: true },
];

const processSteps = [
  {
    number: "Step 1",
    title: "Find What Fits",
    description: "We search across federal, state, and local programs to find the best-matched incentives based on your business activity, industry, and location.",
    features: [
      "Always current (we update daily)",
      "Customized for your team—not cookie-cutter recs",
      "12,000+ programs tracked coast-to-coast",
    ],
    icon: Database,
  },
  {
    number: "Step 2",
    title: "Handle the Application",
    description: "We do the paperwork, the positioning, and coordinate communication with government agencies to give your application the best chance of approval.",
    features: [
      "Standout submissions—not generic templates",
      "Fully compliant with agency requirements",
      "Minimal administrative involvement from your team",
    ],
    icon: FileText,
  },
  {
    number: "Step 3",
    title: "Manage The Reporting (That's the Key)",
    description: "Most consultants stop after the application—and that's the problem. Without proper reporting, you never see the money or claim the credits.",
    features: [
      "All reporting and documentation managed",
      "Full compliance review for your peace of mind",
      "No ball drops, no missed dollars",
    ],
    icon: Award,
  },
];

const stats = [
  { value: "$15B+", label: "Funding Secured for Our Clients", icon: DollarSign },
  { value: "95%+", label: "Client Retention", icon: Users },
  { value: "<3%", label: "Team Turnover", icon: TrendingUp },
  { value: "12,000+", label: "Programs Tracked", icon: Database },
];

export default function EconomicIncentivesContent() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
              Get Government Funding Without the Administrative Burden
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              We don't just identify the programs available for your company. We apply, report, and follow through, so you actually receive the money and claim the credits.
            </p>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              We work with businesses that are hiring employees, making capital investments, innovating, and training their workforce. Why? Because this activity makes you eligible for government funding. If your business is engaging in activities referenced above, likely, you're already eligible for funding, and we can help you claim it.
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

      {/* Our Clients Include */}
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
              Our Clients Include
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {clientTypes.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3 text-left"
                >
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{client}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Winning vs Getting */}
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
                Winning a Grant or Special Tax Credit Is One Thing
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-accent mb-6">
                Getting the Money Is Another
              </h3>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Most consultants help with identifying programs or even submitting applications—but they stop short when it comes to the most challenging part: the reporting, compliance, and administration.
              </p>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Without timely and accurate reporting, you don't receive the funding or are able to claim the credits. And navigating that process can be overwhelming, especially if it's not your full-time job or you don't have a dedicated department that specializes in credits and incentives.
              </p>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                That's why we do things differently. At EIAG, we stay by your side until the funds are in your account or reflected as a real reduction in your tax bill.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <span>See How</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-card border border-neutral-100"
            >
              <h3 className="text-2xl font-black text-primary mb-8 text-center">The EIAG Difference</h3>
              <div className="space-y-4">
                {comparisonItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-neutral-100 last:border-0">
                    <span className="text-neutral-700 font-medium flex-1">{item.label}</span>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center justify-center w-8">
                        {item.diy ? (
                          <CheckCircle2 className="h-6 w-6 text-success" />
                        ) : (
                          <X className="h-6 w-6 text-neutral-300" />
                        )}
                      </div>
                      <div className="flex items-center justify-center w-8">
                        {item.eiag ? (
                          <CheckCircle2 className="h-6 w-6 text-success" />
                        ) : (
                          <X className="h-6 w-6 text-neutral-300" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span className="text-neutral-500">Do it Yourself</span>
                  <span className="text-primary">EIAG</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Based Services */}
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
              Menu Based Services
            </h2>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              EIAG can secure grants, tax credits, and other incentives at one location or review your entire footprint of locations to determine eligibility for grants, credits, and incentives.
            </p>
            <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
              We'll meet you where you are, whether that's a one-off program or full review of all applicable incentives for your company.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Start With Your Free Custom Funding Report</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
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
              We Own The Entire Process, So You Get Results
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Unlike most consultants, we do not finish after the application(s) are submitted. We see your project through until the funding or credits are secured.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100"
                >
                  <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-primary to-primary-dark mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-bold text-accent mb-2">{step.number}</div>
                  <h3 className="text-2xl font-black text-primary mb-4">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-section-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 rounded-lg bg-accent/10 mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-neutral-600 font-semibold">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-section-lg bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              If Your CPA Didn't Mention These Programs…
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              It's likely because they're not tracking 12,000+ active funding options. This is what we do.
            </p>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              We've helped hundreds of clients secure billions in funding—with zero upfront risk—making it a smart investment of your time to learn what grants, credits, and incentives may be available for your organization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-white/90">$15B+ secured for U.S. businesses</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-white/90">Trusted by LifePoint Health, Dell, Siemens, SpaceX, GAP, Microchip, onsemi, and many others.</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-white/90">95% client retention.</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-white/90">&lt;3% staff turnover in 20+ years.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prefer To Start Small */}
      <section className="py-section-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
              Prefer To Start Small?
            </h2>
            <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
              No problem. All services are based on a customized service menu. We'll meet you where you are—whether that means supporting a single project or managing the entire scope of grants, credits, and incentives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Free Call Section */}
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
              What Happens During Your Free Incentive Review Call?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              It's an informative call. No pressure. Just timely opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <CheckCircle2 className="h-8 w-8 text-white mb-4" />
                <p className="text-white/90">We ask a few questions about your business.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <CheckCircle2 className="h-8 w-8 text-white mb-4" />
                <p className="text-white/90">We give you a snapshot of programs that fit.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <CheckCircle2 className="h-8 w-8 text-white mb-4" />
                <p className="text-white/90">We explain the process to obtain the grants, credits, or other available incentives.</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Book Your Free Incentive Review Call</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-section-lg bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-12">
              What Clients Say About EIAG
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-card border border-neutral-100">
              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-success">★</span>
                ))}
              </div>
              <p className="text-xl text-neutral-700 leading-relaxed mb-6 italic">
                "We'd applied for funding before, but we never actually got the money. Reporting fell through the cracks. EIAG changed that. They didn't just help us win—they helped us collect."
              </p>
              <div className="font-bold text-primary">Director of Operations</div>
              <div className="text-neutral-600 text-sm">Multi-State Healthcare Group</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-section-lg bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-black mb-8">ECONOMIC INCENTIVES ADVISORY GROUP</h3>
            <div className="space-y-4 text-white/90">
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>4455 E Camelback Road, D236, Phoenix, AZ 85018</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href="tel:18883743424" className="hover:text-accent transition-colors">
                  1(888) 374-EIAG (3424)
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:info@eiag.com" className="hover:text-accent transition-colors">
                  info@eiag.com
                </a>
              </div>
            </div>
            <p className="mt-8 text-white/70 text-sm">
              © 2025, Economic Incentives Advisory Group. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

