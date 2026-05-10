import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '/home' },
  { label: 'Courses', href: '/courses' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const isStaticPrimary =
    pathname === '/courses' || pathname === '/contact' || pathname.startsWith('/course')

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navIsColored = isStaticPrimary || isScrolled

  const navBgClasses = navIsColored
    ? 'bg-[#001971] text-[#f8fbff]'
    : 'bg-transparent text-[#001971]'

  const mobileMenuClasses = useMemo(
    () =>
      [
        'md:hidden absolute left-4 right-4 top-[calc(100%+10px)]',
        'flex flex-col gap-1 rounded-2xl border',
        navIsColored
          ? 'border-white/20 bg-[#001971]'
          : 'border-[#001971]/15 bg-white',
        'px-3 py-3 origin-top transition-all duration-200 ease-out',
        isOpen
          ? 'opacity-100 translate-y-0 scale-y-100 pointer-events-auto'
          : 'opacity-0 -translate-y-2 scale-y-95 pointer-events-none',
      ].join(' '),
    [isOpen, navIsColored],
  )

  return (
    <nav className={`fixed top-0 z-50 w-full border-b border-transparent pb-[-20px] transition-colors duration-300 ${navBgClasses} ${navIsColored ? 'shadow-md' : ''}`}>
      <div className="relative mx-auto flex max-w-6xl items-center md:px-0 px-4 justify-between">
        <div className="flex items-center">
          <img src="/logo.png" onClick={()=>navigate('/')} alt="SoftCodeMath Academy logo" className="h-18 w-36 object-contain cursor-pointer" />
        </div>

        <ul className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <li key={link.label} className='cursor-pointer'>
              <p
                onClick={() => navigate(link.href)}
                className={`rounded-md text-md px-3 py-2 transition active:translate-y-px md:text-md ${
                  navIsColored
                    ? 'text-[#f8fbff] hover:bg-white/10'
                    : 'text-white hover:bg-[#38bdf8]/10'
                }`}
              >
                {link.label}
              </p>
            </li>
          ))}
        </ul>

        <button
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border transition active:translate-y-px md:hidden ${
            navIsColored
              ? 'border-white/25 bg-white/10 text-white hover:bg-white/15'
              : 'border-[#001971]/20 bg-white text-[#001971] hover:bg-[#38bdf8]/10'
          }`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <i className="fa-solid fa-xmark text-2xl leading-none" aria-hidden="true"></i>
          ) : (
            <i className="fa-solid fa-bars text-xl" aria-hidden="true"></i>
          )
          }
        </button>

        <ul className={mobileMenuClasses}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={closeMenu}
                className={`block rounded-xl px-3 py-3 text-sm font-semibold transition active:translate-y-px ${
                  navIsColored
                    ? 'text-[#f8fbff] hover:bg-white/10'
                    : 'text-[#001971] hover:bg-[#38bdf8]/10'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar