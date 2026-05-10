import React from 'react'
import { useNavigate } from 'react-router-dom'

const InternshipSupport = () => {
  const navigate = useNavigate()

  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 md:px-0">
        <div className="w-full rounded-3xl bg-linear-to-b from-white via-[#f5f8ff] to-[#eaf7ff] border border-[#001971]/12 p-8 shadow-[0_14px_35px_rgba(0,25,113,0.06)]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-stretch">
            <div className="flex flex-col justify-center gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#38bdf8]">Industry Placements</p>
              <h3 className="text-2xl font-bold text-[#001971]">SIWES / Industrial Training Support</h3>
              <p className="text-base text-[#001971]/80">SoftCodeMath Academy partners with local companies and startups to place 2nd and 3rd year university students for SIWES (industrial training). We prepare students with pre-placement workshops, CV & portfolio reviews, technical interview practice, and guided mini-projects aligned to host requirements. During placement we provide remote mentorship, weekly check-ins, and assessment reports so students meet university learning objectives while gaining practical workplace experience.</p>
              <div className="flex gap-3">
                <button onClick={() => navigate('/courses')} className="rounded-lg bg-[#001971] px-5 py-2 text-sm font-semibold text-white hover:bg-[#01124f]">See related packages</button>
                <button onClick={() => navigate('/contact')} className="rounded-lg border border-[#001971]/15 bg-white px-5 py-2 text-sm font-semibold text-[#001971] hover:bg-[#f0f6ff]">Request placement help</button>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#38bdf8]">Service Programs</p>
              <h3 className="text-2xl font-bold text-[#001971]">NYSC Support & Service Programs</h3>
              <p className="text-base text-[#001971]/80">For graduates serving under NYSC, SoftCodeMath offers tailored service programs that help corps members gain hands-on experience, upskill in relevant technologies, and run community tech projects. Programs include supervised project work, mentorship from industry practitioners, and optional certification pathways. We also help match corps members with short-term placements and micro-contracts to build their portfolios during service year.</p>
              <div className="flex gap-3">
                <button onClick={() => navigate('/courses')} className="rounded-lg bg-[#001971] px-5 py-2 text-sm font-semibold text-white hover:bg-[#01124f]">Explore NYSC programs</button>
                <button onClick={() => navigate('/contact')} className="rounded-lg border border-[#001971]/15 bg-white px-5 py-2 text-sm font-semibold text-[#001971] hover:bg-[#f0f6ff]">Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InternshipSupport
