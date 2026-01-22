"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code2, Bug, Lock, ArrowUpRight } from 'lucide-react';

const AboutServices = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Consulting",
      number: "01",
      description: "Providing expert cybersecurity guidance to organizations, helping them build robust security frameworks, implement best practices, and develop comprehensive security policies.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Penetration Testing",
      number: "02",
      description: "Conducting thorough security assessments of networks, web applications, and infrastructure. Identifying vulnerabilities before malicious actors can exploit them.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Vulnerability Research",
      number: "03",
      description: "Researching and discovering new vulnerabilities in software and hardware. Contributing to CVE databases and responsible disclosure programs to improve overall security.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Security Training",
      number: "04",
      description: "Educating teams on security awareness, secure coding practices, and incident response. Empowering organizations to build a security-first culture.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-20 bg-secondary/30 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-40 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto space-y-32 relative z-10">

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-black/5 dark:bg-white/5 rounded-full blur-2xl" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-foreground max-w-5xl">
            I'm passionate about <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-orange-600">protecting digital assets</span>, conducting security research, and developing tools that help organizations <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-cyan-600">stay secure</span>.
          </h2>
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px w-24 bg-border" />
            <p className="text-muted-foreground font-medium tracking-wide uppercase text-sm">What I bring to the table</p>
          </div>
        </motion.div>

        {/* Services Section */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4 sticky top-32"
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.9] tracking-tighter mb-8">
              How can<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-400 to-gray-600">I help?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
              Comprehensive design and development services tailored to elevate your digital presence.
            </p>
            <button className="mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2 group">
              View All Services
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right Column - Services Grid */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-white/5 border border-border p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col h-full justify-between space-y-8">
                  <div className="flex justify-between items-start">
                    <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      {service.icon}
                    </div>
                    <span className="text-4xl font-black text-muted/30 group-hover:text-muted/50 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:translate-x-2 transition-transform duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;