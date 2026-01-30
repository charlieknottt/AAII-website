'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Meetings', href: '#meetings' },
  { name: 'Annual Summit', href: '#summit' },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-aaii-blue-950/90 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-white/5'
        : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="group">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white group-hover:text-white/90 transition-colors">AA</span><span className="text-gradient">II</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-aaii-orange-500 to-aaii-blue-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="#involved"
              className="px-5 py-2.5 bg-gradient-to-r from-aaii-orange-500 to-aaii-orange-400 hover:from-aaii-orange-400 hover:to-aaii-orange-300 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-aaii-orange-500/20"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-80' : 'max-h-0'
      }`}>
        <div className="bg-aaii-blue-950/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/70 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#involved"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3 px-4 bg-gradient-to-r from-aaii-orange-500 to-aaii-orange-400 text-white text-center font-semibold rounded-lg mt-4"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
