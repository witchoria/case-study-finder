'use client';

import SearchForm from './SearchForm';

export default function Hero() {
  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center px-8" style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)' }}>
      <div className="w-full">
        {/* Yellow folder container */}
        <div className="relative">
          {/* Folder tab */}
          <div className="absolute -top-8 left-12 w-48 h-12 rounded-t-lg" style={{ backgroundColor: '#FFC559' }} />

          {/* Main folder body */}
          <div className="rounded-lg" style={{ backgroundColor: '#FFC559', padding: 'var(--spacing-section)' }}>
            {/* Paragraph above headline */}
            <p className="font-cofo text-black mb-6" style={{ fontSize: 'var(--text-large)' }}>
              All's fair in love and product strategy
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
