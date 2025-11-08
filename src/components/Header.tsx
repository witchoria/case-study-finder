'use client';

import AnimatedEye from './AnimatedEye';

export default function Header() {
  return (
    <header className="bg-black w-full py-6 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - 4 eyes */}
        <div className="flex gap-4">
          <AnimatedEye size={32} />
          <AnimatedEye size={32} />
          <AnimatedEye size={32} />
          <AnimatedEye size={32} />
        </div>

        {/* Center - H1 */}
        <h1 className="font-cofo text-white uppercase" style={{ fontSize: 'var(--text-large)' }}>
          PRODUCT LURK
        </h1>

        {/* Right side - 4 eyes */}
        <div className="flex gap-4">
          <AnimatedEye size={32} />
          <AnimatedEye size={32} />
          <AnimatedEye size={32} />
          <AnimatedEye size={32} />
        </div>
      </div>
    </header>
  );
}
