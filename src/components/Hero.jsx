import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Magnetic from './Magnetic';

const line1 = ['I', 'build', 'AI', 'systems', 'for', 'the', 'moments', 'they'];
const line2 = ["can't", 'get', 'wrong.'];

function Word({ word, index, italic = false, baseDelay = 0.1 }) {
  return (
    <span style={{ display: 'inline-block', overflow: 'hidden', paddingBottom: '0.12em', marginRight: '0.28em' }}>
      <motion.span
        style={{ display: 'inline-block', fontStyle: italic ? 'italic' : 'normal', color: italic ? 'var(--moss)' : 'inherit' }}
        initial={{ y: '115%', rotate: 5 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: baseDelay + index * 0.045 }}
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <header id="top" className="hero" ref={heroRef}>
      <motion.div className="hero-blob" style={{ y: blobY }} aria-hidden="true" />

      <motion.div
        className="hero-eyebrow"
        style={{ opacity: fade }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className="dot" />
        <span className="eyebrow">Kimaya Deshpande — CS, Purdue '27</span>
      </motion.div>

      <motion.h1 style={{ opacity: fade }}>
        <div>
          {line1.map((w, i) => (
            <Word word={w} index={i} key={w + i} />
          ))}
        </div>
        <div>
          {line2.map((w, i) => (
            <Word word={w} index={line1.length + i} italic={w === "can't"} key={w + i} />
          ))}
        </div>
      </motion.h1>

      <motion.p
        className="hero-sub"
        style={{ opacity: fade }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.65 }}
      >
        Software engineer working across multi-agent architectures, healthcare AI, and
        LLM privacy research — from clinical pipelines at Humana to profiling-attack
        research in the lab.
      </motion.p>

      <motion.div
        className="hero-actions"
        style={{ opacity: fade }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.78 }}
      >
        <Magnetic as="a" href="#projects" className="btn btn-primary">View projects</Magnetic>
        <Magnetic as="a" href="#contact" className="btn btn-ghost">Get in touch</Magnetic>
      </motion.div>

      <motion.div className="hero-scroll" style={{ opacity: fade }}>
        <span className="hero-scroll-line" />
        scroll
      </motion.div>
    </header>
  );
}
