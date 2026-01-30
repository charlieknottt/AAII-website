export default function MeetingsSection() {
  return (
    <section id="meetings" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="section-divider mb-16" />

        <h2 className="text-3xl md:text-4xl font-light text-white mb-4 text-center">
          Meetings
        </h2>

        <p className="text-white/50 text-center mb-12">
          Bi-weekly on Thursdays
        </p>

        <div className="bg-white/5 rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-aaii-orange-400 text-sm uppercase tracking-wide mb-2">When</p>
              <p className="text-white">Bi-weekly Thursdays</p>
            </div>
            <div>
              <p className="text-aaii-blue-300 text-sm uppercase tracking-wide mb-2">Where</p>
              <p className="text-white">Wallace Hall, Room 107</p>
            </div>
            <div>
              <p className="text-aaii-blue-400 text-sm uppercase tracking-wide mb-2">Who</p>
              <p className="text-white">All Auburn students</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-medium text-white mb-6">What We Cover</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-white/70">
            <p className="mb-3">AI in industry and business</p>
            <p className="mb-3">Hands-on tool workshops</p>
            <p className="mb-3">Ethics and societal impact</p>
          </div>
          <div className="text-white/70">
            <p className="mb-3">Career preparation</p>
            <p className="mb-3">Technical deep dives</p>
            <p className="mb-3">Networking opportunities</p>
          </div>
        </div>
      </div>
    </section>
  )
}
