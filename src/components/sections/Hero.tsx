"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Instagram, Sparkles } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const work = () => scrollToSection('projects');
  const contact = () => scrollToSection('contact');

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-200 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-gray-200 backdrop-blur-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-600">Available for Work</span>
          </motion.div>

          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black text-black leading-[0.9] tracking-tighter"
            >
              Securing<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-orange-600">Digital</span><br />
              Frontiers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-500 max-w-lg font-medium"
            >
              I'm Adarsh S, a Senior Cybersecurity Specialist passionate about security research, penetration testing, and building security tools that protect digital infrastructure.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 group" onClick={work}>
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white border border-gray-200 text-black rounded-full font-bold text-lg hover:bg-gray-50 transition-colors" onClick={contact}>
              Contact Me
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-8 flex gap-6"
          >
            <a href="https://github.com/0x0806" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors transform hover:scale-110 duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/adarsh-s-9b1162171/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors transform hover:scale-110 duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://x.com/0X0806x" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors transform hover:scale-110 duration-300">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/0X0806" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors transform hover:scale-110 duration-300">
              <Instagram className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        {/* Right Column - Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 bg-[#2A2A2A] rounded-[2.5rem] p-8 md:p-10 shadow-2xl text-white overflow-hidden group">
            {/* Card Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-3xl font-black leading-tight">Adarsh S</h2>
                <div className="flex items-center gap-2 mt-2 text-gray-400 font-medium text-sm">
                  <span className="text-red-500">📍</span> INDIA
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 relative overflow-hidden">
                <Image
                  src="https://img.icons8.com/fluency/96/shield.png"
                  alt="Security Shield"
                  fill
                  sizes="48px"
                  className="object-contain p-2"
                />
              </div>
            </div>

            {/* Profile Image Area */}
            <div className="relative aspect-square rounded-3xl overflow-hidden mb-8 bg-gray-800">
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50 z-10" />
              <Image
                src="https://github.com/0x0806.png"
                alt="Adarsh S"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>

            {/* Tags */}
            <div className="flex gap-3 mb-8">
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/5 text-xs font-bold tracking-wider uppercase flex items-center gap-2">
                <Image
                  src="https://img.icons8.com/fluency/96/hacker.png"
                  alt="Hacker"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
                Penetration Testing
              </span>
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/5 text-xs font-bold tracking-wider uppercase flex items-center gap-2">
                <Image
                  src="https://img.icons8.com/fluency/96/lock.png"
                  alt="Lock"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
                Security Research
              </span>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-3 text-blue-400 font-bold text-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Available for Projects
            </div>
          </div>

          {/* Decorative Elements behind card */}
          <div className="absolute top-10 right-10 w-full h-full bg-gray-200 rounded-[2.5rem] -z-10 transform rotate-6 opacity-0 lg:opacity-100 transition-opacity" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;