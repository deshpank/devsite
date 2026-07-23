import Reveal from './Reveal';
import { profile } from '../data';

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal className="section-head">
        <span className="eyebrow">About</span>
        <h2>Systems that touch real people's data.</h2>
      </Reveal>

      <div className="about-grid">
        <Reveal delay={0.1} className="about-body">
          <p>
            I'm a computer science student at Purdue, minoring in math, with a habit of
            gravitating toward problems where the stakes are personal — clinical
            measures, health data, insurance claims, people's own digital footprints.
            Most of my work lives at the intersection of AI agents and the systems that
            have to handle sensitive information responsibly.
          </p>
          <p>
            That's shown up as a multi-hop pipeline for clinical evaluation at Humana,
            an LLM-agent framework for studying privacy leakage in a research lab, and a
            couple of hackathon builds that turned "automate this" into working
            multi-agent software in under 48 hours. Underneath all of it, I like being
            the person who can go from a systems-level bug to a production feature and
            back again.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <dl className="about-facts">
            <div className="about-fact">
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="about-fact">
              <dt>Studying</dt>
              <dd>B.S. Computer Science, Math minor — {profile.school}</dd>
            </div>
            <div className="about-fact">
              <dt>Graduating</dt>
              <dd>{profile.grad}</dd>
            </div>
            <div className="about-fact">
              <dt>Focus</dt>
              <dd>AI agents, backend systems, LLM privacy</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
