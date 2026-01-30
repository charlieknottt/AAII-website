import Link from 'next/link'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aaii-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aaii-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aaii-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-8 border border-white/10">
          <span className="w-2 h-2 bg-aaii-orange-500 rounded-full animate-pulse" />
          <span className="text-white/70 text-sm">Auburn's Premier Student-Led AI Organization</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Auburn{' '}
          <span className="relative">
            <span className="text-gradient">AI</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-aaii-orange-500 to-aaii-orange-400 rounded-full" />
          </span>
          {' '}Initiative
        </h1>

        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-6 leading-relaxed">
          Bridging <span className="text-aaii-blue-300">engineering</span>, <span className="text-aaii-blue-400">business</span>, and <span className="text-aaii-orange-400">computer science</span> to prepare students for an AI-driven future.
        </p>

        <p className="text-white/40 text-sm uppercase tracking-widest mb-12">
          All majors welcome &bull; No experience required
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#summit"
            className="group px-10 py-5 bg-gradient-to-r from-aaii-orange-500 to-aaii-orange-400 hover:from-aaii-orange-400 hover:to-aaii-orange-300 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-aaii-orange-500/25 flex items-center justify-center gap-2"
          >
            2026 AI Summit
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="#about"
            className="px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300"
          >
            Learn More
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
