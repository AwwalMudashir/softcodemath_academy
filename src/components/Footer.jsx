import React from 'react'
import { useNavigate } from 'react-router-dom'

const footerLinks = [
  {
    title: 'Academy',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Courses', href: '/courses' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { label: 'Web Development', href: '/courses#web' },
      { label: 'Data & AI', href: '/courses#data' },
      { label: 'UI/UX', href: '/courses#uiux' },
      { label: 'Cybersecurity', href: '/courses#security' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQs', href: '/contact#faq' },
      { label: 'Partnerships', href: '/contact#partnerships' },
      { label: 'Mentorship', href: '/contact#mentorship' },
      { label: 'Book a call', href: '/contact#form' },
    ],
  },
]

const socials = [
  { icon: 'fa-brands fa-facebook-f', href: 'https://facebook.com', label: 'Facebook' },
  { icon: 'fa-brands fa-twitter', href: 'https://twitter.com', label: 'Twitter' },
  { icon: 'fa-brands fa-linkedin-in', href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: 'fa-brands fa-instagram', href: 'https://instagram.com', label: 'Instagram' },
]

const Footer = () => {
  const navigate = useNavigate()

  const handleNav = (href) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noreferrer')
      return
    }
    navigate(href)
  }

  return (
    <footer className="w-full  bg-gradient-to-br from-[#001971] via-[#001971] to-slate-900 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-14 md:px-0">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-md space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="SoftCodeMath Academy logo" className="h-10 w-auto object-contain" />
              <div className="text-lg font-semibold">SoftCodeMath Academy</div>
            </div>
            <p className="text-sm text-white/80">
              We teach practical tech skills with mentorship, live feedback, and projects that mirror real teams—online,
              on-campus, or blended. Build confidence to ship, collaborate, and grow your career.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-white/90">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <i className="fa-solid fa-envelope"></i> hello@softcodemath.com
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <i className="fa-solid fa-phone"></i> +234 703 023 0969
              </span>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title} className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#38bdf8]">{group.title}</p>
                <ul className="space-y-2 text-sm text-white/80">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => handleNav(link.href)}
                        className="transition hover:text-white/100"
                        aria-label={link.label}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <button
                key={s.label}
                onClick={() => handleNav(s.href)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label={s.label}
              >
                <i className={s.icon} aria-hidden="true"></i>
              </button>
            ))}
          </div>
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} SoftCodeMath Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer