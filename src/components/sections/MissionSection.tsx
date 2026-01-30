export default function MissionSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="section-divider mb-16" />

        <h2 className="text-3xl md:text-4xl font-light text-white mb-8 text-center">
          About AAII
        </h2>

        <div className="space-y-6 text-lg text-white/70 leading-relaxed">
          <p>
            The Auburn Artificial Intelligence Initiative unites students across disciplines
            to understand how AI will shape their careers. Whether you study engineering,
            business, liberal arts, or any other field, AI will transform your industry.
          </p>

          <p>
            Through bi-weekly meetings, industry speakers, and our annual summit, we provide
            the space to learn, discuss, and prepare for an AI-driven future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="border-l-2 border-aaii-orange-500/50 pl-6">
            <h3 className="text-white font-medium mb-2">Interdisciplinary</h3>
            <p className="text-white/60 text-sm">
              Students from all majors exploring AI's cross-industry impact.
            </p>
          </div>
          <div className="border-l-2 border-aaii-blue-400/50 pl-6">
            <h3 className="text-white font-medium mb-2">Industry Connected</h3>
            <p className="text-white/60 text-sm">
              Direct access to professionals from Apple, AWS, Synovus, and more.
            </p>
          </div>
          <div className="border-l-2 border-aaii-blue-400/50 pl-6">
            <h3 className="text-white font-medium mb-2">Hands-On Learning</h3>
            <p className="text-white/60 text-sm">
              Workshops and discussions that build practical AI understanding.
            </p>
          </div>
          <div className="border-l-2 border-aaii-orange-500/50 pl-6">
            <h3 className="text-white font-medium mb-2">Career Focused</h3>
            <p className="text-white/60 text-sm">
              Preparing students for jobs in an AI-transformed economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
