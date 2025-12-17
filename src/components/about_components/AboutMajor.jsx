import React from 'react'

const features = [
  { icon: 'fa-solid fa-video', label: 'Live & Online' },
  { icon: 'fa-solid fa-book-open', label: '50+ Courses' },
  { icon: 'fa-solid fa-infinity', label: 'Lifetime Access' },
  { icon: 'fa-solid fa-bolt', label: 'Active Learning' },
]

const testimonials = [
  {
    name: 'Awwal Mudashir',
    role: 'Developer',
    quote:
      'A structured path with mentors who actually ship. My confidence coding in teams jumped fast.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Fatiu Oyebayo',
    role: 'Designer',
    quote: 'Clear feedback loops, practical projects, and a community that kept me consistent.',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
  {
    name: 'Ridwan Adeagbo',
    role: 'Learner',
    quote: 'Loved the balance of theory and hands-on builds. The guidance made all the difference.',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
]

const stats = [
  { label: 'Active Students', value: '100+' },
  { label: 'Interactive Courses', value: '30+' },
  { label: 'Graduate Students', value: '30+' },
  { label: 'Certified Teachers', value: '20+' },
]

const AboutMajor = () => {
  return (
    <div className="w-full bg-white text-[#001971]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#001971] text-white">
        <div className="absolute inset-0 bg-linear-to-r from-[#001971] via-[#001971] to-[#001971]/90" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-16 md:px-0 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#38bdf8]">About Us</p>
          <h1 className="text-3xl font-bold md:text-4xl">SoftCodeMath Academy</h1>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
            <span className="text-white/60">/</span>
            <span>About</span>
          </div>
        </div>
      </section>

      {/* Main about block */}
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-14 md:px-0 md:flex-row md:items-center md:gap-12">
        <div className="w-full overflow-hidden rounded-3xl border border-[#001971]/10 shadow-[0_14px_35px_rgba(0,25,113,0.12)] md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80"
            alt="Learning session"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex w-full flex-col gap-5 md:w-1/2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#38bdf8]">About Us</p>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            We have some of the best instructors available in the city.
          </h2>
          <p className="text-base text-[#001971]/80">
            We mix live mentoring, active learning, and hands-on projects so you gain the skills and confidence to ship.
            Learn online, on-campus, or blended—always with guidance from practitioners who build real products.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 rounded-2xl border border-[#001971]/10 bg-[#f5f8ff] px-3 py-3 text-sm font-semibold"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#38bdf8]/15 text-[#001971]">
                  <i className={f.icon} aria-hidden="true"></i>
                </span>
                <span className="text-[#001971]">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-[#f8fbff] py-14 md:py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 md:px-0">
          <div className="text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#38bdf8]">Testimonials</p>
            <h3 className="text-2xl font-bold text-[#001971] md:text-3xl">What our students say about us</h3>
            <p className="text-[#001971]/70 text-sm md:text-base">
              Honest feedback from learners who built skills and shipped projects with us.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex h-full flex-col gap-4 rounded-2xl border border-[#001971]/10 bg-white p-5 shadow-[0_10px_25px_rgba(0,25,113,0.08)]"
              >
                <p className="text-sm text-[#001971]/80 leading-relaxed">“{t.quote}”</p>
                <div className="flex items-center gap-3 pt-2">
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="text-sm font-semibold text-[#001971]">{t.name}</p>
                    <p className="text-xs text-[#001971]/60">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full bg-white py-12 md:py-14">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 px-4 md:px-0 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#38bdf8]/15 text-[#001971]">
                <i className="fa-solid fa-star" aria-hidden="true"></i>
              </div>
              <p className="text-lg font-bold text-[#001971]">{s.value}</p>
              <p className="text-xs text-[#001971]/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet our CEO */}
      <section className="w-full bg-[#f8fbff] py-16">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-4 md:grid-cols-2 md:px-0">
          <div className="order-1 overflow-hidden rounded-3xl border border-[#001971]/10 shadow-[0_14px_35px_rgba(0,25,113,0.12)]">
            <img
              src="/ridwan-bg.jpeg"
              alt="Ridwan Ilelaboye portrait"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-2 flex flex-col gap-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#38bdf8]">Meet our CEO</p>
            <h3 className="text-2xl font-bold text-[#001971] md:text-3xl">Ridwan Ilelaboye — Builder, mentor, leader.</h3>
            <p className="text-base text-[#001971]/80 leading-relaxed">
              Ridwan brings years of shipping production software, mentoring engineers, and guiding delivery teams. He
              champions practical learning, code quality, and a collaborative culture so every learner graduates with
              habits that fit real product teams.
            </p>
            <p className="text-base text-[#001971]/80 leading-relaxed">
              Under his leadership, SoftCodeMath Academy mirrors industry standards: code reviews, pair programming,
              project sprints, and feedback loops that prepare you to ship features responsibly and grow your career.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#001971] ring-1 ring-[#001971]/10">
                Engineering Leadership
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#001971] ring-1 ring-[#001971]/10">
                Mentorship Culture
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#001971] ring-1 ring-[#001971]/10">
                Product Delivery
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#001971] ring-1 ring-[#001971]/10">
                Code Quality
              </span>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <div className="h-14 w-14 overflow-hidden rounded-full border border-[#001971]/20">
                <img
                  src="/ridwan-sm.jpeg"
                  alt="Ridwan Ilelaboye portrait"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#001971]">Ridwan Ilelaboye</p>
                <p className="text-xs text-[#001971]/60">CEO, SoftCodeMath Academy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMajor