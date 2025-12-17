import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()
  const stats = [
    { label: 'Courses', value: '30+' },
    { label: 'Fields', value: '10+' },
  ]

  const features = [
    {
      title: 'Get Ready For a Career',
      desc: 'Build portfolio projects and practice real workflows with mentors.',
      icon: 'fa-solid fa-chart-line',
    },
    {
      title: 'Earn a Certificate',
      desc: 'Complete assessments and receive verifiable certificates.',
      icon: 'fa-solid fa-certificate',
    },
    {
      title: 'Global Community',
      desc: 'Join peers, collaborate, and learn from live sessions anywhere.',
      icon: 'fa-solid fa-globe',
    },
  ]

  return (
    <section className="relative w-full bg-gray-200 pb-16">
      {/* Top wave accent */}
      <div className="absolute inset-0">
        <div className="h-64 w-full bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(0,25,113,0.08),transparent_30%)]" />
      </div>

      <div className="relative mt-[20px] mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pt-16 md:pt-20 lg:flex-row lg:items-center lg:gap-16 md:px-0">
        {/* Left content */}
        <div className="flex-1 space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold leading-tight text-[#001971] sm:text-5xl">
              Find the right course for you
            </h1>
            <p className="text-base text-[#001971]/80 sm:text-lg">
              {stats[0].value} online courses from {stats[1].value} institutions.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <button onClick={() => navigate('/contact')} className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl bg-[#001971] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#01124f]">
              <i className="fa-solid fa-play"></i>
              Start Learning
            </button>
            <button onClick={() => navigate('/about')} className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl border border-[#001971]/15 bg-white px-5 py-3 text-sm font-semibold text-[#001971] transition hover:bg-[#f0f6ff]">
              <i className="fa-solid fa-calendar-check"></i>
              About us
            </button>
          </div>

          {/* Stats and CTA */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#001971]/70">
            {stats.map((item) => (
              <span key={item.label} className="flex items-center gap-2 rounded-full bg-[#f8fbff] px-3 py-2">
                <i className="fa-solid fa-circle-check text-[#38bdf8]" aria-hidden="true"></i>
                <span className="font-semibold text-[#001971]">{item.value}</span>
                <span className="text-[#001971]/70">{item.label}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right illustration placeholder */}
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-3xl border border-[#001971]/10 bg-[#f5f8ff] shadow-[0_14px_35px_rgba(0,25,113,0.12)]">
            <div className="aspect-4/3 w-full bg-white/60" />
            {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="rounded-full border border-dashed border-[#001971]/30 px-4 py-2 text-sm font-semibold text-[#001971] bg-white/80">
                Illustration Placeholder
              </span>
            </div> */}
            <img src="/course-illustration.jpg" alt="courses" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </div>

      {/* Bottom feature strip */}
      <div className="mt-16 w-full bg-[#001971] py-12 mb-[-40px] text-white">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 md:px-0 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white shadow-inner">
                <i className={`${feature.icon} text-xl`} aria-hidden="true"></i>
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-white/80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero