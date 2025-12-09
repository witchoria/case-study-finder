'use client';

import Image from 'next/image';
import SearchForm from './SearchForm';

interface HeroProps {
  showResults: boolean;
  onSearch: (query: string) => void;
  onNewSearch: () => void;
}

// Mock data for results
const mockResults = [
  { id: 1, name: 'Jane Doe', title: 'Product Manager', url: 'www.example.com' },
  { id: 2, name: 'Jane Doe', title: 'Product Manager', url: 'www.example.com' },
  { id: 3, name: 'Jane Doe', title: 'Product Manager', url: 'www.example.com' },
  { id: 4, name: 'Jane Doe', title: 'Product Manager', url: 'www.example.com' },
  { id: 5, name: 'Jane Doe', title: 'Product Manager', url: 'www.example.com' },
];

export default function Hero({ showResults, onSearch, onNewSearch }: HeroProps) {
  return (
    <section className="w-full flex items-center justify-center px-4 md:px-[var(--spacing-horizontal)] py-[var(--spacing-section)]">
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
          <div className="p-4 md:p-[var(--spacing-section)]" style={{ backgroundColor: '#FFC559' }}>
            {!showResults ? (
              <>
                {/* Paragraph above headline */}
                <p className="font-cofo text-black mb-6" style={{ fontSize: 'var(--text-large)' }}>
                  All&apos;s fair in love and product strategy
                </p>

                {/* Hero headline */}
                <p className="font-geminis text-black mb-8 leading-tight" style={{ fontSize: 'var(--text-h1)' }}>
                  Keep your enemies close, and their case studies closer.
                </p>

                {/* Search Form */}
                <SearchForm onSearch={onSearch} />
              </>
            ) : (
              <>
                {/* Results heading */}
                <p className="font-geminis text-black mb-8 leading-tight" style={{ fontSize: 'var(--text-h1)' }}>
                  RESULTS
                </p>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={onNewSearch}
                    className="font-cofo px-6 py-3 bg-transparent text-black border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors"
                    style={{ fontSize: 'var(--text-regular)' }}
                  >
                    ← New search
                  </button>
                  <button
                    className="font-cofo px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                    style={{ fontSize: 'var(--text-regular)' }}
                  >
                    Download CSV (5) ↓
                  </button>
                </div>

                {/* Results table */}
                <div className="overflow-x-auto mb-8">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-black text-white">
                        <th className="font-cofo text-left p-4" style={{ fontSize: 'var(--text-regular)' }}>#</th>
                        <th className="font-cofo text-left p-4" style={{ fontSize: 'var(--text-regular)' }}>Name</th>
                        <th className="font-cofo text-left p-4" style={{ fontSize: 'var(--text-regular)' }}>Job title</th>
                        <th className="font-cofo text-left p-4" style={{ fontSize: 'var(--text-regular)' }}>Website URL</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockResults.map((result, index) => (
                        <tr
                          key={result.id}
                          className={index % 2 === 0 ? 'bg-white' : 'bg-black text-white'}
                        >
                          <td className="p-4">
                            <div className="inline-flex items-center justify-center w-8 h-8 bg-black text-white font-cofo" style={{ fontSize: 'var(--text-regular)' }}>
                              {result.id}
                            </div>
                          </td>
                          <td className="font-cofo p-4" style={{ fontSize: 'var(--text-regular)' }}>
                            {result.name}
                          </td>
                          <td className="font-cofo p-4" style={{ fontSize: 'var(--text-regular)' }}>
                            {result.title}
                          </td>
                          <td className="font-cofo p-4" style={{ fontSize: 'var(--text-regular)' }}>
                            <a
                              href={`https://${result.url}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:no-underline"
                            >
                              {result.url}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Load more button */}
                <button
                  className="w-full font-cofo px-6 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  style={{ fontSize: 'var(--text-regular)' }}
                >
                  Load more
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
