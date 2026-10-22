import { useEffect, useRef, useState } from 'react';
import styles from './CursorFollower.module.css';

const INTERACTIVE_SELECTOR = 'a, button, [role="button"]';
const TRAIL_LENGTH = 6;
const TRAIL_BASE_SIZE = 16;

function trailSize(index: number) {
  return TRAIL_BASE_SIZE * (1 - index / (TRAIL_LENGTH + 1));
}

export function CursorFollower() {
  const [enabled] = useState(() => {
    const canHover = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return canHover && !reducedMotion;
  });
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add(styles.cursorNone!);
    return () => document.body.classList.remove(styles.cursorNone!);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frame: number;
    const trail = Array.from({ length: TRAIL_LENGTH }, () => ({ x: mouseX, y: mouseY }));

    function handleMove(event: MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot!.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }

    function handleOver(event: MouseEvent) {
      const target = event.target as Element | null;
      if (target?.closest(INTERACTIVE_SELECTOR)) {
        ring?.classList.add(styles.ringActive!);
      }
    }

    function handleOut(event: MouseEvent) {
      const target = event.target as Element | null;
      if (target?.closest(INTERACTIVE_SELECTOR)) {
        ring?.classList.remove(styles.ringActive!);
      }
    }

    function tick() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring!.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      let prevX = mouseX;
      let prevY = mouseY;
      trail.forEach((point, index) => {
        const ease = Math.max(0.35 - index * 0.03, 0.14);
        point.x += (prevX - point.x) * ease;
        point.y += (prevY - point.y) * ease;
        const el = trailRefs.current[index];
        if (el) el.style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`;
        prevX = point.x;
        prevY = point.y;
      });

      frame = requestAnimationFrame(tick);
    }

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true">
      <div ref={ringRef} className={styles.ring} />
      <div ref={dotRef} className={styles.dot} />
      {Array.from({ length: TRAIL_LENGTH }, (_, index) => {
        const size = trailSize(index);
        return (
          <div
            key={index}
            ref={(el) => {
              trailRefs.current[index] = el;
            }}
            className={styles.trailDot}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              marginTop: `${-size / 2}px`,
              marginLeft: `${-size / 2}px`,
              opacity: 1 - index / TRAIL_LENGTH,
            }}
          />
        );
      })}
    </div>
  );
}
