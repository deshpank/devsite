import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Reveal from './Reveal';
import { projects } from '../data';

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-40, 40], [4, -4]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-160, 160], [-3, 3]), { stiffness: 220, damping: 22 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Reveal as="div" delay={index * 0.05} className="project-row-wrap">
      <motion.div
        ref={ref}
        className="project-row"
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        data-cursor-hover
      >
        <div className="project-heading">
          <h3>{project.name}</h3>
          <span className="project-tag">{project.tag}</span>
        </div>
        <p className="project-desc">{project.description}</p>
        <div className="project-meta">
          <span className="timeline-date">{project.date}</span>
          <div className="project-stack">
            {project.stack.map((tech) => (
              <span className="tag" key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal className="section-head">
        <span className="eyebrow">Projects</span>
        <h2>Things I've shipped and broken on purpose.</h2>
      </Reveal>

      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.name} />
        ))}
      </div>
    </section>
  );
}
