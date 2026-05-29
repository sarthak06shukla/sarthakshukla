import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, TimerReset } from 'lucide-react';
import Container from '../components/Container';
import GlassCard from '../components/GlassCard';
import GradientButton from '../components/GradientButton';
import Reveal from '../components/Reveal';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/BrandIcons';
import { contactChannels, profile, socialLinks } from '../data/profile';

const socialIconMap = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  'X / Twitter': TwitterIcon,
};

const contactIconMap = {
  Email: Mail,
  Phone,
  Location: MapPin,
  'Response time': TimerReset,
};

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const hasEmailJsConfig = Object.values(emailJsConfig).every(Boolean);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    if (status !== 'idle') {
      setStatus('idle');
    }

    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');

    try {
      const response = hasEmailJsConfig
        ? await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              service_id: emailJsConfig.serviceId,
              template_id: emailJsConfig.templateId,
              user_id: emailJsConfig.publicKey,
              template_params: {
                to_email: profile.email,
                title: `Portfolio message from ${formData.name}`,
                name: formData.name,
                email: formData.email,
                time: new Date().toLocaleString('en-IN', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                }),
                from_name: formData.name,
                from_email: formData.email,
                reply_to: formData.email,
                message: formData.message,
              },
            }),
          })
        : await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Name: formData.name,
              Email: formData.email,
              Message: formData.message,
              _replyto: formData.email,
              _subject: `Portfolio message from ${formData.name}`,
              _template: 'basic',
              _captcha: 'false',
            }),
          });

      if (!response.ok) {
        throw new Error('Message request failed');
      }

      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="px-4 pb-24 pt-28 sm:pt-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden py-8 sm:py-10">
            <motion.div
              aria-hidden="true"
              animate={{ x: ['-120%', '130%'] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
              className="absolute left-0 top-1/2 h-px w-56 bg-gradient-to-r from-transparent via-blue-200/45 to-transparent"
            />
            <h1 className="relative text-6xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl">
              <span className="gradient-text-glow">Contact</span>
            </h1>
          </div>
        </Reveal>
      </Container>

      <Container className="mt-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-6">
              <div className="space-y-4">
                {contactChannels.map((item, index) => {
                  const Icon = contactIconMap[item.label];

                  return (
                    <Reveal key={item.label} delay={index * 0.08}>
                      <GlassCard className="lift-on-hover rounded-[1.8rem] p-5">
                        <div className="relative z-10 flex gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-blue-200">
                            {Icon ? <Icon size={18} /> : null}
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                            <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
                          </div>
                        </div>
                      </GlassCard>
                    </Reveal>
                  );
                })}
              </div>

              <GlassCard className="rounded-[1.8rem] p-5 sm:p-6">
                <div className="relative z-10">
                  <p className="text-sm font-semibold text-white">Elsewhere on the internet</p>
                  <div className="mt-4 space-y-3">
                    {socialLinks.map((social) => {
                      const Icon = socialIconMap[social.label];

                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300 transition hover:border-blue-500/25 hover:text-white"
                        >
                          <span className="flex items-center gap-3">
                            {Icon ? <Icon size={16} className="text-slate-400" /> : null}
                            {social.label}
                          </span>
                          <span className="text-xs text-slate-500">{social.handle}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </GlassCard>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <GlassCard className="rounded-[2rem] p-6 sm:p-8">
              <div className="relative z-10">
                <span className="eyebrow-chip">Message</span>
                <h2 className="mt-6 text-3xl font-semibold text-white">Send me a message.</h2>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full rounded-[1.15rem] border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none transition focus:border-blue-500/35 focus:bg-white/[0.05]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-[1.15rem] border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none transition focus:border-blue-500/35 focus:bg-white/[0.05]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={7}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your message here."
                      className="w-full rounded-[1.15rem] border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none transition focus:border-blue-500/35 focus:bg-white/[0.05]"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <GradientButton type="submit" disabled={status === 'submitting'}>
                      {status === 'submitting' ? 'Sending...' : 'Send message'}
                      <Send size={18} />
                    </GradientButton>
                    {status === 'sent' ? (
                      <p className="text-sm text-blue-200">Message sent to my inbox.</p>
                    ) : null}
                    {status === 'error' ? (
                      <p className="text-sm text-red-300">
                        Message could not be sent. Please try again.
                      </p>
                    ) : null}
                  </div>
                </form>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
