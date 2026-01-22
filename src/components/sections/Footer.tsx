"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/0x0806", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/adarsh-s-9b1162171/", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/0X0806x", label: "X" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/0X0806", label: "Instagram" },
  ];

  const footerLinks = [
    { title: "Sitemap", links: ["Home", "About", "Projects", "Contact"] },
    { title: "Services", links: ["Security Consulting", "Penetration Testing", "Vulnerability Research", "Security Training"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Responsible Disclosure"] },
  ];

  return (
    <footer className="bg-background border-t border-border pt-24 pb-12 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">

        {/* Top Section - CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground mb-6">
              Let's<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Talk.</span>
            </h2>
          </motion.div>

          <motion.a
            href="mailto:adarsh@quantumseclabs.com"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 bg-foreground text-background px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            adarsh@quantumseclabs.com
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 border-t border-border pt-12">
          <div className="col-span-2 md:col-span-1 space-y-6">
            <h3 className="text-2xl font-black text-foreground tracking-tight">Adarsh.</h3>
            <p className="text-muted-foreground font-medium max-w-xs">
              Senior Cybersecurity Specialist protecting digital infrastructure and building security tools.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index} className="space-y-6">
              <h4 className="font-bold text-foreground text-lg">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="text-muted-foreground font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} Adarsh S. All rights reserved.
          </p>
          <p className="text-muted-foreground font-medium text-sm flex items-center gap-2">
            Made with <span className="text-red-500 animate-pulse">❤</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
