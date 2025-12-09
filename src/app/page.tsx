'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowResults(true);
  };

  const handleNewSearch = () => {
    setShowResults(false);
    setSearchQuery('');
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero
        showResults={showResults}
        onSearch={handleSearch}
        onNewSearch={handleNewSearch}
      />
      <Footer />
    </main>
  );
}
