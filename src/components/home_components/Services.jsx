import React from 'react'
import { useNavigate } from 'react-router-dom'
const Services = () => {
  const navigate = useNavigate()
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-0 lg:flex-row lg:items-center">
        {/* Illustration placeholder */}
        <div className="flex-1">
          <div className="relative overflow-hidden">
            <div className="aspect-4/3 w-full bg-white/60 backdrop-blur-sm" />
            <img
              src="/illustration.jpg"
              alt="SoftCodeMath Academy illustration"
              className="absolute inset-0 h-full w-full object-contain p-6"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#38bdf8]">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#001971] sm:text-4xl">
            Learning that fits your life.
          </h2>
          <p className="mt-4 text-base text-[#001971]/80 sm:text-lg">
            On-campus, live online, or blended—every class pairs projects with mentor feedback so you keep moving.
          </p>

          <div className="mt-6 space-y-4 text-[#001971]">
            <div className="flex items-start gap-3">
              <i className="fa-solid fa-circle-check mt-1 text-[#38bdf8]" aria-hidden="true"></i>
              <p className="text-sm sm:text-base">
                <span className="font-semibold">On-campus labs:</span> Build with peers in collaborative classrooms.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <i className="fa-solid fa-circle-check mt-1 text-[#38bdf8]" aria-hidden="true"></i>
              <p className="text-sm sm:text-base">
                <span className="font-semibold">Live online:</span> Interactive sessions you can join from anywhere.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <i className="fa-solid fa-circle-check mt-1 text-[#38bdf8]" aria-hidden="true"></i>
              <p className="text-sm sm:text-base">
                <span className="font-semibold">Blended tracks:</span> Mix in-person intensives with flexible online sprints.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <i className="fa-solid fa-circle-check mt-1 text-[#38bdf8]" aria-hidden="true"></i>
              <p className="text-sm sm:text-base">
                <span className="font-semibold">Career-ready:</span> Projects and feedback designed to ship real products.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <p
              onClick={() => navigate('/about')}
              className="inline-flex items-center justify-center rounded-full bg-[#001971] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#01124f]"
            >
              Learn more
            </p>
            <p
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center rounded-full border border-[#001971]/30 px-6 py-3 text-sm font-semibold text-[#001971] transition hover:bg-[#38bdf8]/10"
            >
              View schedules
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services