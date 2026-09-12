import bannerImage from '../assets/banner-stack.png';

export default function Hero() {
  const handleScrollToTech = () => {
    const section = document.getElementById('technologies');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Build Your Ideal <br />
              <span className="text-brand-gradient">
                Development Stack
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={handleScrollToTech}
                className="bg-brand-gradient text-white font-semibold px-6 py-3 rounded-xl shadow-sm hover:opacity-90 transition-all duration-200"
              >
                Explore Technologies
              </button>

              <a
                href="#technologies"
                className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img
              src={bannerImage}
              alt="Development Stack Illustration"
              className="w-full max-w-md lg:max-w-none h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
