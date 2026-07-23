import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Magnetic from './Magnetic';
import ParticleField from './ParticleField';

const firstName = 'Kimaya';
const lastName = 'Deshpande';
const tagline = 'Blinking, thinking, clicking away';

function Letters({ text, baseDelay }) {
  return text.split('').map((ch, i) => (
    <span key={i} style={{ display: 'inline-block', overflow: 'hidden' }}>
      <motion.span
        style={{ display: 'inline-block' }}
        initial={{ y: '120%', rotate: 6 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: baseDelay + i * 0.028 }}
      >
        {ch === ' ' ? '\u00A0' : ch}
      </motion.span>
    </span>
  ));
}

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const nameScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <header id="top" className="hero hero-intro" ref={heroRef}>
      <ParticleField />

      <motion.div className="hero-intro-inner" style={{ opacity: fade, scale: nameScale }}>
        <motion.span
          className="hero-intro-eyebrow eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Software Engineer · Purdue CS '27
        </motion.span>

        <h1 className="hero-name">
          <span className="hero-name-line">
            <Letters text={firstName} baseDelay={0.2} />
          </span>
          <span className="hero-name-line hero-name-line-accent">
            <Letters text={lastName} baseDelay={0.2 + firstName.length * 0.028 + 0.08} />
          </span>
        </h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.95 }}
        >
          {tagline}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
        >
          <Magnetic as="a" href="#projects" className="btn btn-primary">View projects</Magnetic>
          <Magnetic as="a" href="#contact" className="btn btn-ghost">Get in touch</Magnetic>
        </motion.div>
      </motion.div>

      <motion.div className="hero-scroll" style={{ opacity: fade }}>
        <span className="hero-scroll-line" />
        scroll
      </motion.div>
    </header>
  );
}