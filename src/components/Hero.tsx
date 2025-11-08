'use client';

import SearchForm from './SearchForm';

export default function Hero() {
  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center px-8 py-16">
      <div className="max-w-5xl w-full">
        {/* Yellow folder container */}
        <div className="relative">
          {/* Folder tab */}
          <div className="absolute -top-8 left-12 w-48 h-12 bg-yellow rounded-t-lg" />

          {/* Main folder body */}
          <div className="bg-yellow rounded-lg p-12 md:p-16 lg:p-20">
            {/* Paragraph above headline */}
            <p className="font-cofo text-black text-lg md:text-xl mb-6">
              All's fair in love and product strategy
            </p>

            {/* Headline */}
            <h1 className="font-geminis text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black mb-8 md:mb-12 leading-tight">
              Keep your enemies close, and their case studies closer.
            </h1>

            {/* Search Form */}
            <SearchForm />
          </div>
        </div>
      </div>
    </section>
  );
}
