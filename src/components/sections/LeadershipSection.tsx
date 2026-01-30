const leaders = [
  {
    name: 'Allison Fullwood',
    role: 'President',
    phone: '(703) 244-7708',
  },
]

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-aaii-orange-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-aaii-blue-500/20 text-aaii-blue-300 text-sm font-medium rounded-full mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Leadership
          </h2>
          <p className="text-white/50">
            Questions? We're always happy to connect.
          </p>
        </div>

        {/* Leaders */}
        <div className="flex justify-center mb-20">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/5 hover:border-aaii-orange-500/30 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-aaii-orange-500 to-aaii-orange-400 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-aaii-orange-500/20">
                <span className="text-white font-bold text-xl">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg">{leader.name}</h3>
              <p className="text-aaii-orange-400 text-sm mb-4">{leader.role}</p>
              <a
                href={`tel:${leader.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center gap-2 text-white/50 hover:text-aaii-blue-300 text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {leader.phone}
              </a>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-aaii-blue-500/20 via-aaii-orange-500/20 to-aaii-blue-500/20 rounded-2xl blur-xl" />
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-10 border border-white/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Our Partners</h3>
              <p className="text-white/50">
                We're grateful for the organizations that make our mission possible.
              </p>
            </div>

            {/* Biggio Center Feature */}
            <a
              href="https://biggio.auburn.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-8 group"
            >
              <div className="bg-gradient-to-r from-aaii-orange-500/10 via-aaii-blue-500/10 to-aaii-orange-500/10 rounded-xl p-6 border border-white/10 hover:border-aaii-orange-500/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-aaii-orange-500/30 to-aaii-blue-500/30 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">BC</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg group-hover:text-aaii-orange-400 transition-colors">
                        Biggio Center
                      </h4>
                      <p className="text-white/50 text-sm">Primary Academic Partner</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-white/30 group-hover:text-aaii-orange-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  The Biggio Center for the Enhancement of Teaching and Learning has been instrumental in supporting AAII's growth.
                  Their commitment to innovative education and student success has helped us build meaningful connections
                  between Auburn students and the rapidly evolving world of artificial intelligence. We're deeply grateful
                  for their continued partnership and guidance.
                </p>
              </div>
            </a>

            {/* Other Partners */}
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg max-w-md mx-auto">
              <div className="w-12 h-12 bg-aaii-orange-500/20 rounded-lg flex items-center justify-center">
                <span className="text-aaii-orange-400 font-semibold text-xs">AU</span>
              </div>
              <div>
                <p className="text-white font-medium">Auburn University</p>
                <p className="text-white/50 text-sm">Home Institution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
