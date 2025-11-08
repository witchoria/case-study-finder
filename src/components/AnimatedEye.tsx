'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedEyeProps {
  size?: number;
  className?: string;
}

export default function AnimatedEye({ size = 40, className = '' }: AnimatedEyeProps) {
  const eyeRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current) return;

      const eye = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = eye.left + eye.width / 2;
      const eyeCenterY = eye.top + eye.height / 2;

      const deltaX = e.clientX - eyeCenterX;
      const deltaY = e.clientY - eyeCenterY;

      // Calculate angle in degrees
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotation(angle);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={eyeRef}
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Eye container (circular) */}
      <div className="w-full h-full rounded-full bg-gray relative overflow-hidden">
        {/* Pupil - rotates to follow mouse */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-100 ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {/* Pupil offset from center */}
          <div
            className="absolute bg-black rounded-full"
            style={{
              width: size * 0.4,
              height: size * 0.4,
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) translateX(${size * 0.15}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
