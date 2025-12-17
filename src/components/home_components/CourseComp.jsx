import React from 'react'
import { useNavigate } from 'react-router-dom'
const CourseComp = () => {
    const navigate = useNavigate()
  const courses = [
    { title: 'Web Development', icon: 'fa-solid fa-laptop-code' },
    { title: 'UI/UX Design', icon: 'fa-solid fa-pen-ruler' },
    { title: 'Data Science', icon: 'fa-solid fa-chart-line' },
    { title: 'Artificial Intelligence', icon: 'fa-solid fa-robot' },
  ]

  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 md:px-0">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#38bdf8]">Explore</p>
            <h2 className="text-3xl font-bold text-[#001971] sm:text-4xl">Our Popular Courses</h2>
          </div>
          <p
            onClick={() => navigate('/courses')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#001971] transition hover:text-[#38bdf8]"
          >
            Browse Online Courses <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group flex flex-col items-center justify-center gap-3 rounded-3xl border border-[#001971]/12 bg-linear-to-b from-white via-[#f5f8ff] to-[#eaf7ff] px-4 py-8 text-center shadow-[0_10px_25px_rgba(0,25,113,0.08)] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,25,113,0.12)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#38bdf8] to-[#001971] text-white shadow-lg shadow-[#001971]/30 transition group-hover:scale-105">
                <i className={`${course.icon} text-2xl`} aria-hidden="true"></i>
              </div>
              <p className="text-base font-semibold text-[#001971]">{course.title}</p>
              <span className="text-xs font-medium tracking-wide text-[#001971]/70">
                High-impact, mentor-led tracks
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseComp