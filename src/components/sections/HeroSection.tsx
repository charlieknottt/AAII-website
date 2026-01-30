import Link from 'next/link'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
          Auburn <span className="text-gradient font-normal">AI</span> Initiative
        </h1>

        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
          A student-led organization bridging engineering, business, and computer science
          to explore AI's impact on future careers.
        </p>

        <p className="text-white/50 text-sm uppercase tracking-widest mb-12">
          All majors welcome. No experience required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#summit"
            className="px-8 py-4 bg-aaii-orange-500 hover:bg-aaii-orange-400 text-white font-medium rounded-lg"
          >
            2025 AI Summit
          </Link>
          <Link
            href="#about"
            className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-medium rounded-lg hover:bg-white/5"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
