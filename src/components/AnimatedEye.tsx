'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedEye() {
  const eyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!eyeRef.current) return;

      const { x, y, width, height } = eyeRef.current.getBoundingClientRect();
      const left = x + width / 2;
      const top = y + height / 2;
      const rad = Math.atan2(event.pageX - left, event.pageY - top);
      const degree = rad * (180 / Math.PI) * -1 + 180;
      eyeRef.current.style.transform = `rotate(${degree}deg)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="eye-square">
      <div className="eye-wrapper">
        <div className="eye" ref={eyeRef}>
          <div className="eye-ball">
            <div className="eye-iris"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
