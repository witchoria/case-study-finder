'use client';

import { useState } from 'react';

interface SearchFormProps {
  onSearch: (query: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-2xl">
      <div className="relative">
        {/* Search input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter company name..."
          className="w-full px-6 py-4 pr-14 font-cofo bg-white text-black border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder-gray"
          style={{ fontSize: 'var(--text-regular)' }}
        />

        {/* Rotated search icon */}
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 transform rotate-90 hover:scale-110 transition-transform"
          aria-label="Search"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black"
            style={{ width: 'var(--icon-size)', height: 'var(--icon-size)' }}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </div>
    </form>
  );
}
