import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Hamburger button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Brand logo */}
          <a href="#home" className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-[#E11D48] flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
              DS
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Dev <span className="text-[#E11D48]">Stack</span>
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="text-[#E11D48] font-semibold transition-colors">
              Home
            </a>
            <a href="#technologies" className="text-slate-600 hover:text-[#E11D48] transition-colors">
              Technologies
            </a>
            <a href="#projects" className="text-slate-600 hover:text-[#E11D48] transition-colors">
              Projects
            </a>
            <a href="#about" className="text-slate-600 hover:text-[#E11D48] transition-colors">
              About
            </a>
            <a href="#contact" className="text-slate-600 hover:text-[#E11D48] transition-colors">
              Contact
            </a>
          </nav>

          {/* Right action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 px-2 sm:px-3 py-1.5 transition-colors"
            >
              Sign In
            </button>
            <button
              type="button"
              className="text-xs sm:text-sm font-semibold text-white bg-brand-gradient hover:opacity-90 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-sm hover:shadow transition-all duration-200"
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-[#E11D48] bg-pink-50"
          >
            Home
          </a>
          <a
            href="#technologies"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-600 hover:text-[#E11D48] hover:bg-slate-50"
          >
            Technologies
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-600 hover:text-[#E11D48] hover:bg-slate-50"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-600 hover:text-[#E11D48] hover:bg-slate-50"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-600 hover:text-[#E11D48] hover:bg-slate-50"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
