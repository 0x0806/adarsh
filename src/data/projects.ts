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
  { name: "JWT-Security-Assessment", category: "Security Tools", tags: ["JWT", "API", "Security"], href: "https://github.com/0x0806/JWT-Security-Assessment", description: "JWT token security assessment and vulnerability testing tool" },
  { name: "Google-Dork-Generator", category: "Security Tools", tags: ["OSINT", "Google", "Dorks"], href: "https://github.com/0x0806/Google-Dork-Generator", description: "Advanced Google Dork query generator for OSINT and recon" },
  { name: "Image-Forensics-Tool", category: "Security Tools", tags: ["Forensics", "Steganography", "Analysis"], href: "https://github.com/0x0806/Image-Forensics-Tool", description: "Digital image forensics and steganography analysis tool" },
  { name: "IP-GeoLocator", category: "Security Tools", tags: ["IP", "Geolocation", "OSINT"], href: "https://github.com/0x0806/IP-GeoLocator", description: "IP address geolocation and tracking tool" },
  { name: "ParallelSSH", category: "Security Tools", tags: ["Python", "SSH", "Automation"], href: "https://github.com/0x0806/ParallelSSH", description: "Parallel SSH execution tool for managing multiple remote systems" },
  { name: "torcrawler", category: "Security Tools", tags: ["Tor", "Dark Web", "Crawler"], href: "https://github.com/0x0806/torcrawler", description: "Tor network crawler for dark web analysis" },
  { name: "UnleashedLLM", category: "AI & Automation", tags: ["Python", "AI", "Offline"], href: "https://github.com/0x0806/UnleashedLLM", description: "CLI tool for downloading and interacting with AI models completely offline" },
  { name: "Detection-Analysis-System", category: "AI & Automation", tags: ["ML", "OpenCV", "Real-time"], href: "https://github.com/0x0806/Detection-Analysis-System", description: "Real-time detection using machine learning algorithms" },
  { name: "Bugbounty-VM", category: "Bug Bounty", tags: ["VM", "Kali", "Bug Bounty"], href: "https://github.com/0x0806/Bugbounty-VM", description: "Bug Bounty Virtual Machine with pre-configured tools" },
  { name: "osint-dashboard", category: "Bug Bounty", tags: ["OSINT", "Dashboard", "Recon"], href: "https://github.com/0x0806/osint-dashboard", description: "OSINT dashboard for reconnaissance" },
  { name: "securechat", category: "Apps", tags: ["Chat", "Secure", "Privacy"], href: "https://github.com/0x0806/securechat", description: "Secure chat application with encryption" },
  { name: "AnonChat", category: "Apps", tags: ["Anonymous", "Chat", "Privacy"], href: "https://github.com/0x0806/AnonChat", description: "Anonymous chat application" },
  { name: "PixelForge", category: "Apps", tags: ["Image", "Tool", "Utility"], href: "https://github.com/0x0806/PixelForge", description: "Image manipulation and creation tool" },
  { name: "Hack-Toolkit", category: "Apps", tags: ["Automation", "Tools", "Scripts"], href: "https://github.com/0x0806/Hack-Toolkit", description: "Comprehensive hacking tools automation script" },
  { name: "scripts", category: "Apps", tags: ["Scripts", "Automation", "Utility"], href: "https://github.com/0x0806/scripts", description: "Collection of useful security scripts" },
  { name: "thriii", category: "Apps", tags: ["Tool", "Utility", "Security"], href: "https://github.com/0x0806/thriii", description: "Security utility tool" },
  { name: "NIGHTMARE-SURVIVAL", category: "Apps", tags: ["Game", "Security", "Fun"], href: "https://github.com/0x0806/NIGHTMARE-SURVIVAL", description: "Security-themed game project" },
  { name: "flipclock", category: "Apps", tags: ["UI", "Clock", "Design"], href: "https://github.com/0x0806/flipclock", description: "Stylish flip clock application" },
  { name: "wifi-arsenal", category: "Wireless & Hardware", tags: ["WiFi", "Python", "Pentest"], href: "https://github.com/0x0806/wifi-arsenal", description: "WiFi penetration testing framework for security professionals" },
  { name: "wifi-deauther-esp8266", category: "Wireless & Hardware", tags: ["ESP8266", "BLE", "C++"], href: "https://github.com/0x0806/wifi-deauther-esp8266", description: "ESP8266 suite combining WiFi attack vectors, Bluetooth Low Energy capabilities and dual-band operation" },
  { name: "esp32-phish", category: "Wireless & Hardware", tags: ["ESP32", "Phishing", "C++"], href: "https://github.com/0x0806/esp32-phish", description: "ESP32 captive-portal phishing simulation for awareness and red-team demos" },
  { name: "claude-skills", category: "AI & Automation", tags: ["Claude Code", "Skills", "Workflow"], href: "https://github.com/0x0806/claude-skills", description: "Reusable Claude Code skills that improve coding workflows and automate tasks" },
];
