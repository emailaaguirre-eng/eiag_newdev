"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { 
  MessageSquare, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  HelpCircle
} from "lucide-react";

const services = [
  "Economic Incentives",
  "Site Selection",
  "Both Services",
  "General Inquiry"
];

const employeeRanges = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "501-1000",
  "1000+"
];

const quickQuestions = [
  "What services does EIAG | SITE offer?",
  "How do I get started?",
  "Is this real? It sounds... too good to be true.",
  "Do you only work with large companies?"
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    employees: "",
    message: "",
    consent: false,
  });

  const [messageCount, setMessageCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "message") {
      setMessageCount(value.length);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        employees: "",
        message: "",
        consent: false,
      });
      setMessageCount(0);
    }, 3000);
  };

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
            <MessageSquare className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
              Let's Talk Government Incentives and Site Selection
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              This is the fastest, clearest way to get started. We'll ask a few questions about your business goals, growth plans, and activities—then walk you through what government incentives may apply.
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="text-white/90">No cost</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="text-white/90">No pressure</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="text-white/90">Just clarity on what your business might be leaving on the table</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-section-lg bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-card p-8 md:p-12 border border-neutral-100"
          >
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-2">
              Schedule Your Free Review Call
            </h2>
            <p className="text-neutral-600 mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="bg-success/10 border border-success rounded-lg p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="text-2xl font-black text-success mb-2">Thank You!</h3>
                <p className="text-neutral-700">We've received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-neutral-700 mb-2">
                      First Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="E.g. John"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="E.g. Doe"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E.g. john@doe.com"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Company Name <span className="text-neutral-400 text-xs">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme inc"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="555-555-5555"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-neutral-700 mb-2">
                    What service are you interested in?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-white appearance-none cursor-pointer"
                  >
                    <option value="">What service are you interested in?</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Employees Dropdown */}
                <div>
                  <label htmlFor="employees" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Number of Employees <span className="text-accent">(required)</span>
                  </label>
                  <select
                    id="employees"
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Select range</option>
                    {employeeRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message..."
                    rows={5}
                    maxLength={180}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-y"
                  />
                  <div className="text-right text-sm text-neutral-500 mt-1">
                    {messageCount}/180
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-accent border-neutral-300 rounded focus:ring-accent cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-sm text-neutral-700">
                    <span className="text-accent">*</span> I agree to be contacted by Economic Incentives Advisory Group via call, email, and text. To opt out, you can reply 'stop' at any time or click the unsubscribe link in the emails. Message and data rates may apply.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Submit</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Quick Questions Section */}
      <section className="py-section-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">
              Just have a question?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We get it—sometimes you're not ready for a call (yet). Here are answers to common questions, or feel free to reach out directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {quickQuestions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-neutral-50 to-white rounded-xl p-6 border border-neutral-100 hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <HelpCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-lg font-semibold text-primary">{question}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/faq"
              className="inline-flex items-center space-x-2 text-accent hover:text-accent-dark font-semibold text-lg"
            >
              <span>View All FAQs</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-section-lg bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">
              Get in touch with our team
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Whether you're curious about a specific incentive, want to explore eligibility for your location or industry, or just need to talk it out—we'd love to connect.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Phone className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-black mb-2">Phone</h3>
                <p className="text-white/90">1(888) 374-EIAG (3424)</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Mail className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-black mb-2">Email</h3>
                <p className="text-white/90">info@eiag.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <MapPin className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-black mb-2">Address</h3>
                <p className="text-white/90">4455 E Camelback Road, D236<br />Phoenix, AZ 85018</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

