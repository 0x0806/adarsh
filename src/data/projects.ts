export type Project = {
  name: string;
  category: string;
  tags: string[];
  href: string;
  description: string;
  fork?: boolean;
};

export const projects: Project[] = [
  { name: "Linux-Arsenal", category: "Arsenal", tags: ["Linux", "Cyberpunk", "Learning"], href: "https://github.com/0x0806/Linux-Arsenal", description: "Web-based platform that transforms Linux command-line learning into an epic cyberpunk adventure" },
  { name: "CTF-Arsenal", category: "Arsenal", tags: ["CTF", "Toolkit", "Web"], href: "https://github.com/0x0806/CTF-Arsenal", description: "Comprehensive web-based toolkit for CTF competitions featuring 50+ specialized tools across 6 categories" },
  { name: "RedTeam-Arsenal", category: "Arsenal", tags: ["Red Team", "Offensive", "Security"], href: "https://github.com/0x0806/RedTeam-Arsenal", description: "Red Team tools and resources for offensive security operations" },
  { name: "Bypass-Arsenal", category: "Arsenal", tags: ["Bypass", "Evasion", "Security"], href: "https://github.com/0x0806/Bypass-Arsenal", description: "Collection of bypass techniques and evasion methods" },
  { name: "Payload-Arsenal", category: "Arsenal", tags: ["Payloads", "Exploit", "Pentest"], href: "https://github.com/0x0806/Payload-Arsenal", description: "Curated collection of security payloads for penetration testing" },
  { name: "Wordlist-Arsenal", category: "Arsenal", tags: ["Wordlists", "Bruteforce", "Pentest"], href: "https://github.com/0x0806/Wordlist-Arsenal", description: "Comprehensive wordlist collection for security testing" },
  { name: "Duckey-Arsenal", category: "Arsenal", tags: ["USB", "Rubber Ducky", "Payloads"], href: "https://github.com/0x0806/Duckey-Arsenal", description: "Rubber Ducky scripts and USB attack payloads" },
  { name: "Code-Arsenal", category: "Arsenal", tags: ["Code", "Scripts", "Automation"], href: "https://github.com/0x0806/Code-Arsenal", description: "Collection of code snippets and scripts for security professionals" },
  { name: "arsenal", category: "Arsenal", tags: ["Hacking", "Launcher", "Tools"], href: "https://github.com/0x0806/arsenal", description: "Quick inventory and launcher for hacking programs", fork: true },
  { name: "JWT-Security-Assessment", category: "Security Tools", tags: ["JWT", "API", "Security"], href: "https://github.com/0x0806/JWT-Security-Assessment", description: "JWT token security assessment and vulnerability testing tool" },
  { name: "Google-Dork-Generator", category: "Security Tools", tags: ["OSINT", "Google", "Dorks"], href: "https://github.com/0x0806/Google-Dork-Generator", description: "Advanced Google Dork query generator for OSINT and recon" },
  { name: "shodan-dorks", category: "Security Tools", tags: ["Shodan", "OSINT", "Recon"], href: "https://github.com/0x0806/shodan-dorks", description: "Collection of Shodan dorks for security research", fork: true },
  { name: "Image-Forensics-Tool", category: "Security Tools", tags: ["Forensics", "Steganography", "Analysis"], href: "https://github.com/0x0806/Image-Forensics-Tool", description: "Digital image forensics and steganography analysis tool" },
  { name: "IP-GeoLocator", category: "Security Tools", tags: ["IP", "Geolocation", "OSINT"], href: "https://github.com/0x0806/IP-GeoLocator", description: "IP address geolocation and tracking tool" },
  { name: "ParallelSSH", category: "Security Tools", tags: ["Python", "SSH", "Automation"], href: "https://github.com/0x0806/ParallelSSH", description: "Parallel SSH execution tool for managing multiple remote systems" },
  { name: "JS-Analyser", category: "Security Tools", tags: ["JavaScript", "Analysis", "Secrets"], href: "https://github.com/0x0806/JS-Analyser", description: "JavaScript code analyzer for finding secrets and vulnerabilities", fork: true },
  { name: "torcrawler", category: "Security Tools", tags: ["Tor", "Dark Web", "Crawler"], href: "https://github.com/0x0806/torcrawler", description: "Tor network crawler for dark web analysis" },
  { name: "vuln-bank", category: "Vulnerable Apps", tags: ["Python", "API Security", "Training"], href: "https://github.com/0x0806/vuln-bank", description: "Deliberately vulnerable banking application for security testing", fork: true },
  { name: "vuln-bank-mobile", category: "Vulnerable Apps", tags: ["Mobile", "Android", "Training"], href: "https://github.com/0x0806/vuln-bank-mobile", description: "Vulnerable mobile banking application for mobile security testing", fork: true },
  { name: "vuln-mobile", category: "Vulnerable Apps", tags: ["Android", "Pentest", "Training"], href: "https://github.com/0x0806/vuln-mobile", description: "Useful for Android penetration testing practice", fork: true },
  { name: "vuln-web-apps", category: "Vulnerable Apps", tags: ["Web", "Vulnerable", "Collection"], href: "https://github.com/0x0806/vuln-web-apps", description: "Curated list of vulnerable web applications for practice", fork: true },
  { name: "UnleashedLLM", category: "AI & Automation", tags: ["Python", "AI", "Offline"], href: "https://github.com/0x0806/UnleashedLLM", description: "CLI tool for downloading and interacting with AI models completely offline" },
  { name: "Detection-Analysis-System", category: "AI & Automation", tags: ["ML", "OpenCV", "Real-time"], href: "https://github.com/0x0806/Detection-Analysis-System", description: "Real-time detection using machine learning algorithms" },
  { name: "Mindmap", category: "Knowledge Base", tags: ["Mindmaps", "Certs", "Learning"], href: "https://github.com/0x0806/Mindmap", description: "Mindmaps for cyber security technologies, methodologies, and certifications", fork: true },
  { name: "Bugbounty-VM", category: "Bug Bounty", tags: ["VM", "Kali", "Bug Bounty"], href: "https://github.com/0x0806/Bugbounty-VM", description: "Bug Bounty Virtual Machine with pre-configured tools" },
  { name: "fastbugbounty", category: "Bug Bounty", tags: ["Automation", "Recon", "Scripts"], href: "https://github.com/0x0806/fastbugbounty", description: "Fast Bug Bounty automation script", fork: true },
  { name: "osint-dashboard", category: "Bug Bounty", tags: ["OSINT", "Dashboard", "Recon"], href: "https://github.com/0x0806/osint-dashboard", description: "OSINT dashboard for reconnaissance" },
  { name: "securechat", category: "Apps", tags: ["Chat", "Secure", "Privacy"], href: "https://github.com/0x0806/securechat", description: "Secure chat application with encryption" },
  { name: "AnonChat", category: "Apps", tags: ["Anonymous", "Chat", "Privacy"], href: "https://github.com/0x0806/AnonChat", description: "Anonymous chat application" },
  { name: "PixelForge", category: "Apps", tags: ["Image", "Tool", "Utility"], href: "https://github.com/0x0806/PixelForge", description: "Image manipulation and creation tool" },
  { name: "Hack-Toolkit", category: "Apps", tags: ["Automation", "Tools", "Scripts"], href: "https://github.com/0x0806/Hack-Toolkit", description: "Comprehensive hacking tools automation script" },
  { name: "scripts", category: "Apps", tags: ["Scripts", "Automation", "Utility"], href: "https://github.com/0x0806/scripts", description: "Collection of useful security scripts" },
  { name: "thriii", category: "Apps", tags: ["Tool", "Utility", "Security"], href: "https://github.com/0x0806/thriii", description: "Security utility tool" },
  { name: "NIGHTMARE-SURVIVAL", category: "Apps", tags: ["Game", "Security", "Fun"], href: "https://github.com/0x0806/NIGHTMARE-SURVIVAL", description: "Security-themed game project" },
  { name: "Bella", category: "Apps", tags: ["Tool", "Security", "Utility"], href: "https://github.com/0x0806/Bella", description: "Security utility application" },
  { name: "flipclock", category: "Apps", tags: ["UI", "Clock", "Design"], href: "https://github.com/0x0806/flipclock", description: "Stylish flip clock application" },
];
