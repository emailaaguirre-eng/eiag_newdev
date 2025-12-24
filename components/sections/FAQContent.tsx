"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { 
  HelpCircle, 
  ChevronDown, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What services does EIAG | SITE offer?",
    answer: "EIAG | SITE provides consulting services related to grants, tax credits, incentives and site selection to help businesses maximize their financial benefits.",
  },
  {
    id: 2,
    question: "Is this real? It sounds... too good to be true.",
    answer: "We hear that a lot—and we get it. There are plenty of questionable advisors in this space. However, we've helped thousands of companies—many skeptical at first—secure real, substantial government funding. And the best part? You don't owe us anything unless funding or credits are awarded to you.",
  },
  {
    id: 3,
    question: "Will I owe taxes on these funds?",
    answer: "Some incentives are structured as tax credits, which reduce your liability. Others are direct grants, which may or may not be taxable depending on your situation. Either way, we walk you through exactly how it works—so there are no surprises.",
  },
  {
    id: 4,
    question: "Why didn't my CPA or accountant tell me about this?",
    answer: "CPAs are trained for tax compliance—not for tracking 12,000+ dynamic incentive programs that change constantly. That's where we come in. Incentives are all we do. We stay on top of program updates, eligibility changes, and deadlines across all 50 states—so your business doesn't miss out.",
  },
  {
    id: 5,
    question: "When will I actually receive funding?",
    answer: "It depends on the program. Some grants and credits are awarded within 60 to 90 days of submission. Others may be tied to project completion or quarterly milestones. We'll lay out a realistic timeline before anything starts, and we'll manage the follow-up reporting so you see the funds, not just a promise.",
  },
  {
    id: 6,
    question: "What if someone on our team leaves during the process?",
    answer: "Grant, credit and incentive projects can have life spans ranging from 12 months to 15 years. Often times, our firm is the constant while there may be turnover with our client. We will seamlessly integrate with your new team member.",
  },
  {
    id: 7,
    question: "What types of business activity qualifies for funding?",
    answer: "If you're doing any of the following, you might already qualify: Hiring or training new employees, Expanding or relocating operations, Upgrading buildings or equipment, Investing in clean energy or energy-efficient systems, Conducting research, development, or innovation projects. If you're building, training, growing, or modernizing—there's likely a program for you.",
  },
  {
    id: 8,
    question: "Can you help with just one part of the process?",
    answer: "Yes. While most clients choose full-service support, we also offer a la carte services. Whether you just need research, help applying, or someone to handle compliance—we can meet you where you are.",
  },
  {
    id: 9,
    question: "Do you only work with large companies?",
    answer: "Not at all. While we've helped companies like SpaceX, Siemens, GE Appliances, and Dell, we also work with hundreds of mid-sized and growing companies across the U.S.—especially in manufacturing, healthcare, tech, and energy.",
  },
  {
    id: 10,
    question: "How do I get started?",
    answer: "Easy. Let's set up a Zoom meeting or conference call. We'll talk through your business and see what's out there. Or we'll send you a tailored overview of relevant programs—no pressure, no commitment.",
  },
];

function FAQCard({ faq, index, isOpen, onToggle }: { faq: FAQItem; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100 overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors duration-200"
      >
        <h3 className="text-xl font-black text-primary pr-8 flex-1">{faq.question}</h3>
        <ChevronDown
          className={`h-6 w-6 text-primary flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6"
        >
          <div className="pt-4 border-t border-neutral-100">
            <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function FAQContent() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const qualificationItems = [
    "Hiring or training new employees",
    "Expanding or relocating operations",
    "Upgrading buildings or equipment",
    "Investing in clean energy or energy-efficient systems",
    "Conducting research, development, or innovation projects",
  ];

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
            <HelpCircle className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Common questions about EIAG services, grants, tax credits, incentives, and site selection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-section-lg bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQCard
                key={faq.id}
                faq={faq}
                index={index}
                isOpen={openItems.has(faq.id)}
                onToggle={() => toggleItem(faq.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="py-section-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-accent/10 to-success/10 rounded-2xl p-8 border-l-4 border-accent"
          >
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">
              What Types of Business Activity Qualifies for Funding?
            </h2>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              If you're doing any of the following, you might already qualify:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {qualificationItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-neutral-700 font-semibold">
              If you're building, training, growing, or modernizing—there's likely a program for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-lg bg-gradient-to-br from-accent via-accent-light to-accent-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We're here to help. Get in touch and we'll answer any questions you have about how EIAG can help your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Book a Free Incentive Review Call</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

