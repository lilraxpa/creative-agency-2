// Brand configuration file
// Edit this file to update your brand information across the website

export const brandConfig = {
  // Company Information
  name: "Guard",
  tagline: "Securing Your Digital Assets",
  description: "A professional cyber tech agency specializing in digital asset recovery and security solutions.",

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
        "Lost access to your Bitcoin wallet? Our expert team utilizes advanced techniques to help recover your digital assets securely and efficiently.",
      icon: "Bitcoin",
    },
    {
      id: "crypto-trading",
      title: "Crypto Trading",
      description:
        "Get professional guidance on cryptocurrency trading strategies, market analysis, and portfolio management to maximize your investment potential.",
      icon: "TrendingUp",
    },
    {
      id: "email-recovery",
      title: "Email Recovery",
      description:
        "Regain access to your important email accounts with our specialized recovery services, ensuring your personal and business communications remain secure.",
      icon: "Mail",
    },
    {
      id: "game-activation",
      title: "Game Activation",
      description:
        "Having trouble with game activations or lost game accounts? Our team provides solutions to restore access to your gaming platforms and purchases.",
      icon: "Gamepad2",
    },
    {
      id: "social-media-recovery",
      title: "Social Media Recovery",
      description:
        "Recover compromised or inaccessible social media accounts with our professional assistance, protecting your online presence and personal connections.",
      icon: "Share2",
    },
  ],

  // Footer Links
  footerLinks: [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Bitcoin Recovery", href: "/services#bitcoin-recovery" },
        { name: "Crypto Trading", href: "/services#crypto-trading" },
        { name: "Email Recovery", href: "/services#email-recovery" },
        { name: "Game Activation", href: "/services#game-activation" },
        { name: "Social Media Recovery", href: "/services#social-media-recovery" },
      ],
    },
  ],
}
