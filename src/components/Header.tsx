'use client';

import AnimatedEye from './AnimatedEye';

export default function Header() {
  return (
    <header className="bg-black w-full">
      <div className="flex items-center justify-between">
        {/* Left side - 4 eyes (40vw total) */}
        <div className="flex">
          <AnimatedEye />
          <AnimatedEye />
          <AnimatedEye />
          <AnimatedEye />
        </div>

        {/* Center - H1 (20vw) */}
        <div className="flex items-center justify-center" style={{ width: '20vw' }}>
          <h1 className="font-cofo text-white uppercase text-center" style={{ fontSize: 'var(--text-large)' }}>
            PRODUCT LURK
          </h1>
        </div>

        {/* Right side - 4 eyes (40vw total) */}
        <div className="flex">
          <AnimatedEye />
          <AnimatedEye />
          <AnimatedEye />
          <AnimatedEye />
        </div>
      </div>
    </header>
  );
}
