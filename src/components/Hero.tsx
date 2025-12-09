'use client';

import Image from 'next/image';
import SearchForm from './SearchForm';

export default function Hero() {
  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center" style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)', paddingLeft: 'var(--spacing-horizontal)', paddingRight: 'var(--spacing-horizontal)' }}>
      <div className="w-full">
        {/* Yellow folder container */}
        <div>
          {/* Folder tab SVG */}
          <Image
            src="/images/folder%20tab.svg"
            alt="Folder tab"
            width={427}
            height={100}
            style={{
              width: 'clamp(8rem, 16.667vw, 26.67rem)',
              height: 'auto',
              display: 'block'
            }}
          />

          {/* Main folder body */}
          <div style={{ backgroundColor: '#FFC559', padding: 'var(--spacing-section)' }}>
            {/* Paragraph above headline */}
            <p className="font-cofo text-black mb-6" style={{ fontSize: 'var(--text-large)' }}>
              All&apos;s fair in love and product strategy
            </p>

            {/* Hero headline */}
            <p className="font-geminis text-black mb-8 leading-tight" style={{ fontSize: 'var(--text-h1)' }}>
              Keep your enemies close, and their case studies closer.
            </p>

            {/* Search Form */}
            <SearchForm />
          </div>
        </div>
      </div>
    </section>
  );
}
