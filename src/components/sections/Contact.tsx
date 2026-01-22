"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-20 bg-background relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side - Info & Typography */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.9] mb-6">
                Let's Secure<br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-orange-600">Together.</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium max-w-md">
                Have a security concern or need a security assessment? Let's discuss how I can help protect your digital assets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Email Me</p>
                  <a href="mailto:adarsh@quantumseclabs.com" className="text-lg font-bold text-foreground hover:text-red-600 transition-colors">
                    adarsh@quantumseclabs.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="text-lg font-bold text-foreground">India</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Minimalist Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl border border-gray-100 relative overflow-hidden"
          >
            {/* Decorative gradient blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -z-10 opacity-50" />

            <form className="space-y-8">
              <div className="space-y-6">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full pt-4 pb-2 bg-transparent border-b-2 border-gray-200 text-foreground font-bold text-lg outline-none focus:border-black transition-colors placeholder-transparent"
                  />
                  <label className="absolute left-0 top-0 text-gray-400 text-sm font-bold uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-black">
                    Your Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    placeholder=" "
                    className="peer w-full pt-4 pb-2 bg-transparent border-b-2 border-gray-200 text-foreground font-bold text-lg outline-none focus:border-black transition-colors placeholder-transparent"
                  />
                  <label className="absolute left-0 top-0 text-gray-400 text-sm font-bold uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-black">
                    Email Address
                  </label>
                </div>

                <div className="relative group">
                  <textarea
                    rows={3}
                    placeholder=" "
                    className="peer w-full pt-4 pb-2 bg-transparent border-b-2 border-gray-200 text-foreground font-bold text-lg outline-none focus:border-black transition-colors resize-none placeholder-transparent"
                  />
                  <label className="absolute left-0 top-0 text-gray-400 text-sm font-bold uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-black">
                    Tell me about your project
                  </label>
                </div>
              </div>

              <button className="w-full py-4 rounded-xl bg-black text-white font-bold text-lg hover:bg-gray-900 active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-3 group">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
