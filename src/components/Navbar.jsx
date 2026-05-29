import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from './Container';
import { navigationLinks, profile } from '../data/profile';

const coverImage = `${import.meta.env.BASE_URL}cover.jpeg`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -36, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <Container className="pt-4 sm:pt-5">
        <div
          className={`relative flex items-center justify-between rounded-full border px-4 py-3 shadow-[0_24px_80px_rgba(4,6,24,0.45)] backdrop-blur-2xl transition duration-300 sm:px-6 ${
            scrolled
              ? 'border-white/14 bg-slate-950/75'
              : 'border-white/10 bg-slate-950/55'
          }`}
        >
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

          <NavLink to="/" className="relative z-10 flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="h-10 w-10 overflow-hidden rounded-2xl border border-blue-500/25 bg-slate-950 shadow-[0_0_22px_rgba(63,130,248,0.14)]">
              <img
                src={coverImage}
                alt={`${profile.firstName} profile`}
                className="h-full w-full object-cover object-[56%_32%]"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-wide text-white">{profile.brand}</p>
            </div>
          </NavLink>

          <div className="hidden items-center gap-2 md:flex">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full border border-blue-500/25 bg-blue-500/[0.08]"
                        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                      />
                    ) : null}
                    <span className="relative z-10">{link.name}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setIsOpen((open) => !open)}
            className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-blue-500/25 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: 56, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 56, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-4 top-4 rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-[0_24px_80px_rgba(4,6,24,0.6)] backdrop-blur-2xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-base font-semibold text-white">{profile.fullName}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.26em] text-slate-400">{profile.role}</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-200"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 18 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-2xl border px-4 py-4 text-sm font-medium transition ${
                          isActive
                            ? 'border-blue-500/25 bg-blue-500/[0.08] text-white'
                            : 'border-white/8 bg-white/[0.03] text-slate-300 hover:border-white/15 hover:text-white'
                        }`
                      }
                    >
                      <span>{link.name}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-white/8 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Availability</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{profile.availability}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
