import { motion } from 'framer-motion';

export default function SplitText({ text, delay = 0, stagger = 0.03, className = '' }) {
  const words = text.split(' ');

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', overflow: 'hidden', paddingBottom: '0.08em', marginRight: '0.28em' }} aria-hidden="true">
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%', rotate: 4 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + wi * stagger,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
