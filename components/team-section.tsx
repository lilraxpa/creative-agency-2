"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter, ExternalLink, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  imageUrl: string
  socialLinks: {
    linkedin?: string
    twitter?: string
    github?: string
    website?: string
  }
  skills: string[]
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Chief Security Officer",
    bio: "Alex has over 15 years of experience in cybersecurity and digital forensics, specializing in cryptocurrency recovery and blockchain security.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Alex+Morgan",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    skills: ["Digital Forensics", "Blockchain Security", "Cryptography", "Incident Response"],
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Lead Recovery Specialist",
    bio: "Sarah is an expert in data recovery operations with a background in computer science and digital asset protection.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Sarah+Chen",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
    },
    skills: ["Data Recovery", "Crypto Wallets", "Social Engineering", "Security Analysis"],
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Security Engineer",
    bio: "Marcus specializes in penetration testing and vulnerability assessment, helping clients identify and address security weaknesses.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Marcus+Johnson",
    socialLinks: {
      linkedin: "#",
      github: "#",
      website: "#",
    },
    skills: ["Penetration Testing", "Vulnerability Assessment", "Network Security", "Ethical Hacking"],
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Client Relations Manager",
    bio: "Elena bridges the gap between technical teams and clients, ensuring clear communication and exceptional service delivery.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Elena+Rodriguez",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
    },
    skills: ["Client Management", "Technical Communication", "Project Coordination", "Crisis Management"],
  },
]

export function TeamSection() {
  const [activeTeamMember, setActiveTeamMember] = useState<TeamMember | null>(null)

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className={cn(
              "group relative overflow-hidden rounded-lg cyber-border-enhanced transition-all duration-300",
              "hover:scale-105 hover:shadow-lg hover:shadow-green-500/20",
            )}
            whileHover={{ y: -5 }}
            onClick={() => setActiveTeamMember(member)}
          >
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={member.imageUrl || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />

              {/* Cyber overlay effect */}
              <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-full w-full cyber-grid-enhanced opacity-30" />
              </div>

              {/* Scan line effect */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-30">
                <div className="w-full h-1 bg-green-400/50 absolute top-0 animate-scan-sweep" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-bold font-mono text-green-400">{member.name}</h3>
              <p className="text-sm text-green-200 mb-2">{member.role}</p>

              <div className="flex space-x-2 mt-2">
                {member.socialLinks.linkedin && (
                  <Link
                    href={member.socialLinks.linkedin}
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                )}
                {member.socialLinks.twitter && (
                  <Link
                    href={member.socialLinks.twitter}
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                )}
                {member.socialLinks.github && (
                  <Link
                    href={member.socialLinks.github}
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                )}
                {member.socialLinks.website && (
                  <Link
                    href={member.socialLinks.website}
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Website</span>
                  </Link>
                )}
              </div>

              <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-3 transition-all duration-300">
                <button
                  className="text-xs flex items-center text-green-400 hover:text-green-300 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveTeamMember(member)
                  }}
                >
                  View Profile <ChevronRight className="h-3 w-3 ml-1" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Team Member Modal */}
      {activeTeamMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={() => setActiveTeamMember(null)}
        >
          <motion.div
            className="relative w-full max-w-2xl glass-hacker cyber-border-enhanced rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={activeTeamMember.imageUrl || "/placeholder.svg"}
                  alt={activeTeamMember.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-b" />
              </div>

              <div className="p-6 md:col-span-2">
                <button
                  className="absolute top-4 right-4 text-green-400 hover:text-green-300 bg-black/30 rounded-full p-1"
                  onClick={() => setActiveTeamMember(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                  <span className="sr-only">Close</span>
                </button>

                <h2 className="text-2xl font-bold font-mono text-green-400">{activeTeamMember.name}</h2>
                <p className="text-green-200 mb-4">{activeTeamMember.role}</p>

                <p className="text-gray-300 mb-6">{activeTeamMember.bio}</p>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-green-400 mb-2">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeTeamMember.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded-full border border-green-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  {activeTeamMember.socialLinks.linkedin && (
                    <Link
                      href={activeTeamMember.socialLinks.linkedin}
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  )}
                  {activeTeamMember.socialLinks.twitter && (
                    <Link
                      href={activeTeamMember.socialLinks.twitter}
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  )}
                  {activeTeamMember.socialLinks.github && (
                    <Link
                      href={activeTeamMember.socialLinks.github}
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  )}
                  {activeTeamMember.socialLinks.website && (
                    <Link
                      href={activeTeamMember.socialLinks.website}
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">Website</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
