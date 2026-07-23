import Reveal from './Reveal';
import { techStack } from '../data';

export default function TechStack() {
  const doubled = [...techStack, ...techStack];

  return (
    <section id="tech-stack" className="section tech-section">
      <Reveal className="section-head">
        <span className="eyebrow">Tech Stack</span>
        <h2>What I reach for.</h2>
      </Reveal>

      <div className="marquee" data-cursor-hover>
        <div className="marquee-track">
          {doubled.map((tech, i) => (
            <span className="marquee-item" key={tech + i}>
              {tech}
              <span className="marquee-dot">·</span>
            </span>
          ))}
        </div>
      </div>
      <div className="marquee marquee-reverse" data-cursor-hover>
        <div className="marquee-track marquee-track-reverse">
          {doubled.map((tech, i) => (
            <span className="marquee-item marquee-item-ghost" key={tech + i}>
              {tech}
              <span className="marquee-dot">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
