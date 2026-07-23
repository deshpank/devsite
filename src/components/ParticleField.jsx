import { useEffect, useRef } from 'react';

const LAYERS = [
  { count: 70, minR: 0.6, maxR: 1.2, speed: 0.07, parallax: 6, glow: 3, alpha: [0.2, 0.45] },
  { count: 45, minR: 1.0, maxR: 1.9, speed: 0.13, parallax: 16, glow: 7, alpha: [0.35, 0.65] },
  { count: 24, minR: 1.7, maxR: 2.8, speed: 0.2, parallax: 30, glow: 13, alpha: [0.5, 0.9] },
];

export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width, height, dpr;
    let layers = [];
    let raf;
    let t = 0;
    const mouse = { x: 0, y: 0, nx: 0, ny: 0, active: false };

    const inkColor = '33, 31, 26';
    const mossColor = '63, 81, 56';
    const goldColor = '177, 128, 47';

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      mouse.x = width / 2;
      mouse.y = height / 2;

      layers = LAYERS.map((cfg) => ({
        cfg,
        stars: Array.from({ length: cfg.count }, () => {
          const roll = Math.random();
          const color = roll < 0.1 ? mossColor : roll < 0.16 ? goldColor : inkColor;
          return {
            x: Math.random() * width,
            y: Math.random() * height,
            r: cfg.minR + Math.random() * (cfg.maxR - cfg.minR),
            vx: (Math.random() - 0.5) * cfg.speed,
            vy: (Math.random() - 0.5) * cfg.speed,
            phase: Math.random() * Math.PI * 2,
            twinkleSpeed: 0.5 + Math.random() * 1.3,
            baseAlpha: cfg.alpha[0] + Math.random() * (cfg.alpha[1] - cfg.alpha[0]),
            color,
          };
        }),
      }));
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.nx = (mouse.x / width) * 2 - 1;
      mouse.ny = (mouse.y / height) * 2 - 1;
      mouse.active = true;
    }

    function onLeave() {
      mouse.active = false;
    }

    function step() {
      t += 0.016;
      ctx.clearRect(0, 0, width, height);

      layers.forEach((layer) => {
        const { cfg, stars } = layer;
        const parX = mouse.active ? -mouse.nx * cfg.parallax : 0;
        const parY = mouse.active ? -mouse.ny * cfg.parallax : 0;

        stars.forEach((s) => {
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < -20) s.x = width + 20;
          if (s.x > width + 20) s.x = -20;
          if (s.y < -20) s.y = height + 20;
          if (s.y > height + 20) s.y = -20;

          const twinkle = 0.55 + 0.45 * Math.sin(t * s.twinkleSpeed + s.phase);
          const alpha = s.baseAlpha * twinkle;
          const drawX = s.x + parX;
          const drawY = s.y + parY;

          ctx.beginPath();
          ctx.arc(drawX, drawY, s.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${s.color}, ${alpha})`;
          ctx.shadowColor = `rgba(${s.color}, ${Math.min(alpha + 0.2, 0.95)})`;
          ctx.shadowBlur = cfg.glow;
          ctx.fill();
        });
      });
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener('resize', resize);
    canvas.parentElement.addEventListener('mousemove', onMove);
    canvas.parentElement.addEventListener('mouseleave', onLeave);
    canvas.parentElement.addEventListener('touchmove', (e) => {
      if (e.touches[0]) onMove(e.touches[0]);
    }, { passive: true });

    if (!prefersReduced) {
      raf = requestAnimationFrame(step);
    } else {
      step();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.parentElement.removeEventListener('mousemove', onMove);
      canvas.parentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <canvas className="particle-field" ref={canvasRef} aria-hidden="true" />;
}