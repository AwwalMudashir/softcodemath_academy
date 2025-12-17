import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()
    const heroBg =
    "url('/hero-img.jpg')"

  return (
    <section className="relative  pt-20  md:pt-24 flex min-h-screen h-screen w-full items-center overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: heroBg }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/55 to-black/25" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 md:px-0">
        <div className="h-0.5 w-12 rounded-full bg-white/80" />
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          SoftCodeMath Academy
        </h1>
          <h4 className='max-w-3xl text-2xl mt-[-10px] mb-[-10px] font-semibold leading-tight text-white sm:text-2xl md:text-3xl'>Where Tech Futures Start</h4>
        <p className="max-w-2xl text-base text-white/85 sm:text-lg">
          Learn programming, product thinking, and modern tech skills with mentors who ship real-world software. Build projects, join a community, and launch your career in technology.
        </p>
        <div className="pt-2 flex flex-wrap gap-3">
          <p
            onClick={() => navigate('/courses')}
            className="cursor-pointer inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#001971] transition hover:bg-[#f0f4ff]"
          >
            Explore Programs
          </p>
          <p
            onClick={() => navigate('/contact')}
            className="cursor-pointer inline-flex rounded-lg border border-white/70 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Apply Now
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero