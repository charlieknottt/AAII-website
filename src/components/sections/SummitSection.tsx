'use client'

import { useState, useEffect } from 'react'

const summitPhotos: string[] = [
  '/summit-photos/IMG_1425.jpeg',
  '/summit-photos/IMG_1426.JPG',
  '/summit-photos/IMG_1427.JPG',
  '/summit-photos/IMG_1428.JPG',
  '/summit-photos/IMG_1429.JPG',
  '/summit-photos/IMG_1430.JPG',
  '/summit-photos/IMG_1431.JPG',
  '/summit-photos/IMG_1432.JPG',
  '/summit-photos/IMG_1433.JPG',
  '/summit-photos/IMG_1434.JPG',
  '/summit-photos/IMG_1435.JPG',
  '/summit-photos/IMG_1436.JPG',
  '/summit-photos/IMG_1437.JPG',
  '/summit-photos/IMG_1438.JPG',
  '/summit-photos/IMG_1439.JPG',
  '/summit-photos/IMG_1440.JPG',
  '/summit-photos/IMG_1490.jpeg',
  '/summit-photos/IMG_1491.jpeg',
  '/summit-photos/IMG_1492.jpeg',
  '/summit-photos/IMG_1493.jpeg',
]

const speakers2025 = [
  { company: 'AWS', speakers: ['Charles Fullwood', 'Trisha Jaggi', 'Mackenzie Saunders'] },
  { company: 'Synovus', speakers: ['Katie Webb'] },
  { company: 'Apple', speakers: ['Jeffrey Bigham'] },
]

