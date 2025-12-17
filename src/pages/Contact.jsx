import React from 'react'

const Contact = () => {
  return (
    <div className="w-full bg-white text-[#001971]">
      {/* Hero */}
      <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/55 to-[#001971]/50" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 sm:px-10">
          <div className="h-0.5 w-12 rounded-full bg-white/80" />
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Get in touch with SoftCodeMath Academy
          </h1>
          <p className="max-w-2xl text-base text-white/85 sm:text-lg">
            Ask about programs, partnerships, or mentoring. We’ll respond quickly and get you what you need.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-white">
              <i className="fa-solid fa-envelope"></i>
              hello@softcodemath.com
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-white">
              <i className="fa-solid fa-phone"></i>
              +234 703 023 0969
            </span>
          </div>
        </div>
      </section>

      {/* Contact form and info */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 md:px-0 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-[#001971]/12 bg-white p-6 shadow-[0_14px_35px_rgba(0,25,113,0.12)]">
            <h2 className="text-2xl font-bold text-[#001971]">Send us a message</h2>
            <p className="text-sm text-[#001971]/70">We usually reply within one business day.</p>
            <form className="mt-6 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#001971]">First name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-[#001971]/15 bg-white px-4 py-3 text-sm text-[#001971] outline-none focus:border-[#38bdf8]"
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#001971]">Last name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-[#001971]/15 bg-white px-4 py-3 text-sm text-[#001971] outline-none focus:border-[#38bdf8]"
                    placeholder="Last name"
                    required
                  />
                </div>
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
                <label className="text-sm font-semibold text-[#001971]">What do you need?</label>
                <select className="w-full rounded-lg border border-[#001971]/15 bg-white px-4 py-3 text-sm text-[#001971] outline-none focus:border-[#38bdf8]">
                  <option>Program inquiry</option>
                  <option>Partnership</option>
                  <option>Mentorship</option>
                  <option>Support</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#001971]">Message</label>
                <textarea
                  className="w-full rounded-lg border border-[#001971]/15 bg-white px-4 py-3 text-sm text-[#001971] outline-none focus:border-[#38bdf8]"
                  rows="4"
                  placeholder="Tell us more..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#001971] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#01124f]"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-6 rounded-2xl border border-[#001971]/10 bg-[#f8fbff] p-6 shadow-[0_10px_25px_rgba(0,25,113,0.08)]">
            <div>
              <h3 className="text-lg font-bold text-[#001971]">Reach us directly</h3>
              <p className="text-sm text-[#001971]/70">We’re available weekdays 9am–6pm.</p>
            </div>
            <div className="space-y-3 text-sm text-[#001971]">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#001971] shadow">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-[#001971]/70">hello@softcodemath.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#001971] shadow">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-[#001971]/70">+234 703 023 0969</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#001971] shadow">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-[#001971]/70">Osogbo, Nigeria (online & on-campus)</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white p-4 text-sm text-[#001971]/80 ring-1 ring-[#001971]/10">
              Want to book a call? Mention your availability in the message and we’ll schedule a slot.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact