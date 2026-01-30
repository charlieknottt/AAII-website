export default function MissionSection() {
  const offerings = [
    {
      title: 'Professional Engagement',
      description: 'Gain insights from top professionals in software engineering, computer science, finance, and education across Auburn and the United States.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Cross-Disciplinary Learning',
      description: 'Bridge the gap between engineering, business, and computer science through collaborative discussions and projects.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Zero Experience Required',
      description: 'Whether you\'re an AI expert or just curious about the field, everyone is welcome. We meet you where you are.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Future-Ready Skills',
      description: 'Prepare for careers increasingly influenced by artificial intelligence and automation through hands-on learning.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="mission" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-aaii-orange-500 uppercase tracking-wider mb-3">
            Our Mission
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Transforming Challenge into <span className="text-aaii-orange-500">Strength</span>
          </h3>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We unite Auburn students to transform the shared challenge of AI advancement
            into collective strength, preparing everyone for careers shaped by artificial intelligence.
          </p>
        </div>

        {/* Mission Statement Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">Who We Are</h4>
              <p className="text-white/70 mb-4">
                The Auburn Artificial Intelligence Initiative is a student organization dedicated
                to exploring AI's impact on future careers. We provide an inclusive space for
                all majors to engage in discussions and learn from industry professionals.
              </p>
              <p className="text-white/70">
                By bridging engineering, business, and computer science, we create a unique
                environment where diverse perspectives come together to tackle the most pressing
                questions about AI and the future of work.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-aaii-blue-700 to-aaii-blue-900 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-aaii-orange-500 mb-2">AI</div>
                  <div className="text-white/80 text-lg">for Everyone</div>
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70">Engineering</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70">Business</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70">CompSci</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer Grid */}
        <h4 className="text-2xl font-bold text-white text-center mb-8">What We Offer</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((offering, index) => (
            <div
              key={offering.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-aaii-orange-500/20 rounded-lg flex items-center justify-center text-aaii-orange-500 mb-4">
                {offering.icon}
              </div>
              <h5 className="text-lg font-semibold text-white mb-2">{offering.title}</h5>
              <p className="text-white/60 text-sm">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
