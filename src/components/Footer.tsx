'use client';

import AnimatedEye from './AnimatedEye';

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Centered Eye */}
        <div className="flex justify-center mb-12">
          <AnimatedEye />
        </div>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1 */}
          <div>
            <h3 className="font-geminis text-xl mb-4">Product</h3>
            <ul className="font-cofo space-y-2" style={{ fontSize: 'var(--text-regular)' }}>
              <li>
                <a href="#" className="hover:text-yellow transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-geminis text-xl mb-4">Company</h3>
            <ul className="font-cofo space-y-2" style={{ fontSize: 'var(--text-regular)' }}>
              <li>
                <a href="#" className="hover:text-yellow transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-geminis text-xl mb-4">Legal</h3>
            <ul className="font-cofo space-y-2" style={{ fontSize: 'var(--text-regular)' }}>
              <li>
                <a href="#" className="hover:text-yellow transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray text-center">
          <p className="font-cofo text-gray" style={{ fontSize: 'var(--text-regular)' }}>
            © 2024 Product Lurk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
