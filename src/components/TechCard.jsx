export default function TechCard({ tech, isAdded, onAddToStack }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  // Badge styling helper
  const getBadgeClass = (badgeText) => {
    switch (badgeText?.toLowerCase()) {
      case 'popular':
        return 'bg-sky-50 text-sky-600 border-sky-200';
      case 'versatile':
        return 'bg-emerald-50 text-emerald-600 border-emerald-200';
      case 'fast':
        return 'bg-orange-50 text-orange-600 border-orange-200';
      case 'top sql':
        return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'cache':
        return 'bg-red-50 text-red-600 border-red-200';
      case 'ubiquitous':
        return 'bg-amber-50 text-amber-600 border-amber-200';
      case 'essential':
        return 'bg-indigo-50 text-indigo-600 border-indigo-200';
      case 'robust':
        return 'bg-cyan-50 text-cyan-700 border-cyan-200';
      case 'modern':
        return 'bg-teal-50 text-teal-600 border-teal-200';
      case 'containers':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full">
      <div>
        {/* Top: Icon and Badge */}
        <div className="flex items-center justify-between">
          <img
            src={icon}
            alt={`${name} icon`}
            className="w-8 h-8 object-contain"
          />
          {badge && (
            <span
              className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${getBadgeClass(
                badge
              )}`}
            >
              {badge}
            </span>
          )}
        </div>

        {/* Tech name */}
        <h3 className="text-xl font-bold text-slate-900 mt-4 text-left">
          {name}
        </h3>

        {/* Tech description */}
        <p className="text-sm text-slate-500 mt-2 leading-relaxed text-left line-clamp-3">
          {description}
        </p>
      </div>

      {/* Card footer details and button */}
      <div className="mt-6 pt-4 border-t border-slate-50">
        <div className="flex items-center justify-between text-xs text-slate-600 mb-4">
          <div className="flex items-center gap-2">
            <span className="bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-md font-medium text-slate-700">
              {category}
            </span>
            <span className="text-slate-500 font-medium">
              {difficulty}
            </span>
          </div>

          {/* Rating with star */}
          <div className="flex items-center gap-1 font-semibold text-slate-800">
            <svg
              className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{rating}</span>
          </div>
        </div>

        {/* Add to Stack Button */}
        <button
          type="button"
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-1.5 ${
            isAdded
              ? 'bg-slate-900/80 text-slate-300 cursor-not-allowed opacity-90'
              : 'bg-[#0B132B] hover:bg-slate-800 text-white shadow-sm hover:shadow'
          }`}
        >
          {isAdded ? (
            <>
              <svg
                className="w-4 h-4 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Added to Stack</span>
            </>
          ) : (
            'Add to Stack'
          )}
        </button>
      </div>
    </div>
  );
}
