'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Star } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    // Arsenal Collection
    {
      id: 1,
      title: "LINUX-ARSENAL",
      category: "Arsenal",
      tags: ["LINUX", "CYBERPUNK", "LEARNING"],
      bg: "bg-gradient-to-br from-red-100 to-orange-100",
      link: "https://github.com/0x0806/Linux-Arsenal",
      description: "Web-based platform that transforms Linux command-line learning into an epic cyberpunk adventure"
    },
    {
      id: 2,
      title: "CTF-ARSENAL",
      category: "Arsenal",
      tags: ["CTF", "TOOLKIT", "WEB"],
      bg: "bg-gradient-to-br from-purple-100 to-indigo-100",
      link: "https://github.com/0x0806/CTF-Arsenal",
      description: "Comprehensive web-based toolkit for CTF competitions featuring 50+ specialized tools across 6 categories"
    },
    {
      id: 3,
      title: "REDTEAM-ARSENAL",
      category: "Arsenal",
      tags: ["RED TEAM", "OFFENSIVE", "SECURITY"],
      bg: "bg-gradient-to-br from-red-100 to-rose-100",
      link: "https://github.com/0x0806/RedTeam-Arsenal",
      description: "Red Team tools and resources for offensive security operations"
    },
    {
      id: 4,
      title: "BYPASS-ARSENAL",
      category: "Arsenal",
      tags: ["BYPASS", "EVASION", "SECURITY"],
      bg: "bg-gradient-to-br from-orange-100 to-amber-100",
      link: "https://github.com/0x0806/Bypass-Arsenal",
      description: "Collection of bypass techniques and evasion methods"
    },
    {
      id: 5,
      title: "PAYLOAD-ARSENAL",
      category: "Arsenal",
      tags: ["PAYLOADS", "EXPLOIT", "PENTEST"],
      bg: "bg-gradient-to-br from-yellow-100 to-lime-100",
      link: "https://github.com/0x0806/Payload-Arsenal",
      description: "Curated collection of security payloads for penetration testing"
    },
    {
      id: 6,
      title: "WORDLIST-ARSENAL",
      category: "Arsenal",
      tags: ["WORDLISTS", "BRUTEFORCE", "PENTEST"],
      bg: "bg-gradient-to-br from-green-100 to-emerald-100",
      link: "https://github.com/0x0806/Wordlist-Arsenal",
      description: "Comprehensive wordlist collection for security testing"
    },
    {
      id: 7,
      title: "DUCKEY-ARSENAL",
      category: "Arsenal",
      tags: ["USB", "RUBBER DUCKY", "PAYLOADS"],
      bg: "bg-gradient-to-br from-teal-100 to-cyan-100",
      link: "https://github.com/0x0806/Duckey-Arsenal",
      description: "Rubber Ducky scripts and USB attack payloads"
    },
    {
      id: 8,
      title: "CODE-ARSENAL",
      category: "Arsenal",
      tags: ["CODE", "SCRIPTS", "AUTOMATION"],
      bg: "bg-gradient-to-br from-cyan-100 to-blue-100",
      link: "https://github.com/0x0806/Code-Arsenal",
      description: "Collection of code snippets and scripts for security professionals"
    },
    {
      id: 9,
      title: "ARSENAL",
      category: "Arsenal",
      tags: ["HACKING", "LAUNCHER", "TOOLS"],
      bg: "bg-gradient-to-br from-blue-100 to-indigo-100",
      link: "https://github.com/0x0806/arsenal",
      description: "Quick inventory and launcher for hacking programs"
    },
    // Security Tools
    {
      id: 10,
      title: "JWT-SECURITY-ASSESSMENT",
      category: "Security Tools",
      tags: ["JWT", "API", "SECURITY"],
      bg: "bg-gradient-to-br from-violet-100 to-purple-100",
      link: "https://github.com/0x0806/JWT-Security-Assessment",
      description: "JWT token security assessment and vulnerability testing tool"
    },
    {
      id: 11,
      title: "GOOGLE-DORK-GENERATOR",
      category: "Security Tools",
      tags: ["OSINT", "GOOGLE", "DORKS"],
      bg: "bg-gradient-to-br from-fuchsia-100 to-pink-100",
      link: "https://github.com/0x0806/Google-Dork-Generator",
      description: "Advanced Google Dork query generator for OSINT and recon"
    },
    {
      id: 12,
      title: "SHODAN-DORKS",
      category: "Security Tools",
      tags: ["SHODAN", "OSINT", "RECON"],
      bg: "bg-gradient-to-br from-pink-100 to-rose-100",
      link: "https://github.com/0x0806/shodan-dorks",
      description: "Collection of Shodan dorks for security research"
    },
    {
      id: 13,
      title: "IMAGE-FORENSICS-TOOL",
      category: "Security Tools",
      tags: ["FORENSICS", "STEGANOGRAPHY", "ANALYSIS"],
      bg: "bg-gradient-to-br from-rose-100 to-red-100",
      link: "https://github.com/0x0806/Image-Forensics-Tool",
      description: "Digital image forensics and steganography analysis tool"
    },
    {
      id: 14,
      title: "IP-GEOLOCATOR",
      category: "Security Tools",
      tags: ["IP", "GEOLOCATION", "OSINT"],
      bg: "bg-gradient-to-br from-amber-100 to-orange-100",
      link: "https://github.com/0x0806/IP-GeoLocator",
      description: "IP address geolocation and tracking tool"
    },
    {
      id: 15,
      title: "PARALLELSSH",
      category: "Security Tools",
      tags: ["PYTHON", "SSH", "AUTOMATION"],
      bg: "bg-gradient-to-br from-green-100 to-emerald-100",
      link: "https://github.com/0x0806/ParallelSSH",
      description: "Parallel SSH execution tool for managing multiple remote systems",
      stars: 3
    },
    {
      id: 16,
      title: "JS-ANALYSER",
      category: "Security Tools",
      tags: ["JAVASCRIPT", "ANALYSIS", "SECRETS"],
      bg: "bg-gradient-to-br from-yellow-100 to-amber-100",
      link: "https://github.com/0x0806/JS-Analyser",
      description: "JavaScript code analyzer for finding secrets and vulnerabilities"
    },
    {
      id: 17,
      title: "TORCRAWLER",
      category: "Security Tools",
      tags: ["TOR", "DARKWEB", "CRAWLER"],
      bg: "bg-gradient-to-br from-slate-100 to-gray-200",
      link: "https://github.com/0x0806/torcrawler",
      description: "Tor network crawler for dark web analysis",
      stars: 1
    },
    // Vulnerable Apps
    {
      id: 18,
      title: "VULN-BANK",
      category: "Vulnerable Apps",
      tags: ["PYTHON", "API SECURITY", "TRAINING"],
      bg: "bg-gradient-to-br from-cyan-100 to-blue-100",
      link: "https://github.com/0x0806/vuln-bank",
      description: "Deliberately vulnerable banking application for security testing",
      stars: 4
    },
    {
      id: 19,
      title: "VULN-BANK-MOBILE",
      category: "Vulnerable Apps",
      tags: ["MOBILE", "ANDROID", "TRAINING"],
      bg: "bg-gradient-to-br from-blue-100 to-indigo-100",
      link: "https://github.com/0x0806/vuln-bank-mobile",
      description: "Vulnerable mobile banking application for mobile security testing"
    },
    {
      id: 20,
      title: "VULN-MOBILE",
      category: "Vulnerable Apps",
      tags: ["ANDROID", "PENTEST", "TRAINING"],
      bg: "bg-gradient-to-br from-indigo-100 to-violet-100",
      link: "https://github.com/0x0806/vuln-mobile",
      description: "Useful for Android penetration testing practice"
    },
    {
      id: 21,
      title: "VULN-WEB-APPS",
      category: "Vulnerable Apps",
      tags: ["WEB", "VULNERABLE", "COLLECTION"],
      bg: "bg-gradient-to-br from-purple-100 to-fuchsia-100",
      link: "https://github.com/0x0806/vuln-web-apps",
      description: "Curated list of vulnerable web applications for practice"
    },
    // AI & Automation
    {
      id: 22,
      title: "UNLEASHEDLLM",
      category: "AI & Automation",
      tags: ["PYTHON", "AI", "OFFLINE"],
      bg: "bg-gradient-to-br from-pink-100 to-rose-100",
      link: "https://github.com/0x0806/UnleashedLLM",
      description: "CLI tool for downloading and interacting with AI models completely offline",
      stars: 2
    },
    {
      id: 23,
      title: "DETECTION-ANALYSIS-SYSTEM",
      category: "AI & Automation",
      tags: ["ML", "OPENCV", "REALTIME"],
      bg: "bg-gradient-to-br from-emerald-100 to-teal-100",
      link: "https://github.com/0x0806/Detection-Analysis-System",
      description: "Real-time detection using machine learning algorithms"
    },
    // Knowledge Base
    {
      id: 24,
      title: "MINDMAP",
      category: "Knowledge Base",
      tags: ["MINDMAPS", "CERTS", "LEARNING"],
      bg: "bg-gradient-to-br from-teal-100 to-emerald-100",
      link: "https://github.com/0x0806/Mindmap",
      description: "Mindmaps for cyber security technologies, methodologies, and certifications",
      stars: 1
    },
    // Bug Bounty & Recon
    {
      id: 25,
      title: "BUGBOUNTY-VM",
      category: "Bug Bounty",
      tags: ["VM", "KALI", "BUGBOUNTY"],
      bg: "bg-gradient-to-br from-red-100 to-orange-100",
      link: "https://github.com/0x0806/Bugbounty-VM",
      description: "Bug Bounty Virtual Machine with pre-configured tools",
      stars: 1
    },
    {
      id: 26,
      title: "FASTBUGBOUNTY",
      category: "Bug Bounty",
      tags: ["AUTOMATION", "RECON", "SCRIPTS"],
      bg: "bg-gradient-to-br from-orange-100 to-amber-100",
      link: "https://github.com/0x0806/fastbugbounty",
      description: "Fast Bug Bounty automation script"
    },
    {
      id: 27,
      title: "OSINT-DASHBOARD",
      category: "Bug Bounty",
      tags: ["OSINT", "DASHBOARD", "RECON"],
      bg: "bg-gradient-to-br from-indigo-100 to-blue-100",
      link: "https://github.com/0x0806/osint-dashboard",
      description: "OSINT dashboard for reconnaissance",
      stars: 1
    },
    // Apps & Utilities
    {
      id: 28,
      title: "SECURECHAT",
      category: "Apps",
      tags: ["CHAT", "SECURE", "PRIVACY"],
      bg: "bg-gradient-to-br from-emerald-100 to-green-100",
      link: "https://github.com/0x0806/securechat",
      description: "Secure chat application with encryption"
    },
    {
      id: 29,
      title: "ANONCHAT",
      category: "Apps",
      tags: ["ANONYMOUS", "CHAT", "PRIVACY"],
      bg: "bg-gradient-to-br from-teal-100 to-cyan-100",
      link: "https://github.com/0x0806/AnonChat",
      description: "Anonymous chat application"
    },
    {
      id: 30,
      title: "PIXELFORGE",
      category: "Apps",
      tags: ["IMAGE", "TOOL", "UTILITY"],
      bg: "bg-gradient-to-br from-pink-100 to-fuchsia-100",
      link: "https://github.com/0x0806/PixelForge",
      description: "Image manipulation and creation tool"
    },
    {
      id: 31,
      title: "HACK-TOOLKIT",
      category: "Apps",
      tags: ["AUTOMATION", "TOOLS", "SCRIPTS"],
      bg: "bg-gradient-to-br from-orange-100 to-red-100",
      link: "https://github.com/0x0806/Hack-Toolkit",
      description: "Comprehensive hacking tools automation script"
    },
    {
      id: 32,
      title: "SCRIPTS",
      category: "Apps",
      tags: ["SCRIPTS", "AUTOMATION", "UTILITY"],
      bg: "bg-gradient-to-br from-slate-100 to-gray-200",
      link: "https://github.com/0x0806/scripts",
      description: "Collection of useful security scripts",
      stars: 1
    },
    {
      id: 33,
      title: "THRIII",
      category: "Apps",
      tags: ["TOOL", "UTILITY", "SECURITY"],
      bg: "bg-gradient-to-br from-neutral-100 to-stone-200",
      link: "https://github.com/0x0806/thriii",
      description: "Security utility tool",
      stars: 1
    },
    {
      id: 34,
      title: "NIGHTMARE-SURVIVAL",
      category: "Apps",
      tags: ["GAME", "SECURITY", "FUN"],
      bg: "bg-gradient-to-br from-gray-200 to-slate-300",
      link: "https://github.com/0x0806/NIGHTMARE-SURVIVAL",
      description: "Security-themed game project"
    },
    {
      id: 35,
      title: "BELLA",
      category: "Apps",
      tags: ["TOOL", "SECURITY", "UTILITY"],
      bg: "bg-gradient-to-br from-violet-100 to-purple-100",
      link: "https://github.com/0x0806/Bella",
      description: "Security utility application"
    },
    {
      id: 36,
      title: "FLIPCLOCK",
      category: "Apps",
      tags: ["UI", "CLOCK", "DESIGN"],
      bg: "bg-gradient-to-br from-cyan-100 to-sky-100",
      link: "https://github.com/0x0806/flipclock",
      description: "Stylish flip clock application"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 12);
  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-20 bg-background">
      <div className="w-full max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-foreground"
          >
            Security<br />
            <span className="text-gray-400">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-xl text-muted-foreground max-w-2xl"
          >
            {projects.length}+ open-source security tools, arsenals, and resources available on GitHub
          </motion.p>

          {/* Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {categories.map((cat, idx) => (
              <span key={idx} className="px-4 py-2 rounded-full text-sm font-bold bg-gray-100 text-gray-700">
                {cat}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 12) * 0.05 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`relative rounded-[1.5rem] overflow-hidden ${project.bg} p-6 flex flex-col justify-between h-full min-h-[240px] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}>

                {/* Top Row: Category & Arrow */}
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-black/10 text-black/70 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                </div>

                {/* Tags */}
                <div className="flex gap-1.5 flex-wrap mt-3">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-full text-[9px] font-bold bg-white/50 text-black/60 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-xs text-black/60 font-medium mt-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Bottom Row: Title & Stars */}
                <div className="flex justify-between items-end mt-4">
                  <h3 className="text-lg md:text-xl font-black text-black tracking-tight uppercase leading-none max-w-[80%]">
                    {project.title}
                  </h3>
                  {project.stars && (
                    <span className="text-xs font-bold text-yellow-600 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" /> {project.stars}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center space-y-4"
        >
          {projects.length > 12 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-100 text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              {showAll ? 'Show Less' : `Show All ${projects.length} Projects`}
            </button>
          )}

          <div className="block">
            <a
              href="https://github.com/0x0806"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform group"
            >
              <Github className="w-5 h-5" />
              View All on GitHub
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;