export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 text-left">
          
          {/* Brand info */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#E11D48] flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
                DS
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Dev <span className="text-[#E11D48]">Stack</span>
              </span>
            </div>

            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 pt-2">
              <a
                href="https://github.com/Wizardezgg"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E11D48] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E11D48] transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E11D48] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="#home" className="hover:text-[#E11D48] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-[#E11D48] transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#E11D48] transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="#about" className="hover:text-[#E11D48] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E11D48] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-[#E11D48] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="#privacy" className="hover:text-[#E11D48] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[#E11D48] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
