import React, { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import courses from '../../courses.json'

const CourseContent = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const course = useMemo(() => courses.find((c) => c.id === id), [id])

  if (!course) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-white px-4 text-center">
        <div className="max-w-lg space-y-4">
          <h1 className="text-3xl font-bold text-[#001971]">Course not found</h1>
          <p className="text-[#001971]/70">The course you are looking for does not exist or was moved.</p>
          <button
            onClick={() => navigate('/courses')}
            className="rounded-lg bg-[#001971] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#01124f]"
          >
            Back to Courses
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${course.image})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-[#001971]/60" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-12 md:px-0 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#38bdf8]">Course</p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{course.title}</h1>
          <p className="max-w-3xl text-base text-white/85 sm:text-lg">{course.short_desc}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {course.technologies.map((tech) => (
              <span key={tech} className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Details + Form */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-0 md:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#001971]">What you'll learn</h2>
            <p className="text-base text-[#001971]/80">{course.description}</p>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-[#001971]">Key tools & stack</h3>
              <div className="flex flex-wrap gap-2">
                {course.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[#f0f6ff] px-3 py-1 text-xs font-semibold text-[#001971] ring-1 ring-[#001971]/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#001971]/12 bg-white shadow-[0_12px_30px_rgba(0,25,113,0.12)] p-6 space-y-4">
            <h3 className="text-xl font-bold text-[#001971]">Register for this course</h3>
            <p className="text-sm text-[#001971]/70">Share your details and we will reach out with the next steps.</p>
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#001971]">Full name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-[#001971]/15 bg-white px-4 py-3 text-sm text-[#001971] outline-none focus:border-[#38bdf8]"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#001971]">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-[#001971]/15 bg-white px-4 py-3 text-sm text-[#001971] outline-none focus:border-[#38bdf8]"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#001971]">Phone</label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-[#001971]/15 bg-white px-4 py-3 text-sm text-[#001971] outline-none focus:border-[#38bdf8]"
                  placeholder="+234..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#001971]">Message</label>
                <textarea
                  className="w-full rounded-lg border border-[#001971]/15 bg-white px-4 py-3 text-sm text-[#001971] outline-none focus:border-[#38bdf8]"
                  rows="3"
                  placeholder="Any specific goals or questions?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#001971] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#01124f]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CourseContent