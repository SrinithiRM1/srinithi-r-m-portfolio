"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Youtube } from "lucide-react"

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "srinithi.rm2023@vitstudent.ac.in",
      href: "mailto:srinithi.rm2023@vitstudent.ac.in",
      color: "text-purple-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8807582765",
      href: "tel:+918807582765",
      color: "text-pink-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: "#",
      color: "text-cyan-600",
    },
  ]

  const socials = [
    { icon: Github, href: "https://github.com/SrinithiRM1", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/srinithi-r-m-47b58428a", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@HeARTspink1", label: "YouTube" },
  ]

  const handleEmailClick = () => {
    window.location.href = "mailto:srinithi.rm2023@vitstudent.ac.in"
  }

  return (
    <section id="contact" className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Let's Connect</h2>
          <p className="text-lg text-slate-700">
            Open to collaborations, project discussions, and interesting opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((link, idx) => {
            const Icon = link.icon
            return (
              <a
                key={idx}
                href={link.href}
                className="group glass rounded-2xl p-6 border-2 border-white/40 hover:border-white/60 transition-smooth hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`${link.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={32} />
                </div>
                <p className="text-sm font-medium text-slate-600 mb-1">{link.label}</p>
                <p className="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition-colors">
                  {link.value}
                </p>
              </a>
            )
          })}
        </div>

        <div className="bg-gradient-to-br from-purple-300/40 to-pink-300/40 glass rounded-2xl p-12 border-2 border-white/40 hover:border-white/60 transition-smooth text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to work together?</h3>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Feel free to reach out for VLSI projects, embedded systems collaboration, or just to say hello!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={handleEmailClick}
              className="gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg cursor-pointer"
            >
              <Mail size={18} />
              Send Email
            </Button>
            <div className="flex gap-3">
              {socials.map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-full border-2 border-white/40 hover:border-white/60 hover:text-purple-600 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-sm text-slate-600">
            © 2025 Srinithi R M. Crafted with creativity and engineering precision.
          </p>
        </div>
      </div>
    </section>
  )
}
