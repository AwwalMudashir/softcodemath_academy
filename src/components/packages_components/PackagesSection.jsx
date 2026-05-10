import React from 'react'
import { useNavigate } from 'react-router-dom'
import packagesData from '../../../course_packages.json'

const PackagesSection = () => {
  const navigate = useNavigate()

  return (
    <section className="w-full bg-white -mt-10 py-10 sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:px-0">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#38bdf8]">Packages</p>
            <h2 className="text-3xl font-bold text-[#001971] sm:text-4xl">Career Packages</h2>
            <p className="text-base text-[#001971]/80 sm:text-lg">Comprehensive packages that combine multiple courses into career-focused tracks.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {packagesData.slice(0, 6).map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => navigate(`/package/${pkg.id}`)}
              className="flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#001971]/12 bg-white shadow-[0_10px_25px_rgba(0,25,113,0.08)] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,25,113,0.12)]"
            >
              <div className="h-40 w-full overflow-hidden bg-[#f5f8ff]">
                <img src={pkg.image} alt={pkg.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-4 py-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#001971]">{pkg.title}</h3>
                  <p className="text-sm text-[#001971]/70">{pkg.short_desc || pkg.description.substring(0, 80) + '...'}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {pkg.technologies.slice(0, 6).map((tech) => (
                    <span key={tech} className="rounded-full bg-[#f0f6ff] px-3 py-1 text-xs font-semibold text-[#001971] ring-1 ring-[#001971]/10">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PackagesSection
