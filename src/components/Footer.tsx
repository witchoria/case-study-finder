'use client';

import AnimatedEye from './AnimatedEye';

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full" style={{ padding: 'var(--spacing-section)' }}>
      {/* 3-column grid - full width */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="text-left">
          <p className="font-cofo" style={{ fontSize: 'var(--text-regular)' }}>
            This adventure in product ADHD is brought to you by Victoria Siemer, a healthy dose of I can do anything I put my mind to it delusion, and claude code.
          </p>
          <p className="font-cofo mt-4" style={{ fontSize: 'var(--text-regular)' }}>
            Want to learn more? Peep the case study (meta I know).
          </p>
        </div>

        {/* Center Column */}
        <div className="flex flex-col items-center justify-start">
          <p className="font-cofo text-white uppercase mb-6" style={{ fontSize: 'var(--text-large)' }}>
            PRODUCT LURK
          </p>
          <AnimatedEye />
        </div>

        {/* Right Column */}
        <div className="text-right flex flex-col items-end">
          <p className="font-cofo mb-4" style={{ fontSize: 'var(--text-regular)' }}>
            Enjoy your product tea?
          </p>
          <button className="bg-white text-black font-cofo px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors mb-2" style={{ fontSize: 'var(--text-regular)' }}>
            ☕ Buy me a coffee
          </button>
          <p className="font-cofo" style={{ fontSize: 'var(--text-regular)' }}>
            (API&apos;s are expensive!)
          </p>
        </div>
      </div>
    </footer>
  );
}
