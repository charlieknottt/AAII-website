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
      <div className="absolute top-0 right-0 w-96 h-96 bg-aaii-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-aaii-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
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
        <div className="flex justify-center mb-8">
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

        {/* Recap call-out */}
        {activeTab === 'upcoming' && (
          <div className="text-center mb-12">
            <button
              onClick={() => setActiveTab('recap')}
              className="inline-flex items-center gap-2 text-white/50 hover:text-aaii-orange-400 transition-colors group"
            >
              <span className="w-2 h-2 bg-aaii-orange-500 rounded-full animate-pulse" />
              <span>See highlights from our 2025 Summit with 300+ attendees</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* 2026 Summit */}
        {activeTab === 'upcoming' && (
          <div className="animate-fade-in">
            {/* Hero Card */}
            <div className="relative bg-gradient-to-br from-aaii-orange-500/20 via-aaii-blue-500/10 to-aaii-blue-600/20 rounded-2xl p-1">
              <div className="bg-aaii-blue-950/80 backdrop-blur-sm rounded-xl p-8 md:p-12 text-center">
                <div className="mb-6">
                  <p className="text-white/50 text-sm uppercase tracking-wide mb-2">Presented by</p>
                  <p className="text-2xl font-bold text-gradient">The Biggio Center</p>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  2026 AI Summit
                </h3>

                <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                  Details coming soon. Stay tuned for information about speakers, schedule, and registration.
                </p>

                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white/70 rounded-xl">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  More information coming soon
                </div>
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
                <p className="text-3xl font-bold text-gradient mb-1">300+</p>
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
                Our inaugural summit brought together over 300 students, faculty, and industry leaders for an evening
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
