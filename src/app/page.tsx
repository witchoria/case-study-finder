export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Case Study Finder! 🎉
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Your Next.js 14 project is set up and running successfully with:
        </p>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <span className="text-green-500 font-bold mr-2">✓</span>
            <span className="text-gray-700"><strong>TypeScript</strong> - Type-safe development</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 font-bold mr-2">✓</span>
            <span className="text-gray-700"><strong>Tailwind CSS</strong> - Utility-first styling</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 font-bold mr-2">✓</span>
            <span className="text-gray-700"><strong>App Router</strong> - Modern Next.js routing</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 font-bold mr-2">✓</span>
            <span className="text-gray-700"><strong>src/ directory</strong> - Organized structure</span>
          </li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-sm text-blue-700">
            <strong>Next step:</strong> Edit <code className="bg-blue-100 px-2 py-1 rounded">src/app/page.tsx</code> to start building your application!
          </p>
        </div>

        <div className="flex gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Get Started
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
