"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Mail, Menu, Phone, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#ec407a] text-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <button onClick={() => scrollToSection("inicio")} className="text-2xl font-bold text-white">
            Lic. Julia Villagómez Martínez
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-white font-medium hover:text-pink-200 transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("carrera")}
            className="text-white font-medium hover:text-pink-200 transition-colors"
          >
            Carrera Profesional
          </button>
          <button
            onClick={() => scrollToSection("propuestas")}
            className="text-white font-medium hover:text-pink-200 transition-colors"
          >
            Propuestas
          </button>
          <button
            onClick={() => scrollToSection("contactame")}
            className="text-white font-medium hover:text-pink-200 transition-colors"
          >
            Contáctame
          </button>
        </nav>

        {/* Social Media Icons - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61575199135422"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-200"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/juez.juliavillagomezmartinez/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-200"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a href="mailto:lic.juliavillagomez31@gmail.com" className="text-white hover:text-pink-200">
            <Mail className="h-5 w-5" />
          </a>
          <a href="tel:2294224577" className="text-white hover:text-pink-200">
            <Phone className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/522294224577"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
              <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
              <path d="M9.5 15.5a5 5 0 0 0 5 0" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#ec407a] border-b">
          <div className="container px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-white font-medium hover:text-pink-200 transition-colors text-left"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("carrera")}
              className="text-white font-medium hover:text-pink-200 transition-colors text-left"
            >
              Carrera Profesional
            </button>
            <button
              onClick={() => scrollToSection("propuestas")}
              className="text-white font-medium hover:text-pink-200 transition-colors text-left"
            >
              Propuestas
            </button>
            <button
              onClick={() => scrollToSection("contactame")}
              className="text-white font-medium hover:text-pink-200 transition-colors text-left"
            >
              Contáctame
            </button>

            {/* Social Media Icons - Mobile */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61575199135422"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/juez.juliavillagomezmartinez/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:lic.juliavillagomez31@gmail.com" className="text-white hover:text-pink-200">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:2294224577" className="text-white hover:text-pink-200">
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/522294224577"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
