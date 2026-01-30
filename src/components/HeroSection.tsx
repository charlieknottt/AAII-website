'use client'

import Link from 'next/link'
import Logo from './Logo'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aaii-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aaii-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in-up">
            <Logo className="h-32 w-32 md:h-40 md:w-40" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-white">Auburn </span>
            <span className="text-aaii-orange-500">AI</span>
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            INITIATIVE
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Let's shape the future of <span className="text-aaii-orange-500 font-semibold">AI</span> at Auburn together.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="#involved"
              className="px-8 py-4 bg-aaii-orange-500 hover:bg-aaii-orange-400 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
            >
              Join AAII
            </Link>
            <Link
              href="#summit"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-all duration-300 hover:scale-105"
            >
              2025 AI Summit
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-aaii-orange-500">3</div>
              <div className="text-sm text-white/60">Disciplines United</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-aaii-orange-500">0</div>
              <div className="text-sm text-white/60">Experience Required</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-aaii-orange-500">1</div>
              <div className="text-sm text-white/60">Mission</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
