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

const schedule2025 = [
  { time: '5:00 PM', title: 'Networking & Industry Engagement' },
  { time: '5:30 PM', title: 'Welcome & Introduction' },
  { time: '5:45 PM', title: 'Keynote Presentations' },
  { time: '7:30 PM', title: 'Panel Discussion & Q&A' },
  { time: '8:00 PM', title: 'Closing Remarks' },
]

const speakers2024 = [
  { company: 'AWS', speakers: ['Charles Fullwood', 'Trisha Jaggi', 'Mackenzie Saunders'] },
  { company: 'Synovus', speakers: ['Katie Webb'] },
  { company: 'Apple', speakers: ['Jeffrey Bigham'] },
]

function PhotoSlideshow({ photos }: { photos: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (photos.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [photos.length])

  if (photos.length === 0) {
    return (
      <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center">
        <p className="text-white/40 text-sm">Photos coming soon</p>
      </div>
    )
  }

  return (
    <div className="relative aspect-video bg-white/5 rounded-lg overflow-hidden">
      {photos.map((photo, index) => (
        <img
          key={photo}
          src={photo}
          alt={`Summit photo ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      {photos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function SummitSection() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'recap'>('upcoming')

  return (
    <section id="summit" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="section-divider mb-16" />

        <h2 className="text-3xl md:text-4xl font-light text-white mb-4 text-center">
          Annual AI Summit
        </h2>

        <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
          Our flagship event bringing together students, faculty, and industry leaders.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-white/10 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'upcoming'
                  ? 'bg-aaii-orange-500 text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              2025 Summit
            </button>
            <button
              onClick={() => setActiveTab('recap')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'recap'
                  ? 'bg-aaii-orange-500 text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Last Year
            </button>
          </div>
        </div>

        {/* 2025 Summit */}
        {activeTab === 'upcoming' && (
          <div className="animate-fade-in">
            <div className="bg-white/5 rounded-lg p-8 mb-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-aaii-orange-400 text-sm uppercase tracking-wide mb-1">Date</p>
                  <p className="text-white font-medium">April 22, 2025</p>
                </div>
                <div>
                  <p className="text-aaii-blue-300 text-sm uppercase tracking-wide mb-1">Time</p>
                  <p className="text-white font-medium">5:00 - 8:30 PM</p>
                </div>
                <div>
                  <p className="text-aaii-blue-400 text-sm uppercase tracking-wide mb-1">Location</p>
                  <p className="text-white font-medium">Auburn Hotel</p>
                </div>
                <div>
                  <p className="text-aaii-orange-400 text-sm uppercase tracking-wide mb-1">Cost</p>
                  <p className="text-white font-medium">Free</p>
                </div>
              </div>
            </div>

            <div className="text-center mb-10">
              <a
                href="https://auburn.qualtrics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-aaii-orange-500 hover:bg-aaii-orange-400 text-white font-medium rounded-lg"
              >
                RSVP Now
              </a>
              <p className="text-white/40 text-sm mt-3">Seats limited. Appetizers included.</p>
            </div>

            <h3 className="text-xl font-medium text-white mb-6">Schedule</h3>
            <div className="space-y-3">
              {schedule2025.map((item) => (
                <div key={item.time} className="flex gap-6 py-3 border-b border-white/5">
                  <span className="text-aaii-orange-400 font-medium w-24">{item.time}</span>
                  <span className="text-white/80">{item.title}</span>
                </div>
              ))}
            </div>

            <p className="text-white/40 text-sm text-center mt-10">
              In partnership with Biggio Center, AI@AU, and Auburn University
            </p>
          </div>
        )}

        {/* 2024 Recap */}
        {activeTab === 'recap' && (
          <div className="animate-fade-in">
            <div className="mb-10">
              <PhotoSlideshow photos={summitPhotos} />
            </div>

            <div className="text-center mb-10">
              <p className="text-aaii-orange-400 text-sm uppercase tracking-wide mb-2">April 2024</p>
              <h3 className="text-2xl font-light text-white mb-4">First Annual Summit</h3>
              <p className="text-white/60 max-w-xl mx-auto">
                Over 100 students, faculty, and industry professionals gathered to explore
                responsible AI development and innovation.
              </p>
            </div>

            <h3 className="text-xl font-medium text-white mb-6">Featured Speakers</h3>
            <div className="space-y-6">
              {speakers2024.map((group) => (
                <div key={group.company} className="border-l-2 border-aaii-blue-400/50 pl-6">
                  <p className="text-white font-medium mb-1">{group.company}</p>
                  <p className="text-white/50 text-sm">{group.speakers.join(', ')}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-lg font-medium text-white mb-4">Key Themes</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-aaii-orange-400 mb-1">Responsible AI</p>
                  <p className="text-white/50">Ethical, inclusive, human-centered systems</p>
                </div>
                <div>
                  <p className="text-aaii-blue-300 mb-1">Innovation</p>
                  <p className="text-white/50">Cloud-driven AI transforming industries</p>
                </div>
                <div>
                  <p className="text-aaii-blue-400 mb-1">Collaboration</p>
                  <p className="text-white/50">Bridging students, faculty, and industry</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
