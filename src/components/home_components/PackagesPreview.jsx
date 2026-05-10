import React from 'react'
import { useNavigate } from 'react-router-dom'
import packagesData from '../../../course_packages.json'

const PackagesPreview = () => {
  const navigate = useNavigate()
  const preview = packagesData.slice(0, 3)

  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 md:px-0">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#38bdf8]">Packages</p>
            <h3 className="text-2xl font-bold text-[#001971]">Career Packages</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {preview.map((pkg) => (
            <div key={pkg.id} onClick={() => navigate(`/package/${pkg.id}`)} className="cursor-pointer overflow-hidden rounded-3xl border border-[#001971]/12 bg-linear-to-b from-white via-[#f5f8ff] to-[#eaf7ff] p-4 shadow-[0_8px_22px_rgba(0,25,113,0.06)] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,25,113,0.12)]">
              <h4 className="text-md font-semibold text-[#001971]">{pkg.title}</h4>
              <p className="mt-2 text-sm text-[#001971]/70">{pkg.short_desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {pkg.technologies.slice(0,4).map((t)=> (
                  <span key={t} className="rounded-full bg-[#f0f6ff] px-3 py-1 text-xs font-semibold text-[#001971]">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PackagesPreview
