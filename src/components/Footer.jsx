import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons';
import Container from './Container';
import { navigationLinks, profile, socialLinks } from '../data/profile';

const iconMap = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  'X / Twitter': TwitterIcon,
};

export default function Footer() {
  return (
    <footer className="relative mt-10 pb-10">
      <Container>
        <div className="glass-panel flex flex-col items-center justify-between gap-8 rounded-[2rem] p-8 lg:flex-row lg:px-10 lg:py-6">
          {/* Copyright Area */}
          <div className="flex flex-col items-center gap-1.5 text-center lg:items-start lg:text-left">
            <span className="text-base font-medium text-slate-300">
              &copy; {new Date().getFullYear()} {profile.fullName}
            </span>
            <span className="text-sm text-slate-500">All rights reserved.</span>
          </div>

          {/* Minimalist Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 text-base font-medium">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-slate-400 transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Compact Social & Contact Icons */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/8 bg-white/[0.03] text-slate-400 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
              title="Email"
            >
              <Mail size={20} className="transition-transform group-hover:scale-110" />
            </a>

            {socialLinks.map((social) => {
              const Icon = iconMap[social.label];

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/8 bg-white/[0.03] text-slate-400 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
                  title={social.label}
                >
                  {Icon ? (
                    <Icon size={20} className="transition-transform group-hover:scale-110" />
                  ) : null}
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
