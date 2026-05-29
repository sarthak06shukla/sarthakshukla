import Container from '../components/Container';
import PageHeader from '../components/PageHeader';
import TimelineItem from '../components/TimelineItem';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section className="px-4 pb-24 pt-28 sm:pt-32">
      <PageHeader
        eyebrow="Experience"
        title="Experience"
      />

      <Container className="mt-12">
        <div className="relative">
          <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-blue-500/40 via-slate-300/30 to-transparent md:block" />

          <div className="space-y-8 md:space-y-10">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                index={index}
                isLeft={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
