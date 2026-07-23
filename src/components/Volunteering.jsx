import Reveal from './Reveal';
import { involvement } from '../data';

export default function Volunteering() {
  return (
    <section id="volunteering" className="section">
      <Reveal className="section-head">
        <span className="eyebrow">Beyond the code</span>
        <h2>Volunteering & leadership.</h2>
      </Reveal>

      <div className="involvement-list">
        {involvement.map((item, index) => (
          <Reveal as="div" delay={index * 0.06} key={item.role} className="involvement-item">
            <h3>{item.role}</h3>
            <span className="involvement-org">{item.org} · {item.date}</span>
            <p>{item.note}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
