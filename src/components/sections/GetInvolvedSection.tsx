export default function GetInvolvedSection() {
  const ways = [
    {
      title: 'Attend Meetings',
      description: 'Join us Thursdays in Wallace Hall 107',
      gradient: 'from-aaii-orange-500 to-aaii-orange-400',
    },
    {
      title: 'Join the Summit',
      description: 'RSVP for our April 2026 flagship event',
      gradient: 'from-aaii-blue-400 to-aaii-blue-300',
    },
    {
      title: 'Spread the Word',
      description: 'Share AAII with interested friends',
      gradient: 'from-aaii-blue-500 to-aaii-blue-400',
    },
    {
      title: 'Join Leadership',
      description: 'Reach out about opportunities',
      gradient: 'from-aaii-orange-400 to-aaii-blue-400',
    },
  ]

  return (
    <section id="involved" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-aaii-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-aaii-blue-400/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-aaii-orange-500/20 text-aaii-orange-400 text-sm font-medium rounded-full mb-4">
            Take Action
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get <span className="text-gradient">Involved</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            No experience required. Just curiosity and enthusiasm.
          </p>
        </div>

        {/* Ways to get involved */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {ways.map((way, index) => (
            <div
              key={way.title}
              className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${way.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">{way.title}</h3>
              <p className="text-white/50 text-sm">{way.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-aaii-orange-500/30 via-aaii-blue-400/20 to-aaii-orange-500/30 rounded-2xl blur-xl" />
          <div className="relative bg-gradient-to-br from-aaii-orange-500/10 via-aaii-blue-500/5 to-aaii-blue-600/10 backdrop-blur-sm rounded-xl p-10 md:p-14 text-center border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Shape the Future?
            </h3>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Join Auburn's premier student-led AI organization. Connect with industry leaders,
              build practical skills, and prepare for an AI-driven career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#summit"
                className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-aaii-orange-500 to-aaii-orange-400 hover:from-aaii-orange-400 hover:to-aaii-orange-300 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-aaii-orange-500/25"
              >
                RSVP for the Summit
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#leadership"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
