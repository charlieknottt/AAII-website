export default function SponsorSection() {
  const benefits = [
    {
      title: 'Brand Visibility',
      description: 'Logo placement at events, on our website, and across marketing materials reaching 300+ engaged students.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Talent Pipeline',
      description: 'Direct access to top Auburn students in engineering, business, and computer science passionate about AI.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Speaking Opportunities',
      description: 'Share your company\'s AI journey and innovations at our meetings and annual summit.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
    },
    {
      title: 'Community Impact',
      description: 'Support the next generation of AI leaders and contribute to Auburn\'s growing tech ecosystem.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="sponsors" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-aaii-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-aaii-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-aaii-orange-500/20 text-aaii-orange-400 text-sm font-medium rounded-full mb-4">
            Partner With Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Become a <span className="text-gradient">Sponsor</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Join leading companies in supporting Auburn's premier AI student organization and connect with the next generation of tech talent.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: '300+', label: 'Summit Attendees' },
            { value: '100+', label: 'Active Members' },
            { value: '6+', label: 'Industry Speakers' },
            { value: '3', label: 'Partner Companies' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-white/5 rounded-xl border border-white/5">
              <p className="text-3xl font-bold text-gradient mb-1">{stat.value}</p>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Why Sponsor */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Partner with AAII?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group p-6 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 hover:border-aaii-orange-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-aaii-orange-500/20 to-aaii-blue-500/20 rounded-xl flex items-center justify-center text-aaii-orange-400 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">{benefit.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Sponsors & Speakers */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sponsors */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 text-center">Past Sponsors</h3>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {[
                  { name: 'Biggio Center', logo: '/biggio-logo.png', height: 'h-20' },
                  { name: 'AI@AU', logo: '/aiau-logo.png', height: 'h-20' },
                ].map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="px-6 py-4 bg-white/5 rounded-xl border border-white/10 hover:border-aaii-orange-500/30 transition-all hover:scale-105"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className={`${sponsor.height} w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Speakers */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 text-center">Past Speakers</h3>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {[
                  { name: 'Apple', logo: '/apple-logo.png', height: 'h-12', maxWidth: '' },
                  { name: 'AWS', logo: '/aws-logo.png', height: 'h-12', maxWidth: '' },
                  { name: 'Synovus', logo: '/synovus-logo.png', height: 'h-5', maxWidth: 'max-w-[120px]' },
                ].map((speaker) => (
                  <div
                    key={speaker.name}
                    className="px-6 py-4 bg-white/5 rounded-xl border border-white/10 hover:border-aaii-blue-400/30 transition-all hover:scale-105"
                  >
                    <img
                      src={speaker.logo}
                      alt={speaker.name}
                      className={`${speaker.height} ${speaker.maxWidth} w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-aaii-orange-500/30 via-aaii-blue-500/20 to-aaii-orange-500/30 rounded-3xl blur-xl" />
          <div className="relative bg-gradient-to-br from-aaii-blue-900/80 to-aaii-blue-950/80 backdrop-blur-sm rounded-2xl p-10 md:p-14 text-center border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make an Impact?
            </h3>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Partner with AAII and help shape the future of AI education at Auburn University. Let's discuss how we can work together.
            </p>
            <a
              href="mailto:anf0047@auburn.edu"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-aaii-orange-500 to-aaii-orange-400 hover:from-aaii-orange-400 hover:to-aaii-orange-300 text-white text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-aaii-orange-500/30"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
            <p className="text-white/40 text-sm mt-4">
              anf0047@auburn.edu
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
