import TechCard from './TechCard';

export default function TechGrid({ technologies, stack, onAddToStack }) {
  return (
    <div className="w-full">
      {/* Section header */}
      <div className="text-left mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Explore the{' '}
          <span className="text-brand-gradient">
            Technologies
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-500 mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Responsive card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech) => {
          const isAdded = stack.some((item) => item.id === tech.id);
          return (
            <TechCard
              key={tech.id}
              tech={tech}
              isAdded={isAdded}
              onAddToStack={onAddToStack}
            />
          );
        })}
      </div>
    </div>
  );
}