function PhotoSlideshow({ photos }: { photos: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (photos.length <= 1 || !isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [photos.length, isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  if (photos.length === 0) {
    return (
      <div className="aspect-[16/9] bg-gradient-to-br from-white/5 to-white/10 rounded-xl flex items-center justify-center">
        <p className="text-white/40 text-sm">Photos coming soon</p>
      </div>
    )
  }

  return (
    <div className="relative group">
      {/* Main slideshow container */}
      <div className="relative aspect-[16/9] bg-black/20 rounded-xl overflow-hidden shadow-2xl">
        {photos.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            alt={`Summit photo ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-contain bg-black/40 transition-all duration-700 ${
              index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />
        ))}

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-aaii-orange-500 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-aaii-orange-500 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-aaii-orange-500 w-6'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Photo counter */}
      <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white/80 text-sm">
        {currentIndex + 1} / {photos.length}
      </div>
    </div>
  )
}

export default function SummitSection() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'recap'>('upcoming')

  return (
    <section id="summit" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-aaii-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-aaii-blue-400/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-aaii-orange-500/20 text-aaii-orange-400 text-sm font-medium rounded-full mb-4">
            Flagship Event
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Auburn <span className="text-gradient">AI</span> Summit
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Where students, faculty, and industry leaders converge to shape the future of artificial intelligence.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 backdrop-blur-sm rounded-full p-1.5">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'upcoming'
                  ? 'bg-gradient-to-r from-aaii-orange-500 to-aaii-orange-400 text-white shadow-lg shadow-aaii-orange-500/25'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              2026 Summit
            </button>
            <button
              onClick={() => setActiveTab('recap')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'recap'
                  ? 'bg-gradient-to-r from-aaii-orange-500 to-aaii-orange-400 text-white shadow-lg shadow-aaii-orange-500/25'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              2025 Recap
            </button>
          </div>
        </div>

        {/* 2025 Summit */}
        {activeTab === 'upcoming' && (
          <div className="animate-fade-in space-y-12">
            {/* Hero Card */}
            <div className="relative bg-gradient-to-br from-aaii-orange-500/20 via-aaii-blue-500/10 to-aaii-blue-600/20 rounded-2xl p-1">
              <div className="bg-aaii-blue-950/80 backdrop-blur-sm rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-aaii-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-aaii-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Date</p>
                    <p className="text-white font-semibold">April 2026</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-aaii-blue-400/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-aaii-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Time</p>
                    <p className="text-white font-semibold">5:00 - 8:30 PM</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-aaii-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-aaii-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Venue</p>
                    <p className="text-white font-semibold">Auburn Hotel</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Admission</p>
                    <p className="text-white font-semibold">Free Entry</p>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://auburn.qualtrics.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-aaii-orange-500 to-aaii-orange-400 hover:from-aaii-orange-400 hover:to-aaii-orange-300 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-aaii-orange-500/25"
                  >
                    Reserve Your Spot
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <p className="text-white/40 text-sm mt-4">Limited seats available. Appetizers & refreshments provided.</p>
                </div>
              </div>
            </div>

            {/* Schedule Preview */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-aaii-orange-500 to-aaii-blue-400 rounded-full" />
                Event Schedule
              </h3>
              <div className="grid gap-3">
                {[
                  { time: '5:00 PM', title: 'Networking & Appetizers', highlight: true },
                  { time: '5:30 PM', title: 'Opening Keynote' },
                  { time: '6:00 PM', title: 'Industry Speaker Panel' },
                  { time: '7:15 PM', title: 'Interactive Q&A Session' },
                  { time: '8:00 PM', title: 'Closing & Extended Networking', highlight: true },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-6 p-4 rounded-lg transition-all duration-300 hover:bg-white/5 ${
                      item.highlight ? 'bg-white/5' : ''
                    }`}
                  >
                    <span className="text-aaii-orange-400 font-mono font-semibold w-20">{item.time}</span>
                    <span className="w-2 h-2 bg-gradient-to-r from-aaii-orange-500 to-aaii-blue-400 rounded-full" />
                    <span className="text-white">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Speakers Preview */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-aaii-orange-500 to-aaii-blue-400 rounded-full" />
                Confirmed Speakers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { company: 'Tech Industry Leader', role: 'Keynote Speaker', color: 'from-aaii-orange-500/20 to-aaii-orange-600/10' },
                  { company: 'AI Research Expert', role: 'Panel Speaker', color: 'from-aaii-blue-400/20 to-aaii-blue-500/10' },
                  { company: 'More Speakers', role: 'To Be Announced', color: 'from-aaii-blue-500/20 to-aaii-blue-600/10' },
                ].map((speaker, index) => (
                  <div key={index} className={`bg-gradient-to-br ${speaker.color} rounded-xl p-6 border border-white/5`}>
                    <p className="text-white font-semibold mb-1">{speaker.company}</p>
                    <p className="text-white/50 text-sm">{speaker.role}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-sm text-center mt-4">Full speaker lineup to be announced soon</p>
            </div>

            {/* Partners */}
            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-white/40 text-sm mb-4">In partnership with</p>
              <div className="flex flex-wrap justify-center gap-6">
                {['Biggio Center', 'Auburn University'].map((partner) => (
                  <span key={partner} className="px-4 py-2 bg-white/5 rounded-lg text-white/70 text-sm">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2025 Recap */}
        {activeTab === 'recap' && (
          <div className="animate-fade-in space-y-12">
            {/* Photo Slideshow */}
            <PhotoSlideshow photos={summitPhotos} />

            {/* Recap Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/5 rounded-xl p-6">
                <p className="text-3xl font-bold text-gradient mb-1">100+</p>
                <p className="text-white/50 text-sm">Attendees</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <p className="text-3xl font-bold text-gradient-blue mb-1">3</p>
                <p className="text-white/50 text-sm">Industry Partners</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <p className="text-3xl font-bold text-gradient mb-1">6</p>
                <p className="text-white/50 text-sm">Expert Speakers</p>
              </div>
            </div>

            {/* About the Event */}
            <div className="text-center">
              <span className="inline-block px-3 py-1 bg-aaii-blue-500/20 text-aaii-blue-300 text-sm rounded-full mb-4">
                April 2025
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">First Annual AI Summit</h3>
              <p className="text-white/60 max-w-2xl mx-auto">
                Our inaugural summit brought together students, faculty, and industry leaders for an evening
                of insight and connection. Speakers from Apple, AWS, and Synovus shared perspectives on
                responsible AI development and innovation.
              </p>
            </div>

            {/* Speakers */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Featured Speakers</h3>
              <div className="grid gap-4">
                {speakers2025.map((group) => (
                  <div key={group.company} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-aaii-orange-500/30 to-aaii-blue-500/30 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{group.company.slice(0, 2)}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{group.company}</p>
                      <p className="text-white/50 text-sm">{group.speakers.join(', ')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Themes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Responsible AI', desc: 'Ethical, human-centered systems', color: 'border-aaii-orange-500/50' },
                { title: 'Innovation', desc: 'Cloud-driven transformation', color: 'border-aaii-blue-400/50' },
                { title: 'Collaboration', desc: 'Bridging academia & industry', color: 'border-aaii-blue-500/50' },
              ].map((theme) => (
                <div key={theme.title} className={`border-l-2 ${theme.color} pl-4 py-2`}>
                  <p className="text-white font-medium">{theme.title}</p>
                  <p className="text-white/50 text-sm">{theme.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
