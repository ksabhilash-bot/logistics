"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Read environment variables with fallback values
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@aslogistics.in";
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/aslogistics/";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Studio Lighting Accent Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-50/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-slate-200/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          {/* Left Column: Information Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-outfit font-semibold text-xs text-blue-600 uppercase tracking-widest bg-blue-50 w-fit px-3 py-1.5 rounded-full">
              Get In Touch
            </span>

            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight">
              Let&apos;s Move Together
            </h2>

            <p className="font-inter font-normal text-slate-600 text-base sm:text-lg leading-relaxed">
              Have cargo shipments, fleet requests, or contract warehousing needs? We are ready to help coordinate your transportation. Connect with our logistics coordinators today.
            </p>

            {/* Quick response promise */}
            <div className="flex items-center gap-3 bg-white border border-slate-200/60 p-4 rounded-2xl shadow-sm w-fit mt-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-outfit font-bold text-slate-900 text-sm">Response Promise</p>
                <p className="font-inter text-xs text-slate-500">We guarantee an inquiry reply within 2 business hours.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-sm"
              >
                <Mail className="w-5 h-5" />
                Email: {contactEmail}
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-400 text-slate-800 font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:bg-slate-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pink-600"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Follow on Instagram
              </a>
            </div>

            {/* Professional closing message */}
            <p className="font-inter text-xs text-slate-400 mt-6 border-l-2 border-slate-200 pl-4 italic">
              AS Logistics coordinates regional distribution networks under ISO-aligned transit protocols, maintaining corporate efficiency for over 150 corporate clients.
            </p>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/60 p-6 sm:p-10 rounded-3xl shadow-xl studio-glow">
            <h3 className="font-outfit font-bold text-xl sm:text-2xl text-slate-900 mb-6">
              Request a Route Rate / Fleet Quote
            </h3>

            {isSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 p-6 rounded-2xl flex flex-col items-center text-center gap-3"
              >
                <CheckCircle2 className="w-12 h-12 text-green-600" />
                <h4 className="font-outfit font-bold text-lg text-green-900">Quote Request Submitted</h4>
                <p className="font-inter text-sm text-green-700 max-w-sm">
                  Thank you! Your shipping parameters have been successfully sent. A route coordinator will contact you shortly with a formal quote.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-outfit text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-4 py-3 text-sm font-inter text-slate-800 bg-slate-50/50 outline-none transition-all"
                      placeholder="e.g. Alok Sharma"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-outfit text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Corporate Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-4 py-3 text-sm font-inter text-slate-800 bg-slate-50/50 outline-none transition-all"
                      placeholder="e.g. alok@company.com"
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-outfit text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Contact Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-4 py-3 text-sm font-inter text-slate-800 bg-slate-50/50 outline-none transition-all"
                    placeholder="e.g. +91 98765 43210"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-outfit text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Shipment Parameters / Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-4 py-3 text-sm font-inter text-slate-800 bg-slate-50/50 outline-none transition-all resize-none"
                    placeholder="Describe cargo weight, source, destination, and service needed..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-blue-500/20 disabled:bg-blue-400 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing Quote...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
