export default function GetInvolvedSection() {
  return (
    <section id="involved" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="section-divider mb-16" />

        <h2 className="text-3xl md:text-4xl font-light text-white mb-4 text-center">
          Get Involved
        </h2>

        <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">
          No experience required. Just curiosity and enthusiasm.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="border-l-2 border-aaii-orange-500/50 pl-6 py-2">
            <h3 className="text-white font-medium mb-1">Attend Meetings</h3>
            <p className="text-white/50 text-sm">Thursdays in Wallace Hall 107</p>
          </div>
          <div className="border-l-2 border-aaii-blue-400/50 pl-6 py-2">
            <h3 className="text-white font-medium mb-1">Join the Summit</h3>
            <p className="text-white/50 text-sm">RSVP for our April 2025 event</p>
          </div>
          <div className="border-l-2 border-aaii-blue-400/50 pl-6 py-2">
            <h3 className="text-white font-medium mb-1">Spread the Word</h3>
            <p className="text-white/50 text-sm">Share with interested friends</p>
          </div>
          <div className="border-l-2 border-aaii-orange-500/50 pl-6 py-2">
            <h3 className="text-white font-medium mb-1">Join Leadership</h3>
            <p className="text-white/50 text-sm">Reach out about opportunities</p>
          </div>
        </div>

        <div className="text-center bg-white/5 rounded-lg p-10">
          <h3 className="text-2xl font-light text-white mb-4">
            Ready to Shape the Future of AI?
          </h3>
          <p className="text-white/50 mb-8 max-w-md mx-auto">
            Join Auburn's premier student organization for artificial intelligence.
          </p>
          <a
            href="#summit"
            className="inline-block px-8 py-4 bg-aaii-orange-500 hover:bg-aaii-orange-400 text-white font-medium rounded-lg"
          >
            RSVP for the Summit
          </a>
        </div>
      </div>
    </section>
  )
}
