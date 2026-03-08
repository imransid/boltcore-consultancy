"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="inline-block px-4 py-1.5 bg-[#d4af37]/20 text-[#0c4a6e] font-semibold rounded-full text-sm mb-4">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Free Consultation
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Have questions about your visa or study abroad journey? Fill out the
              form and our experts will get back to you within 24 hours.
            </p>
            <div className="space-y-6">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 text-slate-700 hover:text-[#0c4a6e] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0c4a6e] flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Phone</div>
                  <div>+1 (234) 567-890</div>
                </div>
              </a>
              <a
                href="mailto:info@immidox.com"
                className="flex items-center gap-4 text-slate-700 hover:text-[#0c4a6e] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0c4a6e] flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Email</div>
                  <div>info@immidox.com</div>
                </div>
              </a>
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-12 h-12 rounded-xl bg-[#0c4a6e] flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Address</div>
                  <div>123 Immigration St, New York, NY 10001</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-[#0c4a6e]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-slate-600">
                  Your message has been sent. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0c4a6e] focus:ring-2 focus:ring-[#0c4a6e]/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0c4a6e] focus:ring-2 focus:ring-[#0c4a6e]/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0c4a6e] focus:ring-2 focus:ring-[#0c4a6e]/20 outline-none transition-all"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Service
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0c4a6e] focus:ring-2 focus:ring-[#0c4a6e]/20 outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="visa">Visa Services</option>
                      <option value="student">Student Consultancy</option>
                      <option value="work">Work Migration</option>
                      <option value="family">Family Reunification</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0c4a6e] focus:ring-2 focus:ring-[#0c4a6e]/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-[#0c4a6e] text-white font-semibold rounded-lg hover:bg-[#082f49] transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
