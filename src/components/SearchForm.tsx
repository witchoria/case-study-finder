'use client';

import { useState } from 'react';

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Backend integration later
    console.log('Search query:', searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-2xl">
      <div className="relative">
        {/* Search input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for case studies..."
          className="w-full px-6 py-4 pr-14 text-lg font-cofo bg-white text-black border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder-gray"
        />

        {/* Rotated search icon */}
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 transform rotate-90 hover:scale-110 transition-transform"
          aria-label="Search"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </div>
    </form>
  );
}
