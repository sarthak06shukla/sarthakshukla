import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const categories = ['All', ...new Set(projects.map((project) => project.category))];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="px-4 pb-24 pt-28 sm:pt-32">
      <PageHeader
        eyebrow="Projects"
        title="A few projects I&apos;ve worked on."
      />

      <Container className="mt-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                activeFilter === category
                  ? 'border-blue-500/25 bg-blue-500/[0.08] text-white shadow-[0_0_24px_rgba(63,130,248,0.12)]'
                  : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </Container>

      <Container className="mt-10">
        <motion.div layout className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 ? (
          <p className="mt-12 text-center text-sm text-slate-500">No projects found for this filter.</p>
        ) : null}

        <p className="mt-8 text-sm text-slate-500">
          Some projects are not public yet, so GitHub and live links are only shown where available.
        </p>
      </Container>
    </section>
  );
}
