'use client';

import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';

interface Orb {
  cx: number;
  cy: number;
  size: number;
  color: string;
  xAmp: number;
  yAmp: number;
  xPeriod: number;
  yPeriod: number;
  phase: number;
}

const orbs: Orb[] = [
  {
    cx: 25, cy: 35, size: 500, color: 'rgba(83,58,253,0.08)',
    xAmp: 60, yAmp: 40, xPeriod: 300, yPeriod: 240, phase: 0,
  },
  {
    cx: 70, cy: 55, size: 450, color: 'rgba(249,107,238,0.05)',
    xAmp: 50, yAmp: 55, xPeriod: 260, yPeriod: 300, phase: 100,
  },
  {
    cx: 50, cy: 25, size: 400, color: 'rgba(234,34,97,0.04)',
    xAmp: 45, yAmp: 35, xPeriod: 280, yPeriod: 220, phase: 180,
  },
];

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  sway: number;
  swayPeriod: number;
  opacity: number;
  delay: number;
}

// Deterministic PRNG to avoid server/client hydration mismatch
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const rand = seededRandom(42);
const particles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
  x: rand() * 100,
  y: rand() * 100,
  size: 2 + rand() * 2,
  speed: 0.08 + rand() * 0.12,
  sway: 15 + rand() * 20,
  swayPeriod: 200 + rand() * 100,
  opacity: 0.08 + rand() * 0.07,
  delay: i * 15,
}));

export const HeroBackground: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ overflow: 'hidden', background: 'transparent' }}>
      {orbs.map((orb, i) => {
        const f = frame + orb.phase;
        const dx = interpolate(
          Math.sin((f / orb.xPeriod) * Math.PI * 2),
          [-1, 1],
          [-orb.xAmp, orb.xAmp],
        );
        const dy = interpolate(
          Math.cos((f / orb.yPeriod) * Math.PI * 2),
          [-1, 1],
          [-orb.yAmp, orb.yAmp],
        );

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${orb.cx}%`,
              top: `${orb.cy}%`,
              width: orb.size,
              height: orb.size,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              transform: `translate(-50%, -50%) translate(${dx}px, ${dy}px)`,
              filter: 'blur(100px)',
              willChange: 'transform',
            }}
          />
        );
      })}

      {particles.map((p, i) => {
        const f = (frame + p.delay) % 300;
        const yOffset = -f * p.speed * 10;
        const xSway = interpolate(
          Math.sin((f / p.swayPeriod) * Math.PI * 2),
          [-1, 1],
          [-p.sway, p.sway],
        );
        const yPos = ((p.y + (yOffset / 10) % 100) + 100) % 100;
        const edgeFade =
          yPos < 10 ? yPos / 10 :
          yPos > 90 ? (100 - yPos) / 10 : 1;

        return (
          <div
            key={`p-${i}`}
            style={{
              position: 'absolute',
              left: `${p.x}%`,
              top: `${yPos}%`,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: `rgba(83,58,253,${p.opacity * edgeFade})`,
              transform: `translateX(${xSway}px)`,
              willChange: 'transform',
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
