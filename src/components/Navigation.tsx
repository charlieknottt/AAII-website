'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Meetings', href: '#meetings' },
  { name: 'Summit', href: '#summit' },
  { name: 'Leadership', href: '#leadership' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-aaii-blue-950/95 backdrop-blur-md border-b border-white/10'
        : 'bg-transparent'
    }`}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="#home" className="text-white font-medium tracking-tight">
            <span className="text-white">AA</span>
            <span className="text-aaii-orange-500">II</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-white/60 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#involved"
              className="px-4 py-2 bg-aaii-orange-500 hover:bg-aaii-orange-400 text-white text-sm font-medium rounded-lg"
            >
              Join
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/60 hover:text-white"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-64' : 'max-h-0'
      }`}>
        <div className="bg-aaii-blue-950/98 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/60 hover:text-white py-2"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#involved"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3 bg-aaii-orange-500 text-white text-center font-medium rounded-lg mt-4"
            >
              Join
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
