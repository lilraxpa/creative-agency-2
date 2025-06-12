// Brand configuration file
// Edit this file to update your brand information across the website

export const brandConfig = {
  // Company Information
  name: "Guard",
  tagline: "Securing Your Digital Assets",
  description:
    "A professional cyber tech agency specializing in digital asset recovery and security solutions with advanced threat detection and response capabilities.",

  // Contact Information
  email: "contact@guardagency.com",
  phone: "+1 (555) 123-4567",
  location: "123 Tech Street, Cyber City, CC 10101",

  // Social Media
  socialMedia: {
    instagram: "https://instagram.com/guardagency",
    whatsapp: "https://wa.me/15551234567",
  },

  // Services
  services: [
    {
      id: "bitcoin-recovery",
      title: "Bitcoin Recovery",
      description:
        "Lost access to your Bitcoin wallet? Our expert team utilizes advanced forensic techniques and blockchain analysis to help recover your digital assets securely and efficiently.",
      icon: "Bitcoin",
    },
    {
      id: "crypto-trading",
      title: "Crypto Trading Security",
      description:
        "Get professional guidance on cryptocurrency trading security, secure wallet management, and advanced threat protection to safeguard your investment portfolio.",
      icon: "TrendingUp",
    },
    {
      id: "email-recovery",
      title: "Email Security & Recovery",
      description:
        "Regain access to compromised email accounts with our specialized recovery services, ensuring your personal and business communications remain secure from cyber threats.",
      icon: "Mail",
    },
    {
      id: "game-activation",
      title: "Gaming Account Security",
      description:
        "Protect and recover gaming accounts with our specialized security solutions. We provide comprehensive protection against account theft and unauthorized access.",
      icon: "Gamepad2",
    },
    {
      id: "social-media-recovery",
      title: "Social Media Security",
      description:
        "Recover compromised social media accounts and implement advanced security measures to protect your online presence from cyber attacks and unauthorized access.",
      icon: "Share2",
    },
  ],

  // Footer Links
  footerLinks: [
    {
      title: "COMPANY",
      links: [
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "SERVICES",
      links: [
        { name: "Bitcoin Recovery", href: "/services#bitcoin-recovery" },
        { name: "Crypto Trading Security", href: "/services#crypto-trading" },
        { name: "Email Security", href: "/services#email-recovery" },
        { name: "Gaming Security", href: "/services#game-activation" },
        { name: "Social Media Security", href: "/services#social-media-recovery" },
      ],
    },
  ],
}
