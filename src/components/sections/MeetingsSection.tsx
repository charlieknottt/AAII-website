export default function MeetingsSection() {
  const topics = [
    'AI in industry and business',
    'Hands-on tool workshops',
    'Ethics and societal impact',
    'Career preparation',
    'Technical deep dives',
    'Networking opportunities',
  ]

  return (
    <section id="meetings" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-aaii-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-aaii-orange-500/20 text-aaii-orange-400 text-sm font-medium rounded-full mb-4">
            Join Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bi-Weekly <span className="text-gradient-blue">Meetings</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Join the conversation every other Thursday. No experience required.
          </p>
        </div>

        {/* Meeting details card */}
        <div className="relative mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-aaii-orange-500/30 via-aaii-blue-400/20 to-aaii-orange-500/30 rounded-2xl blur-xl" />
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="p-8 text-center">
                <div className="w-14 h-14 bg-aaii-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-aaii-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white/50 text-sm uppercase tracking-wide mb-2">When</p>
                <p className="text-white font-semibold text-lg">Bi-weekly Thursdays</p>
              </div>
              <div className="p-8 text-center">
                <div className="w-14 h-14 bg-aaii-blue-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-aaii-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-white/50 text-sm uppercase tracking-wide mb-2">Where</p>
                <p className="text-white font-semibold text-lg">Wallace Hall 107</p>
              </div>
              <div className="p-8 text-center">
                <div className="w-14 h-14 bg-aaii-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-aaii-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-white/50 text-sm uppercase tracking-wide mb-2">Who</p>
                <p className="text-white font-semibold text-lg">All Auburn Students</p>
              </div>
            </div>
          </div>
        </div>

        {/* What we cover */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-gradient-to-r from-aaii-orange-500 to-aaii-blue-400 rounded-full" />
            What We Cover
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {topics.map((topic, index) => (
              <div
                key={topic}
                className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/5"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-aaii-orange-500 to-aaii-blue-400 rounded-full flex-shrink-0" />
                <span className="text-white/80">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
