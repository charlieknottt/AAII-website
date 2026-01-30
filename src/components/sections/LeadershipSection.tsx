const leaders = [
  {
    name: 'Charlie Knott',
    role: 'President',
    phone: '(703) 389-7386',
  },
  {
    name: 'Allison Fullwood',
    role: 'Co-Leader',
    phone: '(703) 244-7708',
  },
  {
    name: 'Will Cooper',
    role: 'Co-Leader',
    phone: '(770) 576-0510',
  },
]

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="section-divider mb-16" />

        <h2 className="text-3xl md:text-4xl font-light text-white mb-4 text-center">
          Leadership
        </h2>

        <p className="text-white/50 text-center mb-12">
          Questions? We're happy to connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <div key={leader.name} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aaii-orange-500 to-aaii-orange-400 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-medium">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-white font-medium">{leader.name}</h3>
              <p className="text-aaii-orange-400 text-sm mb-3">{leader.role}</p>
              <a
                href={`tel:${leader.phone.replace(/[^0-9]/g, '')}`}
                className="text-white/50 text-sm hover:text-white"
              >
                {leader.phone}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm uppercase tracking-wide mb-4">Partners</p>
          <p className="text-white/60">
            Biggio Center &middot; AI@AU &middot; Auburn University
          </p>
        </div>
      </div>
    </section>
  )
}
