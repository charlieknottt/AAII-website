export default function MissionSection() {
  const values = [
    {
      title: 'Interdisciplinary',
      description: 'Students from all majors exploring AI\'s cross-industry impact.',
      gradient: 'from-aaii-orange-500 to-aaii-orange-400',
    },
    {
      title: 'Industry Connected',
      description: 'Direct access to professionals from Apple, AWS, Synovus, and more.',
      gradient: 'from-aaii-blue-400 to-aaii-blue-300',
    },
    {
      title: 'Hands-On Learning',
      description: 'Workshops and discussions that build practical AI understanding.',
      gradient: 'from-aaii-blue-500 to-aaii-blue-400',
    },
    {
      title: 'Career Focused',
      description: 'Preparing students for jobs in an AI-transformed economy.',
      gradient: 'from-aaii-orange-400 to-aaii-blue-400',
    },
  ]

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-aaii-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-aaii-blue-400/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-aaii-blue-500/20 text-aaii-blue-300 text-sm font-medium rounded-full mb-4">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Shaping the Future of <span className="text-gradient">AI</span> at Auburn
          </h2>
        </div>

        {/* Main content card */}
        <div className="relative mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-aaii-orange-500/20 via-aaii-blue-400/20 to-aaii-blue-500/20 rounded-2xl blur-xl" />
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6">
                The Auburn Artificial Intelligence Initiative unites students across disciplines
                to understand how AI will shape their careers. Whether you study engineering,
                business, liberal arts, or any other field—AI will transform your industry.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                Through bi-weekly meetings, industry speakers, and our annual summit, we provide
                the space to learn, discuss, and prepare for an AI-driven future.
              </p>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${value.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-white/50">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
