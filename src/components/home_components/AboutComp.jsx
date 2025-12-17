import React from 'react'
import { useNavigate } from 'react-router-dom'
const AboutComp = () => {
    const navigate = useNavigate()
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:px-0 lg:flex-row lg:items-center">
        <div className="flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#38bdf8]">About Us</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#001971] sm:text-4xl">
            Engineering excellence for safer structures.
          </h2>
          <p className="mt-4 text-base text-[#001971]/80 sm:text-lg">
            SoftCodeMath Academy blends rigorous instruction with real-world projects so learners master the tools and
            thinking needed to build reliable, modern systems—onsite, online, or blended.
          </p>
          <p className="mt-3 text-base text-[#001971]/75">
            Our mentors ship production software and guide you from fundamentals to launch, focusing on precision,
            safety, and innovation in every build.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#001971]/10 bg-linear-to-r from-[#f0f4ff] via-white to-[#e8f6ff] px-4 py-3">
              <p className="text-sm font-semibold text-[#001971]">Certified mentors</p>
              <p className="text-xs text-[#001971]/70">Experienced engineers and product builders.</p>
            </div>
            <div className="rounded-2xl border border-[#001971]/10 bg-linear-to-r from-[#e8f6ff] via-white to-[#f0f4ff] px-4 py-3">
              <p className="text-sm font-semibold text-[#001971]">Project-first</p>
              <p className="text-xs text-[#001971]/70">Build portfolio-ready work with feedback.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <p
              onClick={() => navigate('/courses')}
              className="inline-flex items-center justify-center rounded-full bg-[#001971] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#01124f]"
            >
              Explore programs
            </p>
            <p
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center rounded-full border border-[#001971]/25 px-6 py-3 text-sm font-semibold text-[#001971] transition hover:bg-[#38bdf8]/10"
            >
              Talk to us
            </p>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative overflow-hidden rounded-3xl border border-[#001971]/12 bg-white shadow-[0_14px_35px_rgba(0,25,113,0.12)]">
            <div className="aspect-4/3 w-full bg-[#f5f8ff]" />
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
              alt="Team collaboration placeholder"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutComp