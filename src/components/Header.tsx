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
