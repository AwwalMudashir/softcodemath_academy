import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import coursesData from '../../../courses.json'

const CoursesSection = () => {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const perPage = 6
  const navigate = useNavigate()

  const filteredCourses = useMemo(() => {
    if (!query.trim()) return coursesData
    const q = query.toLowerCase()
    return coursesData.filter((course) => {
      const matchTitle = course.title.toLowerCase().includes(q)
      const matchTech = course.technologies.some((tech) => tech.toLowerCase().includes(q))
      return matchTitle || matchTech
    })
  }, [query])

  const totalPages = Math.ceil(filteredCourses.length / perPage) || 1

  const visibleCourses = useMemo(() => {
    const start = (page - 1) * perPage
    return filteredCourses.slice(start, start + perPage)
  }, [page, filteredCourses])

  const handlePage = (p) => setPage(p)

  const handleSearch = (e) => {
    setQuery(e.target.value)
    setPage(1)
  }

  return (
    <section className="w-full bg-white py-10 sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:px-0">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#38bdf8]">Courses</p>
            <h2 className="text-3xl font-bold text-[#001971] sm:text-4xl">Browse Programs</h2>
            <p className="text-base text-[#001971]/80 sm:text-lg">
              Explore our tracks. Switch pages to see more courses or search by title or technology.
            </p>
          </div>
          <div className="w-full max-w-md">
            <div className="flex items-center gap-2 rounded-xl border border-[#001971]/15 bg-white px-3 py-2 shadow-[0_8px_22px_rgba(0,25,113,0.08)]">
              <i className="fa-solid fa-magnifying-glass text-[#001971]" aria-hidden="true"></i>
              <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search courses or technologies..."
                className="h-10 w-full bg-transparent text-sm text-[#001971] outline-none placeholder:text-[#001971]/50"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {visibleCourses.map((course) => (
            <div
              key={course.title}
              onClick={() => navigate(`/course/${course.id}`)}
              className="flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#001971]/12 bg-white shadow-[0_10px_25px_rgba(0,25,113,0.08)] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,25,113,0.12)]"
            >
              <div className="h-40 w-full overflow-hidden bg-[#f5f8ff]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-4 py-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#001971]">{course.title}</h3>
                  <p className="text-sm text-[#001971]/70">{course.short_desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {course.technologies.slice(0, 6).map((tech) => (
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
          ))}
          {visibleCourses.length === 0 && (
            <div className="col-span-full rounded-2xl border border-[#001971]/10 bg-[#f8fbff] p-6 text-center text-[#001971]/70">
              No courses match “{query}”. Try another keyword or technology.
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
            const isActive = p === page
            return (
              <button
                key={p}
                onClick={() => handlePage(p)}
                className={`h-10 w-10 rounded-full text-sm font-semibold transition ${
                  isActive
                    ? 'bg-[#001971] text-white shadow-[0_8px_20px_rgba(0,25,113,0.25)]'
                    : 'bg-white text-[#001971] ring-1 ring-[#001971]/20 hover:bg-[#f0f6ff]'
                }`}
                aria-label={`Go to page ${p}`}
              >
                {p}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CoursesSection